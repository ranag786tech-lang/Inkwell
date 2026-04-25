# 🖋️ Inkwell — Personal Notebook

> A beautiful, fast, and fully offline-capable personal notebook. Write freely, plan deeply, remember everything.

![Version](https://img.shields.io/badge/version-1.0.0-c9a84c?style=flat-square)
![PWA](https://img.shields.io/badge/PWA-ready-4caf50?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-a78bfa?style=flat-square)
![No Dependencies](https://img.shields.io/badge/dependencies-zero-4ecdc4?style=flat-square)

---

## ✨ Features

### 📝 Rich Text Editor
- Bold, Italic, Underline, Strikethrough
- Headings (H1, H2), Bullet & Numbered Lists
- Blockquotes, Dividers, Timestamps
- Undo / Redo / Clear Formatting

### 📂 5 Sections
| Section | Purpose |
|---|---|
| 📓 Journal | Daily thoughts and reflections |
| 💡 Ideas | Capture ideas before they fade |
| 🎯 Goals | Dreams, plans, and aspirations |
| 💭 Memories | Moments worth remembering |
| ✅ Tasks | To-do list with priorities |

### ✅ Task Manager
- Add tasks with **High / Medium / Low** priority
- Mark done, edit inline, delete
- Pending & Completed sections

### 💾 Auto-Save & Data
- Auto-saves every **30 seconds**
- Manual save with `Ctrl+S`
- All data stored in **localStorage** — private, no server
- Unsaved changes warning before closing

### 🔍 Smart Search
- Find text within any section
- Next / Previous match navigation
- Live highlight — search spans never saved to storage

### 📤 Export Options
- Export as **Plain Text** (.txt)
- Export as **Markdown** (.md)
- Full backup as **JSON** (.json)
- Import / Restore from JSON backup
- **Print** with clean formatted stylesheet

### 🎨 Appearance
- Dark & Light theme with one click
- Auto-Dark mode after 8 PM
- 4 font sizes (Small → X-Large)
- 3 font families (Sans / Serif / Mono)
- Animated aurora background

### 🧘 Focus Mode
- Hides all UI — just you and your words
- Press `Esc` or click hint to exit

### 📊 Statistics
- Total word count, characters, reading time
- Words per section (animated bars)
- Writing streak tracker 🔥
- Tasks completion ratio

### 📱 Progressive Web App (PWA)
- **Install** on Android, iOS, Windows, Mac
- Works **fully offline** after first load
- Fonts cached for offline use
- Auto-detects updates

---

## 🚀 Getting Started

### Option 1 — Open Directly
Just open `index.html` in any modern browser. No server needed.

### Option 2 — Host on GitHub Pages (Recommended)

1. Fork or clone this repository
2. Go to **Settings → Pages**
3. Set source to `main` branch → root folder
4. Your app will be live at:
   ```
   https://ranag786tech-lang.github.io/Inkwell/
   ```

### Option 3 — Any Static Host
Upload all 5 files to any static hosting service:
- Vercel, Netlify, Cloudflare Pages, Firebase Hosting

---

## 📁 File Structure

```
inkwell/
├── index.html       # Main app — entire UI + logic
├── sw.js            # Service Worker — offline & caching
├── manifest.json    # PWA manifest — install metadata
├── icon-192.png     # App icon (192×192)
└── icon-512.png     # App icon (512×512)
```

> ⚠️ All 5 files must be in the **same folder**. Do not move them into subfolders.

---

## ⌨️ Keyboard Shortcuts

| Action | Shortcut |
|---|---|
| Save | `Ctrl + S` |
| Bold | `Ctrl + B` |
| Italic | `Ctrl + I` |
| Underline | `Ctrl + U` |
| Find | `Ctrl + F` |
| Focus Mode | `Ctrl + Shift + F` |
| Toggle Sidebar | `Ctrl + \` |
| Journal | `Ctrl + 1` |
| Ideas | `Ctrl + 2` |
| Goals | `Ctrl + 3` |
| Memories | `Ctrl + 4` |
| Tasks | `Ctrl + 5` |
| Close / Exit | `Esc` |

---

## 🔒 Privacy

- **Zero data leaves your device** — no server, no API, no tracking
- All notes live in your browser's `localStorage`
- Clearing browser data will erase notes — use the **JSON backup** regularly
- Notes are per-device — phone and laptop have separate notes

---

## 📲 Install as App

### Android (Chrome)
1. Open the hosted URL in Chrome
2. Tap the **⋮ menu → Add to Home Screen**
3. Or tap the **install banner** at the bottom

### iOS (Safari)
1. Open the hosted URL in Safari
2. Tap the **Share button → Add to Home Screen**

### Desktop (Chrome / Edge)
1. Open the hosted URL
2. Click the **install icon** in the address bar
3. Or go to **Settings → Install Inkwell**

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| UI | Pure HTML5 + CSS3 |
| Logic | Vanilla JavaScript (ES6+) |
| Storage | Browser localStorage |
| Fonts | Google Fonts (Playfair Display, DM Sans, JetBrains Mono) |
| Offline | Service Worker (Cache-first strategy) |
| Install | Web App Manifest |
| Icons | Custom PNG (generated) |

**Zero frameworks. Zero dependencies. Zero build steps.**

---

## 🌐 Browser Support

| Browser | Support |
|---|---|
| Chrome 80+ | ✅ Full PWA |
| Edge 80+ | ✅ Full PWA |
| Firefox 75+ | ✅ (no install prompt) |
| Safari 14+ | ✅ (iOS Add to Home Screen) |
| Samsung Internet | ✅ Full PWA |

---

## 📜 License

MIT License — free to use, modify, and distribute.

---

## 👤 Author

Built with ❤️ by **Rana**
- GitHub: [@ranag786tech-lang](https://github.com/ranag786tech-lang)

---

> *"The palest ink is better than the best memory."* — Chinese Proverb
