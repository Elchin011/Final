import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { LogOutIcon } from "lucide-react";
import Link from "next/link";

type User = {
    name: string;
    // add other user properties if needed
};

interface UserMenuProps {
    user: User;
}

export default function UserMenu({ user }: UserMenuProps) {
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Kənardan kliklə bağlamaq üçün effect
    useEffect(() => {
        function handleClickOutside(event: { target: any; }) {
            // event.target DOM elementidir
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    if (!user || !user.name) return null;

    return (
        <div className="relative inline-block text-left" ref={menuRef}>
            <Button
                className="w-[28px] h-[28px] text-[12px] rounded-full"
                onClick={() => setOpen(!open)}
            >
                {user.name.charAt(0)}
            </Button>

            {open && (
                <div className="absolute -left-17 mt-2 w-40 rounded-md shadow-md p-2  bg-white z-10">
                    <div className="py-1">
                        <div className="px-4 py-1 text-[16px] text-black">{user.name}</div>
                        <p className="text-sm px-4 text-gray-700"><Link href="/orders">Orders</Link></p>

                        <div className="px-4 mt-2 flex items-center justify-between ">
                            <p className="text-sm text-gray-700">Log out</p>
                            <Button
                                className=" border-none hover:bg-white shadow-none"
                                variant="outline"
                                onClick={() => {
                                    localStorage.removeItem("user");
                                    window.location.reload();
                                }}
                            >
                                <LogOutIcon strokeWidth={1.5} size={14} />
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
