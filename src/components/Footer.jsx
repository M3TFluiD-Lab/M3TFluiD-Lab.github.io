
import React from "react";
import { Link } from "react-router-dom";
import { Github } from "lucide-react";
import { LAB_GITHUB_URL } from "./ResearchResources";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/10 bg-[#071512] text-white/65">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Link to="/" className="inline-flex" aria-label="M³TFluiD Lab home">
            <img
              src={`${import.meta.env.BASE_URL}M3TFluiD_Lab_logo_footer.svg`}
              alt="M³TFluiD Lab"
              className="block h-6 w-auto max-w-full"
              width="865"
              height="122"
            />
          </Link>

          <p className="mt-1 text-xs text-white/70">
            Cleveland State University
          </p>

          <p className="mt-2 text-xs">
            © {year} M³TFluiD Lab. All rights reserved
            unless otherwise noted.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs">
          <Link
            to="/"
            className="transition-colors hover:text-emerald-300"
          >
            Home
          </Link>

          <Link
            to="/research"
            className="transition-colors hover:text-emerald-300"
          >
            Research
          </Link>

          <Link to="/education" className="transition-colors hover:text-emerald-300">
            Experiential Learning
          </Link>

          <Link
            to="/contact"
            className="transition-colors hover:text-emerald-300"
          >
            Contact
          </Link>

          <a
            href={LAB_GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-emerald-300"
          >
            <Github size={16} aria-hidden="true" />
            GitHub
          </a>

          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-emerald-300"
          >
            About CC BY 4.0
          </a>
        </div>
      </div>
    </footer>
  );
}
