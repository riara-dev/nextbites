import Link from "next/link";

export default function NavBar() {
  return (
    <header className="site-header">
      <nav className="nav-inner" aria-label="Main navigation">
        <Link className="brand" href="/" aria-label="NextBites home">
          NextBites
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
