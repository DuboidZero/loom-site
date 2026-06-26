import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';

const panels = [
  {
    id: 'showcase-repo',
    src: img1,
    title: 'Repository Overview',
    desc: 'High-level metrics and insights at a glance.',
  },
  {
    id: 'showcase-inspector',
    src: img2,
    title: 'Inspector Panel',
    desc: 'Dive deep into any function or module.',
  },
  {
    id: 'showcase-source',
    src: img3,
    title: 'Source & AI',
    desc: 'View source code alongside AI explanations.',
  },
  {
    id: 'showcase-ai',
    src: img4,
    title: 'AI Assistant',
    desc: 'Ask Loom to explain any function in plain language.',
  },
];

export default function Showcase() {
  return (
    <section className="showcase" id="showcase" aria-labelledby="showcase-title">
      <div className="section-inner">
        <div className="showcase-header centered">
          <span className="section-label">In Action</span>
          <h2 className="section-title" id="showcase-title">
            See <span style={{ color: 'var(--accent)' }}>Loom</span> in action.
          </h2>
        </div>

        <div className="showcase-grid">
          {panels.map(({ id, src, title, desc }) => (
            <div className="showcase-panel" key={id} id={id}>
              <div className="showcase-panel-screen">
                <img
                  src={src}
                  alt={title}
                  className="showcase-panel-img"
                  draggable="false"
                  loading="lazy"
                />
              </div>
              <div className="showcase-panel-label">
                <div className="showcase-panel-title">{title}</div>
                <div className="showcase-panel-desc">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
