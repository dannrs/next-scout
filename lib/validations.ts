import * as z from "zod";

export const formSchema = z.object({
  file: z
    .any()
    .refine((file) => file?.length === 1, "File is required.")
    .refine((file) => file[0]?.type === "text/html", "Must be a html.")
    .refine((file) => file[0]?.size <= 3000000, "Max file size is 3MB"),
});
