import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { cartItems, returnUrl } = body;

        const line_items = cartItems.map((item: any) => ({
            price_data: {
                currency: "usd",
                product_data: {
                    name: item.name,
                    images: [item.image],
                },
                unit_amount: item.price * 100,
            },
            quantity: item.quantity,
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items,
            mode: "payment",
            success_url: `${req.nextUrl.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: returnUrl || `${req.nextUrl.origin}/cancel`,
        });

        return NextResponse.json({ sessionId: session.id });
    } catch (err: any) {
        // console.error("Stripe Checkout Error:", err.message);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
