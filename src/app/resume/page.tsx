"use client";

import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { WorkHistory } from "@/components/WorkHistory";

export default function Home() {
  const handleDownload = () => {
    const resumeUrl = "/Mern_Stack_developer_Mehedi_Hasan.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Resume_Mehedi.pdf";
    link.click();
    console.log("Clicked")
  };

  return (
    <Container>
      <div className="flex justify-between items-center">
        <div>
          <span className="text-4xl">💼</span>
          <Heading className="font-black">Work History</Heading>
          <Paragraph className="max-w-xl mt-4">
            I&apos;m a <span className="font-bold text-lg text-emerald-500">Full Stack developer</span> that loves{" "}
            <Highlight>building products</Highlight> and web apps that can
            impact millions of lives
          </Paragraph>
        </div>
        <button
          onClick={handleDownload}
          className="bg-emerald-500 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-emerald-600 transition duration-300"
        >
          Download Resume
        </button>
      </div>
      <WorkHistory />
    </Container>
  );
}
