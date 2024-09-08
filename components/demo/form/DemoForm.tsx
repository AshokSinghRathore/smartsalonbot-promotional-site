import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import confetti from "canvas-confetti";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

import { schema } from "./schema";

type FormValues = z.infer<typeof schema>;

export default function DemoForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    // Trigger confetti on successful form submission
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="sm:grid sm:my-auto items-center max-w-full gap-3 p-3">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex w-full flex-wrap md:flex-nowrap">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                label="Name"
                isRequired
                errorMessage={errors.name?.message}
              />
            )}
          />
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap">
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                label="Phone"
                isRequired
                errorMessage={errors.phone?.message}
              />
            )}
          />
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap">
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="email"
                label="Email"
                isRequired
                errorMessage={errors.email?.message}
              />
            )}
          />
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap">
          <Controller
            name="message"
            control={control}
            render={({ field }) => (
              <Textarea
                {...field}
                label="Message"
                placeholder="Enter your Message"
                className="min-w-full"
                errorMessage={errors.message?.message}
              />
            )}
          />
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap mt-3">
          <CustomButton text="Submit" />
        </div>
      </form>
    </div>
  );
}

interface CustomButtonProps {
  text: string;
}

export const CustomButton: React.FC<CustomButtonProps> = ({ text }) => {
  return (
    <Button
      disableRipple
      className="w-full relative overflow-visible rounded-lg hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-lg after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0 bg-blue-500"
      variant="shadow"
      color="primary"
      size="lg"
      onPress={() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      }}
    >
      {text}
    </Button>
  );
};
