import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Metadata } from "next";

import About from "@/components/About";

export const metadata: Metadata = {
  title: "About | Mehedi Hasan",
  description:
    "Mehedi is a developer, gamer and traveler. He is a digital nomad and travels around the world while working remotely.",
};

export default function AboutPage() {
  const images = [
    "https://i.ibb.co.com/mq9vDFP/p4.jpg",
    "https://i.ibb.co.com/cvBFv8r/p3.jpg",
    "https://i.ibb.co.com/09x3rRc/p2.jpg",
    "https://i.ibb.co.com/6m43Ryz/p1.jpg",
  ];
  return (
    <Container>
      <span className="text-4xl">💬</span>
      <Heading className="font-black">About Me</Heading>
      <About />
    </Container>
  );
}
