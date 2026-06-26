import { useEffect, useRef } from 'react';
import heroImg from '../assets/hero.png';

// eslint-disable-next-line no-unused-vars -- kept for fallback reference
function AppMock() {
  return (
    <div className="hero-screenshot">
      {/* Title bar */}
      <div className="mock-titlebar">
        <div className="mock-dots">
          <span className="mock-dot mock-dot-red" />
          <span className="mock-dot mock-dot-yellow" />
          <span className="mock-dot mock-dot-green" />
        </div>
        <span className="mock-title-text">Loom — my-project</span>
      </div>

      {/* Body */}
      <div className="mock-body">
        {/* Sidebar */}
        <div className="mock-sidebar">
          <div className="mock-sidebar-header">Explorer</div>
          <div className="mock-tree-item active">📁 my-project</div>
          <div className="mock-tree-item indent">main.py</div>
          <div className="mock-tree-item indent">parser.py</div>
          <div className="mock-tree-item indent">analyzer.py</div>
          <div className="mock-tree-item indent">utils.py</div>
          <div className="mock-tree-item indent">emitter.py</div>
        </div>

        {/* Graph area */}
        <div className="mock-graph-area">
          <svg viewBox="0 0 410 280" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            {/* Edges */}
            <line x1="205" y1="48" x2="100" y2="115" stroke="rgba(163,230,53,0.35)" strokeWidth="1.5"/>
            <line x1="205" y1="48" x2="310" y2="115" stroke="rgba(163,230,53,0.35)" strokeWidth="1.5"/>
            <line x1="100" y1="115" x2="55"  y2="190" stroke="rgba(255,255,255,0.15)" strokeWidth="1.2"/>
            <line x1="100" y1="115" x2="145" y2="190" stroke="rgba(255,255,255,0.15)" strokeWidth="1.2"/>
            <line x1="310" y1="115" x2="265" y2="190" stroke="rgba(255,255,255,0.15)" strokeWidth="1.2"/>
            <line x1="310" y1="115" x2="355" y2="190" stroke="rgba(255,255,255,0.15)" strokeWidth="1.2"/>
            {/* SCC back-edge shown in red */}
            <path d="M 145 190 Q 205 230 265 190" stroke="rgba(251,113,133,0.5)" strokeWidth="1.5" strokeDasharray="4 3" fill="none"/>

            {/* Root node — selected, green */}
            <circle cx="205" cy="48" r="18" fill="#a3e635"/>
            <text x="205" y="52" textAnchor="middle" fontSize="8.5" fill="#000" fontFamily="JetBrains Mono, monospace" fontWeight="600">main()</text>

            {/* Mid-level nodes */}
            <circle cx="100" cy="115" r="16" fill="#141416" stroke="rgba(163,230,53,0.55)" strokeWidth="1.5"/>
            <text x="100" y="119" textAnchor="middle" fontSize="8" fill="#a3e635" fontFamily="JetBrains Mono, monospace">parse()</text>

            <circle cx="310" cy="115" r="16" fill="#141416" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5"/>
            <text x="310" y="119" textAnchor="middle" fontSize="8" fill="#a1a1aa" fontFamily="JetBrains Mono, monospace">analyze()</text>

            {/* Leaf nodes */}
            <circle cx="55" cy="190" r="13" fill="#141416" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
            <text x="55" y="194" textAnchor="middle" fontSize="7" fill="#52525b" fontFamily="JetBrains Mono, monospace">tokenize()</text>

            <circle cx="145" cy="190" r="13" fill="#141416" stroke="rgba(251,113,133,0.45)" strokeWidth="1.5"/>
            <text x="145" y="194" textAnchor="middle" fontSize="7" fill="#fb7185" fontFamily="JetBrains Mono, monospace">buildAST()</text>

            <circle cx="265" cy="190" r="13" fill="#141416" stroke="rgba(251,113,133,0.45)" strokeWidth="1.5"/>
            <text x="265" y="194" textAnchor="middle" fontSize="7" fill="#fb7185" fontFamily="JetBrains Mono, monospace">resolve()</text>

            <circle cx="355" cy="190" r="13" fill="#141416" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
            <text x="355" y="194" textAnchor="middle" fontSize="7" fill="#52525b" fontFamily="JetBrains Mono, monospace">emit()</text>

            {/* SCC label badge */}
            <rect x="166" y="228" width="78" height="16" rx="3" fill="rgba(251,113,133,0.12)" stroke="rgba(251,113,133,0.3)" strokeWidth="1"/>
            <text x="205" y="239" textAnchor="middle" fontSize="7" fill="#fb7185" fontFamily="JetBrains Mono, monospace">⚠ SCC detected</text>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // Particles
    const COUNT = 50;
    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.2 + 0.4,
    }));

    const MAX_DIST = 110;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(163,230,53,0.35)';
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(163,230,53,${0.1 * (1 - dist / MAX_DIST)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <header className="hero" id="hero">
      <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />
      <div className="hero-radial" aria-hidden="true" />

      <div className="hero-inner">
        {/* Left */}
        <div className="hero-left">
          <h1 className="hero-title">
            Understand any codebase.
            <span className="hero-title-accent">In minutes.</span>
          </h1>

          <p className="hero-desc">
            Understand unfamiliar repositories in minutes instead of days.
            Loom maps call graphs, explains complex code, and lets you explore
            large projects visually—<strong>all locally.</strong>
          </p>

          <div className="hero-actions">
            <a
              href="https://github.com/DuboidZero/loom/releases/latest"
              className="btn btn-primary btn-lg"
              id="hero-download-btn"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Loom
            </a>
          </div>

          <div className="hero-badges">
            {/* LOCAL — the hero badge */}
            <div className="hero-badge">
              <span className="hero-badge-check">
                <svg viewBox="0 0 10 10" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="1.5,5 4,7.5 8.5,2.5"/>
                </svg>
              </span>
              <span className="hero-badge-text">
                <span className="hero-badge-title">100% Local</span>
                <span className="hero-badge-sub">No code leaves your machine. Ever.</span>
              </span>
            </div>

            <div className="hero-badge">
              <span className="hero-badge-check">
                <svg viewBox="0 0 10 10" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="1.5,5 4,7.5 8.5,2.5"/>
                </svg>
              </span>
              <span className="hero-badge-text">
                <span className="hero-badge-title">Multi-Language</span>
                <span className="hero-badge-sub">Python, JS/TS, Go, Rust, Java, C/C++ and more.</span>
              </span>
            </div>

            <div className="hero-badge">
              <span className="hero-badge-check">
                <svg viewBox="0 0 10 10" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="1.5,5 4,7.5 8.5,2.5"/>
                </svg>
              </span>
              <span className="hero-badge-text">
                <span className="hero-badge-title">Open Source</span>
                <span className="hero-badge-sub">Built by developers, for developers.</span>
              </span>
            </div>
          </div>
        </div>

        {/* Right — real app screenshot */}
        <div className="hero-right" aria-hidden="true">
          <div className="hero-screenshot-wrap">
            <div className="hero-screenshot-glow" />
            <img
              src={heroImg}
              alt="Loom application — interactive graph visualization"
              className="hero-screenshot"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
