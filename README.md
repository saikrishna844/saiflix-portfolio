# SaiFlix — Netflix-inspired Cloud & DevOps portfolio

A responsive, no-build static website concept for Sai Krishna. It uses an original dark cinematic interface inspired by streaming-service browsing patterns, with custom CSS project art (no third-party image dependency).

## Run locally

### Option A: Python
Open a terminal in this folder and run:

```bash
python -m http.server 8000
```

Open http://localhost:8000

### Option B: VS Code
Install the **Live Server** extension, right-click `index.html`, and select **Open with Live Server**.

## Before publishing

Search and replace these placeholders in `index.html`:

- Confirm the GitHub, LinkedIn, email, and resume links point to your preferred public profiles and current resume.
- Replace the generic project collection links with the exact repository URL for each project as you verify them.
- Confirm experience duration, certification names/status, and all project descriptions.
- Update the project claims so they accurately reflect work you have completed. Do not publish invented metrics or imply production experience for a lab.

## Notes

- No React, Node.js, or package installation is required.
- Google Fonts are loaded from Google Fonts; if offline, the page falls back to system fonts.
- This is a starter concept and is not connected to your existing Hugo/PaperMod site yet. Test it independently first. After approval, the design can be ported into your Hugo site while preserving your existing domain and content.
- The design is Netflix-inspired, but it does not use Netflix logos, proprietary assets, or claim affiliation with Netflix.

## Expanded content

This version adds project entries based on the public Projects page, a Technical Blog section based on the public publications page, and an expanded certification collection based on the public portfolio/profile. Please verify certification status and link individual badges before publishing.


## SaiFlix v2 improvements

- Added a profile identity ribbon and more recruiter-focused positioning.
- Added a six-card technical journal with search and topic filters.
- Blog links point to public publication pages where direct article URLs should be verified before launch.
- Updated contact email and LinkedIn URL based on the public portfolio.
- The catalogue is static and lightweight; no backend or package installation required.

Before publishing, replace generic GitHub links with exact repository URLs and confirm every article title/URL. Keep claims and metrics aligned with your real experience.


## v3 improvements (October 2026)

- Increased body copy, card text, controls and navigation readability.
- Added four expandable project case studies with problem, design and validation checklists.
- Made GitHub, resume, contact and LinkedIn actions easier to find.
- Corrected the Blog navigation anchor and changed unverified direct-article labels to publication-listing links.
- Added visible keyboard focus, improved mobile navigation and responsive case-study layouts.
- Kept project claims framed as portfolio builds/labs where appropriate; no fabricated production metrics or test outputs were added.

### Run locally

From this folder, run `python -m http.server 8001`, then open `http://localhost:8001`.

### Before publishing

Review the resume URL and current experience dates; verify each certification against the issuing body; replace publication-listing links with exact article URLs where available; and confirm each GitHub repository URL. The website's project index is used where an exact repository URL has not been confirmed.


## Link update notes
- Internal navigation stays within SaiFlix sections.
- Links that previously pointed to the old Hugo `/projects/` or `/posts/` pages have been redirected to SaiFlix case studies or the Hashnode author page.
- Until the actual resume PDF is added, resume actions open a prefilled email request instead of sending visitors to the old Hugo site. Replace this with a direct PDF link once the resume file is provided.
- Please verify every external GitHub/article destination before production deployment.
