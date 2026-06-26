const steps = [
  {
    title: 'Import',
    desc: 'Open a folder, clone a repo, or drop a ZIP file. Loom detects the language automatically.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="hiw-node-icon" aria-hidden="true">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    title: 'Analyze',
    desc: 'Loom parses your code and builds a complete call graph, mapping every function relationship.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="hiw-node-icon" aria-hidden="true">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
  {
    title: 'Explore',
    desc: 'Navigate the interactive graph visually. Pan, zoom, and click any node to inspect it.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="hiw-node-icon" aria-hidden="true">
        <circle cx="5" cy="12" r="2.5"/><circle cx="19" cy="5" r="2.5"/><circle cx="19" cy="19" r="2.5"/>
        <line x1="7.5" y1="11" x2="16.5" y2="6.5"/><line x1="7.5" y1="13" x2="16.5" y2="17.5"/>
      </svg>
    ),
  },
  {
    title: 'Understand',
    desc: 'Ask Loom to explain any function, class, or module in plain language — powered by your local AI.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="hiw-node-icon" aria-hidden="true">
        <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5z"/>
        <path d="M19 14l.75 2.25L22 17l-2.25.75L19 20l-.75-2.25L16 17l2.25-.75z"/>
      </svg>
    ),
  },
  {
    title: 'Export',
    desc: 'Share your graphs and findings as JSON, CSV, PNG, or SVG with your team.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="hiw-node-icon" aria-hidden="true">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="17 8 12 3 7 8"/>
        <line x1="12" y1="3" x2="12" y2="15"/>
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works" aria-labelledby="hiw-title">
      <div className="section-inner">
        <div className="hiw-header centered">
          <span className="section-label">Workflow</span>
          <h2 className="section-title" id="hiw-title">How it works.</h2>
          <p className="section-subtitle">
            From import to insight in five steps.
          </p>
        </div>

        <ol className="hiw-timeline" aria-label="How Loom works">
          {steps.map((step, i) => (
            <li className="hiw-item" key={step.title}>
              <div className="hiw-node" aria-hidden="true">
                {step.icon}
              </div>
              <div className="hiw-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
