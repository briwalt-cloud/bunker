import fs from 'fs';
import path from 'path';
import Wordmark from '../components/Wordmark';

// === EDIT THESE ===
const INSTAGRAM_URL = 'https://instagram.com/YOUR_HANDLE';
const CONTACT_EMAIL = 'briwalt@gmail.com';
// ==================

// Make sure the gallery is regenerated at build time when files change.
export const dynamic = 'force-static';

export default function Page() {
  const workDir = path.join(process.cwd(), 'public', 'work');
  const files = fs.existsSync(workDir)
    ? fs
        .readdirSync(workDir)
        .filter((f) => /\.(jpe?g|png|webp|gif|avif)$/i.test(f))
        .sort()
    : [];

  return (
    <div className="frame">
      <header className="masthead">
        <a href="/" className="wordmark" aria-label="Bunker Editions">
          <Wordmark />
        </a>
        <nav className="nav">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`}>Contact</a>
        </nav>
      </header>

      <main className="gallery">
        {files.map((file) => (
          <img key={file} src={`/work/${file}`} alt="" loading="lazy" />
        ))}
      </main>
    </div>
  );
}
