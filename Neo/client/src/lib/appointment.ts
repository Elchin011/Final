export const AppointmentStatus = (status: string) => {
    switch (status) {
        case "pending":
            return "bg-orange-100 text-orange-800";
        case "confirmed":
            return "bg-green-100 text-blue-800";
        case "cancelled":
            return "bg-red-100 text-red-800";
        default:
            return "bg-gray-100 text-gray-800";
    }
};