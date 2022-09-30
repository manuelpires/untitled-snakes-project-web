import Image from "next/image";
import snk1 from "public/images/snake-1.png";
import snk2 from "public/images/snake-2.png";
import snk3 from "public/images/snake-3.png";
import snk4 from "public/images/snake-4.png";

const HeroImages = () => {
  return (
    <div
      className={`
        grid grid-cols-[147px_147px] grid-rows-[147px_147px] gap-4 justify-center mt-16
        md:grid-cols-[236px_236px] md:grid-rows-[236px_236px] md:gap-10
        xl:mt-0
      `}
    >
      {[snk1, snk2, snk3, snk4].map((image, index) => (
        <div
          key={index}
          className={`
            max-w-[147px]
            md:max-w-[236px]
        `}
        >
          <Image
            className={`
              rounded-lg
              md:rounded-2xl
            `}
            src={image}
            alt="Snake"
            width={236}
            height={236}
            layout="responsive"
            priority
          />
        </div>
      ))}
    </div>
  );
};

export default HeroImages;
