# SaiFlix — Cloud & DevOps Engineer Portfolio

A cinematic, Netflix-inspired portfolio showcasing my work in **Azure Cloud, Infrastructure as Code, DevOps automation, CI/CD, and cloud infrastructure engineering**.

🌐 **Live Website:** [saikrishnavempati.com](https://saikrishnavempati.com)  
🧪 **Preview Website:** [preview.saikrishnavempati.com](https://preview.saikrishnavempati.com)  
💻 **GitHub:** [saikrishna844](https://github.com/saikrishna844)  
📝 **Technical Blog:** [Hashnode](https://saikrishnavempati.hashnode.dev/)  
💼 **LinkedIn:** [Sai Krishna Vempati](https://in.linkedin.com/in/saikrishna-vempati)

---

## 🎬 About SaiFlix

SaiFlix is a personal portfolio designed to present cloud and DevOps engineering projects through a modern, cinematic browsing experience.

Instead of a traditional resume-style website, SaiFlix organizes technical work into browsable sections for projects, experience, skills, certifications, and technical articles.

The goal is to make it easier for recruiters, engineers, and hiring managers to explore my technical interests, practical labs, and engineering approach.

## ✨ Features

- **Cinematic UI:** Dark interface with a distinctive red accent and streaming-inspired layout.
- **Responsive Design:** Adaptable layouts for desktop, tablet, and mobile screens.
- **Project Showcase:** Technical projects with descriptions, architecture details, and implementation notes.
- **Case Studies:** Selected projects organized around problems, design decisions, implementation, and validation.
- **Technical Journal:** Blog listings with search and topic filters.
- **Skills & Experience:** A structured overview of cloud, infrastructure, automation, and operations experience.
- **Certifications:** A dedicated section for professional certifications and credentials.
- **Recruiter-Friendly Navigation:** Direct access to projects, GitHub, LinkedIn, resume requests, and contact information.
- **Lightweight Architecture:** Static HTML, CSS, and JavaScript with no application server or package installation required.
- **Accessibility Considerations:** Keyboard focus styles and responsive navigation.

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and semantic content |
| CSS3 | Responsive layouts, cinematic styling, and visual effects |
| JavaScript | Navigation, interactions, search, and filtering |
| Git & GitHub | Version control and source code hosting |
| GitHub Actions | Automated code validation |
| Cloudflare Pages | Website hosting and continuous deployment |
| Custom CSS artwork | Original project visuals without external image dependencies |

Google Fonts are used for typography. If they are unavailable, the website falls back to system fonts.

## 🏗️ Architecture

```text
Developer
    |
    | Edit HTML / CSS / JavaScript
    v
Local Development
    |
    | Git commit and push
    v
GitHub Repository
    |
    +---- GitHub Actions
    |       |
    |       +---- Required-file checks
    |       +---- Basic HTML reference checks
    |       +---- JavaScript syntax validation
    |
    +---- Cloudflare Pages
             |
             +---- Build / deployment
             |
             v
       Live SaiFlix Website
       saikrishnavempati.com
```

**Deployment model:** Cloudflare Pages is connected directly to the GitHub repository. New commits pushed to the configured production branch trigger automatic deployments. GitHub Actions performs separate validation checks.

The current CI workflow is a lightweight validation pipeline, not a complete browser-testing or security-testing suite.

## 📂 Project Structure

```text
saiflix-portfolio/
├── .github/
│   └── workflows/
│       └── ci.yml
├── index.html
├── styles.css
├── script.js
└── README.md
```

- `index.html` — Main website structure and content.
- `styles.css` — Theme, layout, responsive behavior, and visual styling.
- `script.js` — Client-side interactions, navigation, search, and filtering.
- `.github/workflows/ci.yml` — GitHub Actions validation workflow.
- `README.md` — Project documentation.

## 🚀 Run Locally

SaiFlix is a static website. You do not need Node.js, React, or a package manager to run it.

### Prerequisites

- Git
- Python 3, or Visual Studio Code with the Live Server extension
- A modern web browser

### Option 1: Clone the repository

```bash
git clone https://github.com/saikrishna844/saiflix-portfolio.git
cd saiflix-portfolio
```

### Option 2: Start a local Python server

From the project directory, run:

```bash
python -m http.server 8000
```

On Windows, you can also use:

```powershell
py -m http.server 8000
```

Open:

[http://localhost:8000](http://localhost:8000)

Press `Ctrl+C` in the terminal to stop the server.

### Option 3: Use Visual Studio Code

1. Open the project folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

## 🔄 CI/CD Workflow

The repository contains a GitHub Actions workflow at `.github/workflows/ci.yml`.

The current workflow runs on pushes to `main` and pull requests targeting `main`.

It validates:

1. The presence of `index.html`, `styles.css`, and `script.js`.
2. Basic HTML document and asset references.
3. JavaScript syntax using Node.js.

### Typical development workflow

```bash
git checkout -b feature/update-portfolio

# Make and test your changes locally

git add .
git commit -m "Improve portfolio hero section"
git push -u origin feature/update-portfolio
```

Open a pull request on GitHub, review the CI result, and merge the changes into `main` when ready.

Cloudflare Pages then deploys changes from the connected production branch.

**Note:** CI validation and Cloudflare deployment are separate processes. To prevent unvalidated changes from reaching production, configure GitHub branch protection or a ruleset requiring the CI status check before merging. A direct push to `main` may still trigger a Cloudflare deployment even if CI fails.

## ☁️ Deployment

SaiFlix is hosted on Cloudflare Pages and connected to the GitHub repository.

- **Production:** [https://saikrishnavempati.com](https://saikrishnavempati.com)
- **Preview:** [https://preview.saikrishnavempati.com](https://preview.saikrishnavempati.com)
- **Source repository:** [https://github.com/saikrishna844/saiflix-portfolio](https://github.com/saikrishna844/saiflix-portfolio)

The current setup uses a static-site deployment with no backend service or build dependencies.

For future changes, test locally first, push the code, review the CI result, and verify the Cloudflare deployment.

## ☁️ Areas Showcased

The portfolio highlights practical learning and engineering work in areas such as:

- Microsoft Azure infrastructure and administration
- Terraform and Infrastructure as Code
- Azure infrastructure provisioning and governance
- Terraform drift detection and automation
- GitHub Actions and CI/CD workflows
- Docker and Kubernetes learning projects
- Hybrid infrastructure and Windows Server administration
- Technical documentation and engineering case studies

Project descriptions distinguish hands-on labs and portfolio implementations from professional production experience.

## 🔐 Security & Reliability

- No application secrets or cloud credentials are required to serve the static website.
- GitHub Actions uses read-only repository permissions for its current validation workflow.
- HTTPS is enabled for the configured Cloudflare Pages custom domains.
- Changes can be reviewed through GitHub before merging.
- The original Hugo/PaperMod portfolio repository remains separate from SaiFlix.

Do not commit passwords, access tokens, private keys, or other secrets to the repository.

## 🗺️ Roadmap

- [x] Create the cinematic portfolio interface.
- [x] Add project, experience, skills, certifications, and blog sections.
- [x] Host the website using Cloudflare Pages.
- [x] Connect the custom domain.
- [x] Add GitHub Actions validation.
- [ ] Add required CI status checks before production merges.
- [ ] Expand automated HTML, accessibility, and browser tests.
- [ ] Verify every external project, certification, and article link.
- [ ] Add a direct resume PDF link.
- [ ] Continue improving project case studies and architecture documentation.

## 👨‍💻 About Me

I'm Sai Krishna Vempati, a Cloud & DevOps professional interested in building secure, reliable, and automated infrastructure.

My technical interests include Microsoft Azure, Terraform, infrastructure automation, CI/CD, cloud operations, and container technologies.

SaiFlix is both my professional portfolio and a practical exercise in building, validating, deploying, and maintaining a static website through a Git-based workflow.

- **Portfolio:** [saikrishnavempati.com](https://saikrishnavempati.com)
- **GitHub:** [saikrishna844](https://github.com/saikrishna844)
- **LinkedIn:** [Connect with me](https://in.linkedin.com/in/saikrishna-vempati)
- **Technical Blog:** [Hashnode](https://saikrishnavempati.hashnode.dev/)
- **Email:** vemsaikrishna@gmail.com

## 📄 License

Unless otherwise specified, the source code is available under the MIT License. If you intend to use this project as an open-source template, add a `LICENSE` file containing the MIT License text and your chosen copyright notice.

---

*Built with curiosity, documented through practice, and deployed with automation.*
