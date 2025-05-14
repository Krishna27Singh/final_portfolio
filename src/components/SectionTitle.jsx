
import React from "react";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-4xl font-bold mb-2 text-gradient">{title}</h2>
      <div className="flex items-center justify-center">
        <div className="h-1 w-20 bg-primary rounded"></div>
        {subtitle && <p className="text-muted-foreground mx-4">{subtitle}</p>}
        <div className="h-1 w-20 bg-primary rounded"></div>
      </div>
    </div>
  );
};

export default SectionTitle;
