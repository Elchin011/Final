"use client";
import { Button } from "@/components/ui/button";
import { getAPi } from "@/http/api";
import { AppointmentStatus } from "@/lib/appointment";
import { OrderStatus } from "@/lib/check-status"; // status rəng funksiyası
import { useQuery } from "@tanstack/react-query";
import React from "react";

const page = () => {
  const user =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user") || "null")
      : null;

  const userId = user?._id;

  const { data, isLoading } = useQuery({
    queryKey: ["appointments", userId],
    queryFn: async () => getAPi(`/appointments?user=${userId}`),
    enabled: !!userId,
  });

  if (!user || !user._id) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-xl">
          <div className="text-center text-red-500 text-lg font-semibold">
            Zəhmət olmasa, əvvəlcə daxil olun.
          </div>
        </div>
      </div>
    );
  }

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <img
          className="w-20 h-10"
          src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator_large.gif"
          alt="Loading..."
        />
      </div>
    );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-10">
      <div className="bg-white p-8 rounded-lg shadow-lg w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Appointments</h1>
        </div>
        {data && data?.data?.length > 0 ? (
          data.data
            .filter(
              (appointment: any) =>
                appointment.status === "confirmed" ||
                appointment.status === "cancelled"
            )
            .map((appointment: any) => (
              <div
                key={appointment._id}
                className="mb-4 p-4 border rounded-md bg-gray-50"
              >
                <ul className="list-none">
                  <li className="text-[20px]">
                    <strong>Dear Patient:</strong> {appointment.firstName}{" "}
                    {appointment.lastname}
                  </li>
                  <li>
                    <strong>Doctor:</strong> {appointment.doctor?.name || "N/A"}
                  </li>
                  <li>
                    <strong>Date & Time:</strong>{" "}
                    {new Date(appointment.date).toLocaleDateString()}{" | "}
                    {appointment.time}
                  </li>
                  <li>
                    <strong>Appointment:</strong>{" "}
                    <Button
                      className={`mt-1 px-4 py-1 rounded-md ${AppointmentStatus(
                        appointment.status
                      )}`}
                    >
                      {appointment.status}
                    </Button>
                  </li>
                </ul>
              </div>
            ))
        ) : (
          <p className="text-center text-gray-500">No appointments found.</p>
        )}

      </div>
    </div>
  );
};

export default page;
