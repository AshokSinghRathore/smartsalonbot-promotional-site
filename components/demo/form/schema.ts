import { z } from "zod";

// Define the schema for validation using zod
export const schema = z.object({
  name: z.string({
    required_error: "Name is required",
    invalid_type_error: "Invalid Name",
  }),
  city: z.string({
    required_error: "City is required",
    invalid_type_error: "Invalid City",
  }),
  address: z.string({
    required_error: "Address is required",
    invalid_type_error: "Invalid Address",
  }),
  phone: z
  .string()
  .min(10, "Phone number must be at least 10 digits")
  .regex(/^[0-9]+$/, "Phone number must only contain numbers"),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Invalid email address"),
  message: z.string(),
});
