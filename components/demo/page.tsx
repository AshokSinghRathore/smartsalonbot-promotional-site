"use client";

import { Divider } from "@nextui-org/divider";

import DemoForm from "./form/DemoForm";

import { title, subtitle } from "@/components/primitives";

export default function DemoPage() {
  return (
    <section
      className="grid sm:grid-cols-2 gap-6 py-8 my-8 md:py-10 sm:min-h-screen"
      id="demo"
    >
      <div className="flex flex-col max-w-xl text-center justify-center sm:col-span-1">
        <h1 className="text-4xl font-bold">Book a free&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>Demo&nbsp;</h1>
        <br />
        <h2 className={subtitle({ class: "mt-4" })}>
          We offer a complimentary demo to give customers a clear insight into
          our product.
        </h2>
        <h2 className={subtitle({ class: "mt-4" })}>
          Monday - Friday - 08:00 - 19:00
        </h2>
        <Divider className="my-4 bg-gray-300" />
      </div>
      <DemoForm />
    </section>
  );
}
