import Link from "next/link";

export default function NavBar() {
  return (
    <header className="site-header">
      <nav className="nav-inner" aria-label="Main navigation">
        <Link className="brand" href="/" aria-label="NextBites home">
          <svg
            className="brand-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
            fill="none"
          >
            <path
              d="M7 3v6m-3-6v4a3 3 0 0 0 6 0V3M7 10v11m10-18c-2.2 2-3 4.1-3 7v3h3V3Zm0 10v8"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
            />
          </svg>
          <span>NextBites</span>
        </Link>
        <div className="nav-links">
          <Link href="/#recipes">Recipes</Link>
          <a
            href="https://github.com/riara-dev/nextbites"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
}
