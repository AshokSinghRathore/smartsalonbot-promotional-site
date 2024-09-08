import { title, subtitle } from "@/components/primitives";
import Image from "next/image";
import { Divider } from "@nextui-org/divider";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

export default function AboutPage() {
  return (
    <section
      className="flex flex-col items-start justify-center gap-4 py-8 px-4 md:py-10 relative sm:min-h-screen"
      id="about"
    >

      <Card className="py-4 grid sm:grid-cols-3">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start sm:col-span-1">
          <h1 className={title({ color: "violet" })}>About us&nbsp;</h1>
          <Divider className="mt-2 mb-4 bg-gray-300" />
          <h4 className="font-normal text-large">
            Smart Salon Bot is a revolutionary Salon Management software
            designed to simplify the operations of your salon. By harnessing the
            power of automation, it takes the place of a traditional manager,
            handling tasks such as staff assignment, bookings, inventory
            management, staff attendance, sales, and customer interaction
            without the need for a salary or incentives. With Smart Salon Bot,
            you can increase your salon&apos;s profitability by 25-35% monthly,
            allowing you to focus on delivering exceptional service to your
            clients.
          </h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2 sm:col-span-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl w-full h-full"
            src="/about.jpg"
            height={270}
            width={270}
            sizes="100vw"
          />
        </CardBody>
      </Card>
    </section>
  );
}
