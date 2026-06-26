import logo from '../assets/logo192.png';

export default function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-inner">
        <a href="/" className="nav-brand" aria-label="Loom home">
          <img src={logo} alt="Loom" className="nav-logo" />
          <span className="nav-wordmark">Loom</span>
        </a>
        <a
          href="https://github.com/DuboidZero/loom/releases/latest"
          className="btn btn-primary"
          id="nav-download-btn"
          aria-label="Download Loom"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download Loom
        </a>
      </div>
    </nav>
  );
}
