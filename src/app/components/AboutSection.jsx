"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Compétences",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>C#</li>
        <li>PostgreSQL</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>PHP</li>
      </ul>
    ),
  },
  {
    title: "Formation",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>BTS SIO SLAM</li>
        <li>Bac S</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Cisco introduction to Cybersecurity Obtenu en 2021</li>
        <li>CNIL RGPD Obtenu en mars 2021</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">A Propos de Moi</h2>
          <p className="text-base lg:text-lg">
            Je suis un jeune developpeur ayant comme parcours scolaire un BTS SIO spécialité SLAM étant passionné par les nouvelles technologie notament l&apos;IA, la Cybersécurité ainsi que la création de site web.
            je vous propose ce PortFolio professionel.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Compétences{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Formations{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
