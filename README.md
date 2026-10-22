# mjaguda.github.io

Personal portfolio of **Mark Jayson Aguda**, Full-Stack Developer (Laravel, Vue, React & AI integrations).

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), deployed to GitHub Pages by GitHub Actions. Hosting costs $0.

## Run locally

Requires Node 24 (pinned in `mise.toml`).

```sh
npm install
npm run dev      # http://localhost:4321
npm run check    # type-check
npm run build    # static site in dist/
```

## Editing content

| What | Where |
|---|---|
| Name, pitch, skills, experience, education | `src/data/profile.ts` |
| Projects (one Markdown file each) | `src/content/projects/*.md` |
| Résumé PDF | `public/Mark-Jayson-Aguda-Resume.pdf` |

The frontmatter schema for projects is in `src/content.config.ts`. `order` controls the order on the home page.

## Deploy

Every push to `main` runs `.github/workflows/deploy.yml`. Analytics use Cloudflare Web Analytics: set the repo variable `CF_BEACON_TOKEN` and the beacon script is added at build time.
