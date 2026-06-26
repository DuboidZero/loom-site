export default function CTA() {
  return (
    <section className="cta" id="download" aria-labelledby="cta-title">
      <div className="cta-card">
        <div className="cta-left">
          <h2 id="cta-title">Ready to understand your codebase?</h2>
          <p>
            Download Loom and start understanding any codebase in a whole new way.
            Runs 100% locally. Free to use.
          </p>
        </div>

        <div className="cta-right">
          <a
            href="https://github.com/DuboidZero/loom/releases/latest"
            className="btn btn-primary btn-lg"
            id="cta-download-btn"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download Loom
          </a>
          <span className="cta-note">Works on Linux &amp; Windows</span>
        </div>
      </div>
    </section>
  );
}
