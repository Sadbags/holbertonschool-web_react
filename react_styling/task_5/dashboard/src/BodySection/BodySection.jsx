import React from "react";

function BodySection({ title, children }) {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      {children}
    </section>
  );
}

export default BodySection;
