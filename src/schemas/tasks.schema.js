import { z } from "zod";

export const createTaskSchema = z.object({
    title: z.string({
        required_error: "Title is required",
    }).min(3, {
        message: "Title must be at least 3 characters"
    }),

    description: z.string({
        required_error: "Description is required",
    }),

    date: z.string().datetime().optional(),

    done: z.boolean().optional(),

})