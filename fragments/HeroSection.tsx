import { Section } from "fragments";
import { HeroImages } from "components";

const HeroSection = () => (
  <Section
    id="hero"
    className="flex flex-row-reverse flex-wrap justify-center items-center py-20"
  >
    <header
      className={`
        flex p-0 text-center items-center max-w-full
        xl:pl-12 xl:max-w-[50%] xl:text-start
      `}
    >
      <h1
        className={`
        text-7xl bg-gradient-160 from-sky-500 to-green-500 w-fit bg-clip-text text-transparent
        md:text-[8.5rem]
        xl:leading-[10rem]
      `}
      >
        Untitled Snakes Project
      </h1>
    </header>
    <HeroImages />
  </Section>
);

export default HeroSection;
