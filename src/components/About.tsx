"use client";

import { Paragraph } from "@/components/Paragraph";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const images = [
    "https://i.ibb.co/mq9vDFP/p4.jpg",
    "https://i.ibb.co/cvBFv8r/p3.jpg",
    "https://i.ibb.co/09x3rRc/p2.jpg",
    "https://i.ibb.co/6m43Ryz/p1.jpg",
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Image Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {images.map((image, index) => (
          <motion.div
            key={image}
            className="overflow-hidden rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={400}
              height={300}
              alt={`Gallery Image ${index + 1}`}
              className="object-cover w-full h-48 sm:h-60 md:h-72 transition-transform duration-300 transform hover:scale-105"
            />
          </motion.div>
        ))}
      </div>

      {/* About Me Section */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-8 text-center text-indigo-600">About Me</h1>

        {/* Introduction */}
        <Paragraph className="mt-4">
          Hello! I&apos;m <span className="font-semibold">AZM Mehedi Hasan</span>, a passionate software developer hailing from the serene town of Kurigram in Rangpur. My journey into the world of technology began at a young age, fueled by an insatiable curiosity and a desire to create impactful solutions.
        </Paragraph>

        {/* Educational Background */}
        <Paragraph className="mt-4">
          My academic pursuit led me to the esteemed <span className="font-semibold">Bangladesh University of Engineering and Technology (BUET)</span>, where I graduated with a degree in Computer Science and Engineering. BUET was not just an institution; it was a crucible where my technical skills were honed, and my problem-solving abilities were sharpened. The rigorous curriculum and the vibrant campus life instilled in me a strong foundation and a relentless drive to excel in the tech industry.
        </Paragraph>

        {/* Professional Aspirations */}
        <Paragraph className="mt-4">
          Today, I am on a mission to become a <span className="text-blue-500">Full Stack Developer</span>, specializing in <span className="text-blue-500">React</span> for frontend development and <span className="text-green-500">Java Spring Boot</span> for backend solutions. I believe in building applications that are not only functional but also intuitive and user-friendly. My expertise in React allows me to craft dynamic and responsive user interfaces, while Java Spring Boot empowers me to develop robust and scalable backend systems.
        </Paragraph>

        {/* Personal Interests - Cricket */}
        <Paragraph className="mt-6">
          Beyond the realms of coding, I have a profound love for <span className="text-green-600">cricket</span>. Growing up in Kurigram, cricket was more than just a sport; it was a communal passion that brought people together. I vividly remember playing under the scorching sun with friends, strategizing our way through innings, and celebrating victories with unbridled joy.
        </Paragraph>
        <Paragraph className="mt-4">
          My admiration for cricket legends like <span className="font-semibold">MS Dhoni</span> and <span className="font-semibold">Shakib Al Hasan</span> stems from their exemplary leadership and versatility. Dhoni&apos;s calm demeanor and strategic acumen led India to numerous triumphs, while Shakib&apos;s all-round prowess has been instrumental for Bangladesh on many occasions. Their dedication and adaptability inspire me to approach challenges with resilience and creativity.
        </Paragraph>

        {/* Personal Interests - Video Games */}
        <Paragraph className="mt-6">
          When I seek a break from the digital grind, I immerse myself in the captivating worlds of <span className="text-purple-600">video games</span>. Games like <span className="italic">PUBG</span>, <span className="italic">GTA</span>, <span className="italic">The Witcher</span>, <span className="italic">Need for Speed</span>, and <span className="italic">Red Dead Redemption 2</span> are my go-to titles. These games not only offer thrilling adventures but also enhance my strategic thinking and decision-making skills.
        </Paragraph>
        <Paragraph className="mt-4">
          I cherish the moments spent navigating the open-world terrains of RDR2, the adrenaline rush of high-speed chases in NFS, and the intricate narratives woven in The Witcher series. These experiences provide a perfect blend of relaxation and mental stimulation, allowing me to recharge and return to my projects with renewed vigor.
        </Paragraph>

        {/* Personal Interests - Sports Preference */}
        <Paragraph className="mt-6">
          While I hold a deep appreciation for cricket, <span className="text-red-600">football</span> hasn&apos;t quite captured my interest. Despite this, I respect the passion and energy football brings to its global fanbase. The camaraderie and excitement surrounding football matches are undeniably infectious, even if it&apos;s not my personal favorite.
        </Paragraph>

        {/* Personal Stories and Experiences */}
        <Paragraph className="mt-6">
          One of the most defining moments in my life was leading my university&apos;s coding team in a national hackathon. Facing tight deadlines and complex challenges, I spearheaded the development of a web application that streamlined campus events. This experience not only solidified my technical skills but also taught me the importance of teamwork, leadership, and perseverance.
        </Paragraph>
        <Paragraph className="mt-4">
          Another cherished memory is participating in a community-driven project aimed at digitizing local businesses in Kurigram. Collaborating with fellow developers and local entrepreneurs, we built a platform that enabled small businesses to reach a broader audience online. Witnessing the tangible impact of our work on the community reinforced my belief in technology as a catalyst for positive change.
        </Paragraph>

        {/* Future Goals and Vision */}
        <Paragraph className="mt-6">
          Looking ahead, I aspire to delve deeper into the ever-evolving tech landscape. Embracing emerging technologies like <span className="text-blue-500">GraphQL</span>, <span className="text-green-500">Docker</span>, and <span className="text-pink-500">Machine Learning</span> fascinates me. I am committed to continuous learning and staying abreast of industry trends to deliver innovative and efficient solutions.
        </Paragraph>
        <Paragraph className="mt-4">
          My ultimate goal is to contribute to projects that make a meaningful difference, whether it&apos;s enhancing user experiences, optimizing backend processes, or developing applications that solve real-world problems. I believe in the synergy of creativity and technology, and I strive to harness both to build applications that resonate with users and stand the test of time.
        </Paragraph>

        {/* Closing Remarks */}
        <Paragraph className="mt-6">
          Thank you for taking the time to learn more about me. I am excited about the journey ahead and look forward to connecting with like-minded professionals, collaborating on innovative projects, and contributing to the dynamic field of software development.
        </Paragraph>
      </div>
    </div>
  );
}
