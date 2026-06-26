export default function WhyLoom() {
  const audience = [
    {
      icon: '👨‍💻',
      title: 'Developers',
      desc: 'Understand unfamiliar repositories without reading every file from scratch.',
    },
    {
      icon: '🎓',
      title: 'Students',
      desc: 'Explore large, real-world projects visually and learn how code is structured.',
    },
    {
      icon: '🌐',
      title: 'Open Source Contributors',
      desc: 'Navigate contributor codebases faster and make confident pull requests.',
    },
  ];

  return (
    <section className="why-loom" id="why-loom" aria-labelledby="why-loom-title">
      <div className="why-loom-inner">
        {/* Left — the problem */}
        <div className="why-loom-left">
          <span className="section-label">Why Loom</span>
          <h2 className="section-title" id="why-loom-title">
            Understanding a new codebase shouldn&apos;t take days.
          </h2>
          <div className="why-loom-body">
            <p>
              Loom automatically maps function calls, relationships, dependencies,
              and structure into an interactive graph — making unfamiliar
              repositories immediately understandable.
            </p>
            <p>
              Instead of reading every file and tracing calls manually,
              you see the whole picture at once. Click any node to inspect it.
              Ask Loom to explain it.
            </p>
          </div>
        </div>

        {/* Right — who it's for */}
        <div className="why-loom-right" aria-label="Who Loom is for">
          {audience.map((a) => (
            <div className="audience-card" key={a.title}>
              <span className="audience-icon" aria-hidden="true">{a.icon}</span>
              <div>
                <div className="audience-title">{a.title}</div>
                <div className="audience-desc">{a.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
