// Language data — only languages Loom currently supports
// Colors are the GitHub-standard language colors
const languages = [
  { name: 'Python',     color: '#3572A5' },
  { name: 'JavaScript', color: '#f1e05a' },
  { name: 'TypeScript', color: '#3178c6' },
  { name: 'Go',         color: '#00ADD8' },
  { name: 'Rust',       color: '#dea584' },
  { name: 'Java',       color: '#b07219' },
  { name: 'C',          color: '#555555' },
  { name: 'C++',        color: '#f34b7d' },
];

export default function Languages() {
  return (
    <section className="languages" id="languages" aria-labelledby="languages-title">
      <div className="section-inner">
        <div className="lang-header">
          <span className="section-label">Compatibility</span>
          <h2 className="section-title" id="languages-title">Supported languages.</h2>
          <p className="section-subtitle">
            Loom works across all major languages. Analyze any project regardless of the tech stack.
          </p>
        </div>

        <div className="lang-grid" role="list" aria-label="Supported programming languages">
          {languages.map((lang) => (
            <div className="lang-pill" key={lang.name} role="listitem">
              <span
                className="lang-pill-dot"
                style={{ background: lang.color }}
                aria-hidden="true"
              />
              {lang.name}
            </div>
          ))}
          <div className="lang-more" aria-label="More languages coming soon">
            + more coming soon
          </div>
        </div>
      </div>
    </section>
  );
}
