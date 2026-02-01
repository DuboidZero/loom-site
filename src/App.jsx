import "./App.css";
import logo from "./assets/logo192.png";

export default function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-content">
          <div className="nav-brand">
            <img src={logo} alt="Loom Logo" className="logo-icon" />
            <span className="logo-text">Loom</span>
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#download" className="nav-cta">Download</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero" id="hero">
        <div className="hero-glow"></div>
        <div className="hero-content">
          <img src={logo} alt="Loom Logo" className="hero-logo" />
          <h1 className="hero-title">
            <span className="title-accent">Loom</span>
          </h1>
          <p className="hero-tagline">Visualize codebases as logical graphs</p>
          <p className="hero-description">
            Transform complex code into interactive diagrams. Map codebases, make trees,
            and control flow to understand your codebase at a glance.
          </p>
          <div className="hero-cta">
            <a href="/downloads/Loom-Setup.exe" className="btn btn-primary">
              <span className="btn-icon">↓</span>
              Download Loom
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="graph-container">
            <div className="graph-node node-1">main()</div>
            <div className="flow-arrow">→</div>
            <div className="graph-node node-2">parse()</div>
            <div className="flow-arrow">→</div>
            <div className="graph-node node-3">analyze()</div>
            <div className="flow-arrow">→</div>
            <div className="graph-node node-4">render()</div>
            <svg className="graph-lines" viewBox="0 0 600 100">
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="var(--accent)" opacity="0.6" />
                </marker>
              </defs>
            </svg>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="section-container">
          <h2 className="section-title">What Loom Does</h2>
          <p className="section-subtitle">
            Deep analysis of your code structure, visualized beautifully
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🗺️</div>
              <h3>Codebase Mapping</h3>
              <p>
                Automatically detects and maps every function, class, contract, struct and module in your codebase,
                showing relationships and dependencies between components.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🌳</div>
              <h3>Call Tree Analysis</h3>
              <p>
                Trace execution paths through your code. Understand which functions
                relate where, and what each part does in your application.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎮</div>
              <h3>Control Flow Graphs</h3>
              <p>
                Visualize logic branches, loops, and conditional paths.
                See the actual flow of execution in your programs [TBA].
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🪶</div>
              <h3>Lightweight but Powerful</h3>
              <p>
                Works using a Python backend, with a responsive React x Tauri frontend.
                Powered by git and Ollama for repo mapping and AI Code Explanation.
                Runs FULLY locally, with no data leaving your device.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔎</div>
              <h3>Interactive Exploration</h3>
              <p>
                Click, zoom, and navigate through your codebase visually.
                View your source code and get an explanation of it.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🧠</div>
              <h3>Multi-Language Support</h3>
              <p>
                Works with JavaScript, Rust, Python, and more.
                Analyze any project regardless of the tech stack.
              </p>
            </div>
          </div>
        </div>
      </section >

      {/* How It Works Section */}
      < section className="how-it-works" id="how-it-works" >
        <div className="section-container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Three simple steps to understand your code
          </p>

          <div className="steps-container">
            <div className="step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>Import Your Project</h3>
                <p>
                  Open Loom and select your project folder (or give it a github repo link). Loom supports all
                  project structures and automatically detects the programming language.
                </p>
              </div>
              <div className="step-visual">
                <div className="step-icon-box">
                  <span>📁</span>
                </div>
              </div>
            </div>

            <div className="step-connector"></div>

            <div className="step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3>Analyze Logic & Dependencies</h3>
                <p>
                  Loom parses your code, building a complete map of functions,
                  classes, imports, and their relationships. This usually takes seconds.
                </p>
              </div>
              <div className="step-visual">
                <div className="step-icon-box">
                  <span>⚡</span>
                </div>
              </div>
            </div>

            <div className="step-connector"></div>

            <div className="step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>Explore Interactive Graphs</h3>
                <p>
                  Navigate through visual representations of your code. Click nodes
                  to see details, zoom in on complex areas, and have your code explained to you.
                </p>
              </div>
              <div className="step-visual">
                <div className="step-icon-box">
                  <span>🔍</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Download Section */}
      < section className="download" id="download" >
        <div className="section-container">
          <div className="download-card">
            <div className="download-glow"></div>
            <div className="download-content">
              <h2>Ready to visualize your code?</h2>
              <p>
                Download Loom for Windows and start exploring your codebase
                in a whole new way. Free to use.
              </p>
              <a href="https://github.com/DuboidZero/loom/releases/latest" className="btn btn-primary btn-large">
                <span className="btn-icon">↓</span>
                Download Loom for Windows
              </a>
              <span className="download-note">
                <span className="platform-icon">🖥️</span>
                Desktop Application • Windows 10/11
              </span>
            </div>
          </div>
        </div>
      </section >

      {/* Footer */}
      < footer className="footer" >
        <div className="footer-content">
          <div className="footer-brand">
            <img src={logo} alt="Loom Logo" className="logo-icon" />
            <span className="logo-text">Loom</span>
          </div>
          <p className="footer-credit">Built by Dhruv Inamdar</p>
          <div className="footer-links">
            <a
              href="https://github.com/DuboidZero/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <svg className="github-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Loom · Built using open-source technologies</p>
        </div>
      </footer >
    </div >
  );
}
