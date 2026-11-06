// src/hoc/SectionWrapper.jsx
import React from "react";

/**
 * Higher-order component that wraps a section with an id and common layout.
 * Usage:
 *   const Wrapped = SectionWrapper(MyComponent, "about");
 *   export default Wrapped;
 */
const SectionWrapper = (Component, idName) => {
  const HOC = () => (
    <section id={idName} className="relative z-0">
      <Component />
    </section>
  );

  HOC.displayName = `SectionWrapper(${
    Component.displayName || Component.name || "Component"
  })`;

  return HOC;
};

export default SectionWrapper;
