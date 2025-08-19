"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { LogOutIcon } from "lucide-react";
import Link from "next/link";

type User = {
  name: string;
};
type UserMenuProps = {
    user: User;
    };

const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
  const [localUser, setLocalUser] = useState<User | null>(null);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // localStorage-dan user-i client mount zamanı al
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setLocalUser(JSON.parse(storedUser));
  }, []);

  // Kənardan kliklə bağlamaq üçün effect
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const displayUser = localUser || user;
  if (!displayUser || !displayUser.name) return null;

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <Button
        className="w-[28px] h-[28px] text-[12px] rounded-full"
        onClick={() => setOpen(!open)}
      >
        {displayUser.name.charAt(0)}
      </Button>

      {open && (
        <div className="absolute -left-17 mt-2 w-40 rounded-md shadow-md p-2 bg-white z-10">
          <div className="py-1">
            <div className="px-4 py-1 text-[16px] text-black">{displayUser.name}</div>
            <p className="text-sm px-4 text-gray-700">
              <Link href="/orders">Orders</Link>
            </p>

            <div className="px-4 mt-2 flex items-center justify-between">
              <p className="text-sm text-gray-700">Log out</p>
              <Button
                className="border-none hover:bg-white shadow-none"
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
};

export default UserMenu;
