import React from "react";

/**
 * Research hero illustration with a small number of traced airflow highlights.
 * The original PNG remains unchanged. Both the image and the traced paths share
 * one SVG coordinate system, so the highlights stay registered when resized.
 */
const paths = [
  // Upper streamlines, from the left toward and over the tallest building.
  "M 365 360 C 520 330 675 280 790 226 C 860 189 925 174 1015 189 C 1180 225 1330 225 1645 194",
  "M 360 390 C 525 365 682 306 783 250 C 855 212 926 197 1015 211 C 1190 249 1390 246 1645 216",
  "M 350 425 C 535 395 684 336 779 275 C 846 236 923 219 1012 235 C 1175 270 1380 271 1645 243",
  "M 352 460 C 530 430 692 365 770 305 C 830 262 908 243 1003 259 C 1170 293 1370 294 1645 271",
  // Upper right streamlines past the tower.
  "M 830 195 C 916 170 991 177 1090 201 C 1255 243 1420 223 1645 201",
  // Two short closed trajectories, positioned over the existing wake vortices.
  "M 1094 390 C 1070 355 1022 349 991 378 C 969 399 981 431 1007 434 C 1033 437 1053 416 1041 397 C 1030 381 1009 389 1014 405 C 1019 414 1031 407 1027 401",
  "M 1225 391 C 1207 364 1169 358 1142 381 C 1117 402 1128 428 1151 432 C 1173 436 1190 417 1180 401 C 1171 388 1153 393 1158 407 C 1163 414 1172 409 1169 404",
];

export default function ResearchFlowAnimation() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1672 941"
      preserveAspectRatio="xMaxYMid slice"
      role="img"
      aria-label="Urban buildings with airflow streamlines, turbulence wakes, and thermal visualization"
    >
      <image
        href="/research-city.png"
        x="0"
        y="0"
        width="1672"
        height="941"
        preserveAspectRatio="none"
      />

      <defs>
        <filter id="research-particle-glow" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g className="research-flow-particles">
        {paths.map((path, index) => (
          <g key={index}>
            <path id={`research-flow-path-${index}`} d={path} fill="none" stroke="none" />
            <circle
              r={index >= 5 ? 2.1 : 2.6}
              fill={index >= 5 ? "#54F5D2" : "#B8FF77"}
              opacity="0.82"
              filter="url(#research-particle-glow)"
            >
              <animateMotion
                dur={`${index >= 5 ? 10 : 15 + index * 2}s`}
                begin={`${-index * 2.7}s`}
                repeatCount="indefinite"
                rotate="auto"
                path={path}
              />
            </circle>
          </g>
        ))}
      </g>
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .research-flow-particles { display: none; }
        }
      `}</style>
    </svg>
  );
}
