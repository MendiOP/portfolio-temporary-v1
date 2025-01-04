import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { Heading } from "./Heading";

export const TechStack = () => {
  const stack = [
    {
      title: "React.js",
      src: "/images/logos/react.png",
      className: "h-16 w-24",
    },
    {
      title: "Java",
      src: "/images/logos/java.png",
      className: "h-16 w-16",
    },
    {
      title: "C++",
      src: "/images/logos/cpp.png",
      className: "h-16 w-16",
    },
    {
      title: "JavaScript",
      src: "/images/logos/js.png",
      className: "h-16 w-16",
    },
    {
      title: "MongoDB",
      src: "/images/logos/mongo.webp",
      className: "h-16 w-16",
    },
    {
      title: "MySQL",
      src: "/images/logos/sql.png",
      className: "h-16 w-16",
    },
    {
      title: "Framer Motion",
      src: "/images/logos/framer.webp",
      className: "h-16 w-16",
    },
    {
      title: "Node",
      src: "/images/logos/node.png",
      className: "h-16 w-20",
    },
    {
      title: "Tailwind",
      src: "/images/logos/tailwind.png",
      className: "h-16 w-32",
    },
    {
      title: "DaisyUI",
      src: "/images/logos/daisyu.png",
      className: "h-16 w-32",
    },
  ];

  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Tech Stack
      </Heading>
      <div className="flex flex-wrap justify-center">
        {stack.map((item) => (
          <div key={item.src} className="flex items-center justify-center p-2">
            <Image
              src={item.src}
              width={200}
              height={200}
              alt={item.title}
              className={twMerge("object-contain", item.className)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
