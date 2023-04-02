// Work component is a child of Section component and it's a child of App component
import React from "react";

interface WorkProps {
  children: React.ReactNode;
}

// Create a Work function
const Work = ({ children }: WorkProps) => {
  return <div className="work">{children}</div>;
};

export default Work;
