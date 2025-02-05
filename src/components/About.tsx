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
    "https://i.ibb.co/KpsLfxJW/IMG20240605133008.jpg",
    "https://i.ibb.co/jP8fVfbJ/IMG20240605132022.jpg",


    "https://i.ibb.co/35BJFgWv/IMG20240602113311.jpg",
    "https://i.ibb.co/QFQVGYxx/IMG20240605073325.jpg",
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
        <h1 className="text-5xl font-extrabold mb-8 text-center text-indigo-600">
          About Me
        </h1>

        {/* Introduction */}
        <Paragraph className="mt-4">
          Hi there! I&apos;m <span className="font-semibold text-lg">AZM Mehedi Hasan</span> and I’m a software developer with a big passion for creating things that matter. I grew up in the peaceful town of Kurigram in Rangpur, and my love for technology started when I was really young, fueled by endless curiosity and a desire to make a difference.
        </Paragraph>

        {/* Educational Background */}
        <Paragraph className="mt-4">
          I followed my passion to the prestigious <span className="font-semibold text-lg">Bangladesh University of Engineering and Technology (BUET)</span>, where I studied Computer Science and Engineering. My time at BUET wasn’t just about classes—it was where I really challenged myself, learned to think critically, and discovered just how much I love solving problems.
        </Paragraph>

        {/* Professional Aspirations */}
        <Paragraph className="mt-4">
          Nowadays, I’m on a journey to become a true <span className="text-blue-500 text-lg">Full Stack Developer</span>. I love working with <span className="text-blue-500 text-lg">React</span> on the frontend to create engaging user experiences, while using <span className="text-green-500 text-lg">Java Spring Boot</span> on the backend to build powerful and reliable systems. I believe that every app should not only work well but also feel intuitive and friendly.
        </Paragraph>

        {/* Personal Interests - Cricket */}
        <Paragraph className="mt-6">
          When I’m not coding, you can often find me enjoying a good game of <span className="text-green-600">cricket</span>. Growing up in Kurigram, cricket wasn’t just a sport—it was a way for the community to come together, laugh, and share memorable moments. I have countless memories of playing under the hot sun with friends and celebrating every small victory.
        </Paragraph>
        <Paragraph className="mt-4">
          I’m inspired by cricket legends like <span className="font-semibold">MS Dhoni</span> and <span className="font-semibold">Shakib Al Hasan</span>. Their calm leadership and impressive skills remind me that success comes from staying cool under pressure and always giving your best.
        </Paragraph>

        {/* Personal Interests - Video Games */}
        <Paragraph className="mt-6">
          Sometimes, I need a break from the real world, so I dive into the exciting realms of <span className="text-purple-600">video games</span>. Whether it’s battling it out in <span className="italic">PUBG</span>, exploring the open worlds of <span className="italic">GTA</span> and <span className="italic">The Witcher</span>, or feeling the rush in <span className="italic">Need for Speed</span> and <span className="italic">Red Dead Redemption 2</span>, gaming helps me unwind and fuels my creative energy.
        </Paragraph>
        <Paragraph className="mt-4">
          I love the mix of challenge and relaxation that gaming provides. It’s a fun way to reset and come back to my work with fresh ideas and enthusiasm.
        </Paragraph>

        {/* Personal Interests - Sports Preference */}
        <Paragraph className="mt-6">
          Even though cricket is my first love, I have to admit that <span className="text-red-600">football</span> just isn’t my thing. That said, I can appreciate the energy and excitement that football brings to its fans all over the world.
        </Paragraph>

        {/* Personal Stories and Experiences */}
        <Paragraph className="mt-6">
          One of the moments I cherish most was leading my university’s coding team in a national hackathon. We had tight deadlines and big challenges, but working together to build a web app that made campus events easier was an experience I’ll never forget. It taught me so much about teamwork, leadership, and just pushing through when things get tough.
        </Paragraph>
        <Paragraph className="mt-4">
          I also had the chance to work on a community project to help local businesses in Kurigram go digital. Collaborating with other developers and local entrepreneurs was incredibly rewarding—it really drove home for me how technology can be a force for positive change in our communities.
        </Paragraph>

        {/* Future Goals and Vision */}
        <Paragraph className="mt-6">
          Looking ahead, I’m excited to keep learning and exploring new technologies like <span className="text-blue-500">GraphQL</span>, <span className="text-green-500">Docker</span>, and even dipping my toes into <span className="text-pink-500">Machine Learning</span>. I’m all about evolving and adapting to create innovative and efficient solutions.
        </Paragraph>
        <Paragraph className="mt-4">
          My dream is to work on projects that truly make a difference—whether it’s creating amazing user experiences, building solid backend systems, or solving real-world problems. I believe that blending creativity with technology is the key to making a lasting impact.
        </Paragraph>

        {/* Closing Remarks */}
        <Paragraph className="mt-6">
          Thanks so much for taking the time to get to know me a bit better. I’m always excited to meet new people, collaborate on cool projects, and see where this journey in tech takes me next.
        </Paragraph>
      </div>
    </div>
  );
}
