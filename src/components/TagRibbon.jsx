// src/components/TypingRotator.jsx
import React, { useEffect, useState } from "react";

export default function TypingRotator({
  words = [],
  typingSpeed = 80,
  deletingSpeed = 45,
  holdTime = 900,
  className = "",
  caret = true,
}) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;
    const current = words[idx % words.length];

    const step = () => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), holdTime);
          return;
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setIdx((i) => (i + 1) % words.length);
        }
      }
    };

    const t = setTimeout(step, deleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(t);
  }, [text, deleting, idx, words, typingSpeed, deletingSpeed, holdTime]);

  return (
    <span className={className}>
      {text}
      {caret && <span className="type-caret">|</span>}
    </span>
  );
}
