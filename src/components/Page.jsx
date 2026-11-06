
import React from "react";

export default function Page({ children, className = "" }) {
  return (
    <main
      className={`mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 pt-24 pb-16 ${className}`}
    >
      {children}
    </main>
  );
}
