import Image from "next/image";
import { Divider } from "@nextui-org/divider";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";

import { testimonials, TestimonialType } from "./testimonials";

import { title } from "@/components/primitives";

export default function TestimonialsPage() {
  return (
    <section
      className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 sm:min-h-screen sm:my-40"
      id="testimonials"
    >
      <div className="inline-block max-w-full text-center justify-center">
        {/* <h1 className={title()}>Make&nbsp;</h1> */}
        <h1 className={title({ color: "violet" })}>Testimonials&nbsp;</h1>
        <Divider className="my-4 bg-gray-300" />
        <br />
        <div className="w-full h-full grid sm:grid-cols-3 grid-cols-1 gap-6">
          {testimonials.map((item: TestimonialType) => (
            <Card className="py-4 gap-3" key={item.id}>
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-default-500 text-lg">" {item.quote} "</p>
              </CardHeader>
              <CardBody className="overflow-visible py-2 flex flex-col gap-4">
                <Image
                  alt="testimonials"
                  className="w-full h-full object-cover rounded-xl"
                  src={item.imageSrc}
                  width={0}
                  height={0}
                  sizes="100vw"
                />
                <h4 className="font-bold text-large">{item.name}</h4>
                <p className="text-tiny font-normal">{item.role}</p>
                <Chip
                  color="primary"
                  className="font-bold text-start text-large"
                >
                  ★ {item.rating}/5
                </Chip>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
