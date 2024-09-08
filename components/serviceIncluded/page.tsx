import { Divider } from "@nextui-org/divider";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Chip } from "@nextui-org/chip";

import { services, ServiceType } from "./service";

import { title } from "@/components/primitives";

export default function ServiceIncludedPage() {
  return (
    <section
      className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 sm:min-h-screen"
      id="service"
    >
      <div className="inline-block max-w-full text-center justify-center">
        <h1 className={title({ color: "violet" })}>Service Included&nbsp;</h1>
        <Divider className="my-4 bg-gray-300" />
        <br />
        <div className="w-full h-full grid sm:grid-cols-3 grid-cols-1 gap-6">
          {services.map((item: ServiceType) => (
            <Card className="py-4 cursor-default" key={item.id}>
              <CardHeader className="pb-0 pt-2 flex-col items-start gap-3 relative">
                <Image
                  alt="Card background"
                  className="object-cover rounded-full"
                  src={item.imageSrc}
                  width={100}
                  height={100}
                />
                <Chip
                  color="primary"
                  className="font-bold text-start text-large"
                >
                  {item.title}
                </Chip>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <small className="text-default-500">{item.description}</small>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
