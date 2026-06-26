// Inline SVG icons — no external dependency
const Icons = {
  Graph: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="5" cy="12" r="2.5"/><circle cx="19" cy="5" r="2.5"/><circle cx="19" cy="19" r="2.5"/>
      <line x1="7.5" y1="11" x2="16.5" y2="6.5"/><line x1="7.5" y1="13" x2="16.5" y2="17.5"/>
    </svg>
  ),
  ReverseGraph: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 4l4 4-4 4"/><path d="M3 12h18"/><path d="M7 20l-4-4 4-4"/>
    </svg>
  ),
  SCC: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.5 2v6h-6"/><path d="M2.5 22v-6h6"/>
      <path d="M21.5 8A10 10 0 0 0 5.1 5.1"/>
      <path d="M2.5 16a10 10 0 0 0 16.4 2.9"/>
    </svg>
  ),
  AI: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5z"/>
      <path d="M19 14l.75 2.25L22 17l-2.25.75L19 20l-.75-2.25L16 17l2.25-.75z"/>
      <path d="M5 17l.5 1.5L7 19l-1.5.5L5 21l-.5-1.5L3 19l1.5-.5z"/>
    </svg>
  ),
  GitHub: () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  ),
  Export: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="17 8 12 3 7 8"/>
      <line x1="12" y1="3" x2="12" y2="15"/>
    </svg>
  ),
  Lightning: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
  Layout: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
      <line x1="3" y1="9" x2="21" y2="9"/>
      <line x1="9" y1="21" x2="9" y2="9"/>
    </svg>
  ),
};

const capabilities = [
  {
    Icon: Icons.Graph,
    title: 'Interactive Graphs',
    desc: 'Explore relationships and dependencies with interactive call graphs.',
  },
  {
    Icon: Icons.ReverseGraph,
    title: 'Reverse Call Graphs',
    desc: 'See who calls what. Perfect for impact analysis and refactoring.',
  },
  {
    Icon: Icons.SCC,
    title: 'SCC Detection',
    desc: 'Identify circular dependencies and strongly connected components.',
  },
  {
    Icon: Icons.AI,
    title: 'AI Explanations',
    desc: 'Get natural language explanations of code, functions, and architecture.',
  },
  {
    Icon: Icons.GitHub,
    title: 'GitHub Integration',
    desc: 'Clone, analyze, and keep your repositories in sync directly from GitHub.',
  },
  {
    Icon: Icons.Export,
    title: 'Export & Share',
    desc: 'Export graphs and data to JSON, CSV, or image formats.',
  },
  {
    Icon: Icons.Lightning,
    title: 'Lightning Fast',
    desc: 'Built with performance in mind. Analyze large codebases in seconds.',
  },
  {
    Icon: Icons.Layout,
    title: 'Clean & Intuitive',
    desc: 'Distraction-free UI designed for deep focus and clarity.',
  },
];

export default function Capabilities() {
  return (
    <section className="capabilities" id="capabilities" aria-labelledby="capabilities-title">
      <div className="section-inner">
        <div className="cap-header centered">
          <h2 className="section-title" id="capabilities-title">Powerful capabilities.</h2>
          <p className="section-subtitle">
            Everything you need to understand any codebase, from high-level architecture
            down to individual function calls.
          </p>
        </div>

        <div className="cap-grid" role="list">
          {capabilities.map((cap) => (
            <div className="cap-card" key={cap.title} role="listitem">
              <div className="cap-icon" aria-hidden="true">
                <cap.Icon />
              </div>
              <h3>{cap.title}</h3>
              <p>{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
