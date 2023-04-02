// new component Section that will be used to wrap the content of each section
// of the page. This component will be used in the App component.

import React from "react";

interface SectionProps {
  children: React.ReactNode;
}

const Section = ({ children }: SectionProps) => {
  return (
    <section className="flex gap-10 justify-center items-center max-w-2xl m-auto pt-20">
      {children}
    </section>
  );
};

export default Section;
