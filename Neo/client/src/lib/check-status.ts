export const OrderStatus = (status: string) => {
    switch (status) {
        case "pending":
            return "bg-orange-100 text-orange-800";
        case "paid":
            return "bg-blue-100 text-blue-800";
        case "shipped":
            return "bg-yellow-100 text-yellow-800";
        case "delivered":
            return "bg-green-100 text-green-800";
        case "cancelled":
            return "bg-red-100 text-red-800";
        default:
            return "bg-gray-100 text-gray-800";
    }
};