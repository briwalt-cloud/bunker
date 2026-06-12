# Bunker Editions


A minimal portfolio site. Drop images into `public/work/`, push, and they appear.


---


## How to add a new image


1. Optimize the image first. Free, no signup: [squoosh.app](https://squoosh.app). Export as JPEG at ~85% quality, longest edge ~2400px. Most files will land under 1 MB.
2. On github.com, navigate to `public/work/`.
3. Drag the file into the file list. Click "Commit changes."
4. Vercel rebuilds the site automatically in ~30 seconds.


That's it. No code edits.


### Controlling the order


Images sort alphabetically by filename. Prefix with a number to control the order:


```
01-headbunker.jpg
02-eeuu.jpg
03-patriot.jpg
```


To reorder: rename files via GitHub's web UI (click the file → pencil icon → rename → commit).


To put a new image at the top: prefix it `00-...` or renumber the others.


---


## First-time setup (you only do this once)


### 1. GitHub


1. Sign up at [github.com](https://github.com) if you don't have an account.
2. Click "New repository." Name it `bunker-editions`. Set it to **Private** if you don't want strangers reading the source code (the deployed site is still public either way).
3. On the next screen, click "uploading an existing file."
4. Drag this entire folder's contents into the upload zone. Commit.


### 2. Vercel


1. Sign up at [vercel.com](https://vercel.com) using "Continue with GitHub."
2. Click "Add New… → Project."
3. Find `bunker-editions` in the repo list, click "Import."
4. Click "Deploy" (no settings to change — Vercel detects Next.js automatically).
5. ~60 seconds later you'll get a URL like `bunker-editions.vercel.app`. That's the live site.
<!-- v2 -->
