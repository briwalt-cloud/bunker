import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import Wordmark from '../components/Wordmark';

// === EDIT THESE ===
const INSTAGRAM_URL = 'https://instagram.com/YOUR_HANDLE';
const CONTACT_EMAIL = 'briwalt@gmail.com';
// ==================

// Make sure the gallery is regenerated at build time when files change.
export const dynamic = 'force-static';

// Returns the unix timestamp of the most recent commit that touched this file.
// Used to order the gallery so the newest file lands on top automatically.
// Returns 0 if git history isn't deep enough to see this file's history.
function getCommitTime(relativePath) {
  try {
    const out = execSync(
      `git log -1 --format=%ct -- "${relativePath}"`,
      { encoding: 'utf-8', stdio: ['ignore', 'pipe', 'ignore'] }
    ).trim();
    return out ? parseInt(out, 10) : 0;
  } catch {
    return 0;
  }
}

export default function Page() {
  const workDir = path.join(process.cwd(), 'public', 'work');
  const files = fs.existsSync(workDir)
    ? fs
        .readdirSync(workDir)
        .filter((f) => /\.(jpe?g|png|webp|gif|avif)$/i.test(f))
        .map((file) => ({
          file,
          time: getCommitTime(path.posix.join('public', 'work', file)),
        }))
        .sort((a, b) => {
          // Newest commit first. Ties (e.g. initial batch) fall back to
          // alphabetical so the order is stable and predictable.
          if (b.time !== a.time) return b.time - a.time;
          return a.file.localeCompare(b.file);
        })
        .map(({ file }) => file)
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
