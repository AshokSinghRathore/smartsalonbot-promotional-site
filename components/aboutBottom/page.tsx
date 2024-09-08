import { title, subtitle } from "@/components/primitives";

export default function AboutBottomPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 sm:min-h-lvh">
      <div className="inline-block max-w-full text-center justify-center">
        <h1 className={title()}>Transform your Salon&apos;s &nbsp;</h1>
        <h1 className={title({ color: "violet" })}>Efficiency&nbsp;</h1>
        <br />
        <h1 className={title()}>
          and unlock the true potential of your Salon.
        </h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Let Tech Handle the Hard Part, While You Shine.
        </h2>
      </div>
    </section>
  );
}
