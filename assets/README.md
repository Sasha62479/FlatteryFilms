# Where the site's files go

Everything the site shows lives inside this `assets/` folder.
Upload into the folder that matches, and name files the way shown, so the site can find them.

**Naming rules (all folders):** lowercase, hyphens instead of spaces, no special characters.
`sean-portrait.jpg` ✓  `SEAN Portrait FINAL (2).PNG` ✗

| Folder | What goes in it | Name files like | Size |
|---|---|---|---|
| `img/team/` | One main portrait per person. Uploading a file with the same name replaces the old one. | `wil.jpg`, `dani.jpg`, `steven.jpg`, `suzanne.jpg`, `sean.jpg`, `josh.jpg`, `shane.jpg` | JPEG, about 2400 px wide, under 500 KB |
| `img/moments/` | "In action" photos for a second screen per person (Josh behind the camera, Steven with his Emmys) | `josh-1.jpg`, `steven-1.jpg` | JPEG, about 2400 px wide |
| `img/stills/` | Photos used as page backgrounds and in projects | `project-place-subject.jpg`, e.g. `thin-space-scotland-bagpiper.jpg` | JPEG, about 2400 px wide |
| `img/gallery/` | Portfolio photos, one folder per person or project | `gallery/sean/weezer-cover.jpg` | JPEG, about 2000 px wide |
| `img/home/` | Photos for the home page film strip | any clear name | JPEG, about 1600 px wide |
| `img/posters/` | A still from each video, shown while the video loads | same name as the video, `.jpg` | JPEG, about 1600 px wide |
| `img/brand/` | Logo files | `logo-red.svg`, `logo-white.png` | SVG if you have it |
| `video/` | Short silent loops that play behind a page, and short reels | `short-devils-of-the-deep.mp4`, `where-air-flight.mp4` | MP4, 1280–1920 px wide, ideally 3–8 MB |
| `audio/` | Wil's voice telling the story behind a still | `thin-space-costa-rica.mp3` | MP3 |

**Long films and full episodes** go on Vimeo or YouTube, not here — GitHub is slow for big videos.
Uploads here should stay small; Claude can shrink big photos and videos before they go in.

`site.css` and `site.js` in this folder are the code for option 1. Option 2's code lives in `../option-2/`.
