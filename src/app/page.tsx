import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello, I&apos;m Mehedi Hasan</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a <Highlight>Software Engineer</Highlight> and Front-End Developer with a passion for creating
        impactful digital products. I enjoy turning ideas into scalable, 
        performance-driven, and beautifully designed web applications.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        Though I&apos;m starting my journey in software development, I bring 
        <Highlight>enthusiasm, dedication</Highlight>, and a strong desire to learn and grow. 
        I&apos;m committed to building solutions that deliver value and leave a positive impression.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Projects and Products
      </Heading>
      <Paragraph className="max-w-xl mb-4">
        Here are some of the projects I&apos;ve been working on recently. Each one is 
        a step toward honing my skills and contributing to the tech community.
      </Paragraph>
      <Products />
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        My Tech Stack
      </Heading>
      <Paragraph className="max-w-xl mb-4">
        These are the tools and technologies I use to bring ideas to life. 
        I&apos;m always exploring new frameworks and libraries to expand my toolkit.
      </Paragraph>
      <TechStack />
    </Container>
  );
}
