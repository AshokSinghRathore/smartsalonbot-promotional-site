import { Card, CardBody } from "@nextui-org/card";

import { title, subtitle } from "@/components/primitives";

export default function ContactPage() {
  return (
    <section
      className="flex flex-col items-center justify-center gap-4 py-8 md:py-10"
      id="contact"
    >
      <div className="inline-block max-w-full text-center justify-center">
        <h1 className={title()}>Have some querries ? &nbsp;</h1>
        <br />
        <h1 className={title({ color: "violet" })}>Contact us&nbsp;</h1>
        <h1 className={title()}>on the below details.</h1>
        <Card className="mt-12 w-full">
          <CardBody className="text-center">
            {/* <p>Make beautiful websites regardless of your design experience.</p> */}
            <h2 className={subtitle()}>📞 726-8881-880</h2>
            <h2 className={subtitle()}>📧 customercare@smartsalonbot.com</h2>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
