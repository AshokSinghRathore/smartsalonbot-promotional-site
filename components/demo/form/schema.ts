import { z } from "zod";

// Define the schema for validation using zod
export const schema = z.object({
  name: z.string({
    required_error: "Name is required",
    invalid_type_error: "Invalid Name",
  }),
  phone: z.number({
    required_error: "Phone is required",
    invalid_type_error: "Invalid Phone number",
  }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Invalid email address"),
  message: z.string(),
});
