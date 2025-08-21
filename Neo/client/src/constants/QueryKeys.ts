import { create } from "domain";

export const QueryKeys = {
    register: ["register"],
    login: ["login"],
    user: ["user"],
    products: {
        sizes: ["sizes"],
        createSize: ["size-create"],
        All: ["All_products"],
        colors: ["colors"],
        createColor: ["color-create"],
        createProduct: ["create-product"],
        categories: ["categories"],
        createCategory: ["category-create"],
    },
    orders: {
        all: ["orders"],
        updateOrderStatus: (orderId: string) => ["update-order-status", orderId],
    },
    appointments: {
        All: ["All_appointments"],
        updateAppointmentStatus: (appointmentId: string) => ["update-appointment-status", appointmentId],
    },
    persons: {
        All: ["All_persons"],
        createPerson: ["create-person"],
        createSpecialty: ["create-specialty"],
        specialties: ["specialties"],
    },
    serviceLevels: {
        All: ["All_service_levels"],
        createServiceLevel: ["create-service-level"],
    },
    blogs:{
        All: ["All_blog"],
        createBlog: ["create-blog"]
    },
    questions: {
        All: ["All_questions"],
        createQuestion: ["create-question"]
    }
};