import React from "react";

interface SectionProps {
  children: React.ReactNode;
}

const Section = ({ children }: SectionProps) => {
  return (
    <section className="flex flex-col items-center max-w-2xl gap-10 pt-20 m-auto sm:flex-row">
      {children}
    </section>
  );
};

export default Section;
