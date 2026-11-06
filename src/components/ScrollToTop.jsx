// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function RouteChangeToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}
export default function ScrollToTop({ showAfterPx = 300 }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > showAfterPx);
    onScroll(); // run once on mount
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showAfterPx]);

  const toTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-50 rounded-full shadow-lg transition-opacity focus:outline-none focus:ring
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
        bg-black/80 text-white hover:bg-black`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        role="img"
        aria-hidden="true"
        className="p-3"
      >
        {/* faint circle background */}
        <circle cx="12" cy="12" r="11" fill="currentColor" opacity="0.1" />
        {/* up arrow */}
        <path
          d="M12 7l-5 5h3v5h4v-5h3z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
}
