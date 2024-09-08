import Image from "next/image";
import { Divider } from "@nextui-org/divider";
import { Card, CardHeader } from "@nextui-org/card";

import { title, subtitle } from "@/components/primitives";

export default function HomePage() {
  return (
    <section
      className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 relative sm:min-h-screen"
      id="home"
    >
      <Image
        alt="smartsalonbot"
        className="w-full h-full object-cover absolute top-0 left-0 sm:h-96 rounded-md hidden sm:block"
        src="/salon.jpg"
        width={0}
        height={0}
        sizes="100vw"
      />
      <Card className="py-4 px-12 text-center hidden sm:grid">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
          <h1 className={title({ size: "sm" })}>
            Effortless Salon Management&nbsp;
          </h1>
          <br />
          <h1 className={title({ size: "sm" })}>with</h1>
          <br />
          <h1 className={title({ color: "violet" })}>Smart Salon Bot&nbsp;</h1>
          <Divider className="mt-2 bg-gray-300" />
          <h2 className={subtitle({ class: "mt-4 text-gray-400" })}>
            Revolutionize Your Salon with Smart Automation.
          </h2>
        </CardHeader>
      </Card>

      <div className="py-4 grid sm:hidden text-center">
        <div className="pb-0 pt-2 px-4 flex-col items-center">
          <h1 className={title({ size: "sm" })}>
            Effortless Salon Management&nbsp;
          </h1>
          <br />
          <h1 className={title({ size: "sm" })}>with</h1>
          <br />
          <h1 className={title({ color: "violet", })}>Smart Salon Bot&nbsp;</h1>
          <Divider className="mt-2 bg-gray-300" />
          <h2 className={subtitle({ class: "mt-4 text-gray-400" })}>
            Revolutionize Your Salon with Smart Automation.
          </h2>
        </div>
      </div>
    </section>
  );
}
