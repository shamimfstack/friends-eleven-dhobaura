"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.objectUtil({
    username: z.string().min(2, {
        message: "Username must be at least 2 characterss"
    }).max(50),
})

export default function Register() {
    // define your form
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })

    // define a submit handler
    function onSubmit(values) {
        console.log(values);
    }

  return (
    <div className="flex min-h-screen max-w-6xl mx-auto items-center justify-center p-24">
      <div className="w-full md:w-1/2 border p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl text-green-600 font-bold">Register Here</h2>
        <Form {...form}>
            <FormField 
                control={form.control}
                name="username"
                render={({field} ) => (
                    <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                            <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormDescription>
                            This is your display name.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </Form>
      </div>
    </div>
  );
}
