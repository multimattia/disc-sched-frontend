import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  discordMessage: z.string().min(1, {
    message: "Message must be at least 1 character long.",
  }),
  discordChannel: z
    .string()
    .refine((v) => !isNaN(parseInt(v)), {
      message: "Value must be an integer.",
    })
    .refine((value) => value.length >= 15, {
      message: "Integer must be more than 15 digits long",
    })
    .refine((value) => value.length <= 20, {
      message: "Integer must be less than 20 digits long",
    }),
});

export const MessageForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      discordMessage: "",
      discordChannel: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="discordMessage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Message" {...field} />
                </FormControl>
                <FormDescription>
                  This is the message to be sent to the server.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="discordChannel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Channel ID</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Channel ID" {...field} />
                </FormControl>
                <FormDescription>
                  This is the Channel ID for the message you're sending.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Send</Button>
        </form>
      </Form>
    </div>
  );
};
