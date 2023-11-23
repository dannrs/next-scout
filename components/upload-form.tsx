"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { formSchema } from "@/lib/validations";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface UploadFormProps {
  onClick?: () => void;
}

export default function UploadForm({ onClick }: UploadFormProps) {
  const route = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      file: undefined,
    },
    mode: "onChange",
  });

  const fileRef = form.register("file", { required: true });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!values.file) return;

    try {
      const formData = new FormData();
      formData.append("file", values.file[0]);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error(await res.text());
    } catch (e) {
      console.error(e);
    }

    route.refresh();
    form.reset();
  }
  return (
    <div className="h-screen flex items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex items-end px-2"
        >
          <FormField
            control={form.control}
            name="file"
            render={({ field }) => (
              <FormItem>
                <FormLabel></FormLabel>
                <FormControl>
                  <Input type="file" accept="text/html" {...fileRef} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="ml-2"
            onClick={onClick ? onClick : undefined}
          >
            Upload
          </Button>
        </form>
      </Form>
    </div>
  );
}
