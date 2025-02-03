// components/WorkHistory.jsx
"use client";
import { timeline } from "@/constants/timeline";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import React from "react";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";

export const WorkHistory = () => {
  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-teal-50 py-8">
      {/* Vertical timeline line with a softer teal */}
      <div className="border-l-4 border-teal-300 absolute left-4 top-0 h-full"></div>
      
      {timeline.map((item, index) => (
        <div
          key={`timeline-${index}`}
          className={`relative flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-6 my-12 pl-10 ${
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Timeline event indicator */}
          <div className="absolute left-0 md:left-auto md:right-0 transform -translate-x-8 md:translate-x-8">
            <div className="w-6 h-6 bg-teal-400 rounded-full border-4 border-white shadow-md"></div>
          </div>
          
          {/* Date text */}
          <Paragraph className="text-teal-500 font-semibold text-sm md:text-md md:w-32">
            {item.date}
          </Paragraph>
          
          {/* Event card */}
          <div className="bg-white/90 shadow-md rounded-xl p-6 w-full max-w-3xl hover:shadow-lg transition-shadow duration-300">
            <Heading as="h5" className="text-lg md:text-xl font-bold text-teal-600">
              {item.title}
            </Heading>
            <Paragraph className="text-sm md:text-base font-medium text-gray-700 mt-2">
              {item.description}
            </Paragraph>
            <ul className="mt-4 space-y-2">
              {item.responsibilities.map((responsibility, idx) => (
                <Step key={`${item.title}-${idx}`}>
                  {responsibility}
                </Step>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

const Step = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="flex space-x-3 items-start">
      <IconCircleCheckFilled className="h-5 w-5 text-teal-500 mt-1" />
      <Paragraph className="text-sm md:text-base text-gray-600">
        {children}
      </Paragraph>
    </li>
  );
};
