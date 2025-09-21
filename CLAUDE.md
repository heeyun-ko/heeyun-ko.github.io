# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a GitHub Pages deployment repository (`heeyun-ko.github.io`) that serves as the published site for a personal portfolio. The repository is currently on the `gh-pages` branch and appears to have been recently cleaned for a fresh deployment.

## Project Type

Based on the build artifacts and deployment structure, this was an **Astro-based portfolio website**. The `docs/` directory contains compiled Astro build output that gets served by GitHub Pages.

## Repository Structure

- `docs/` - GitHub Pages deployment directory containing built static files
  - `_astro/` - Astro framework assets and styles
  - `chunks/` - JavaScript module chunks
  - `fonts/` - Web font files
  - `pages/` - Static page files
  - `manifest_*.mjs` - Astro manifest files
- `.gitignore` - Excludes `node_modules`
- The repository currently shows deleted static files (HTML, CSS, PDF, images) indicating recent cleanup

## Development Workflow

This appears to be a **deployment-only repository**. The source code for the Astro project is likely maintained in a separate repository or branch, and the built files are deployed to this `gh-pages` branch.

## Key Characteristics

- **Deployment Target**: GitHub Pages (serves from `docs/` directory)
- **Framework**: Astro (evidenced by `_astro/` directory and manifest files)
- **Branch Strategy**: `gh-pages` branch for deployment
- **Build Output**: Static files generated from an Astro project

## Working with this Repository

When working with this repository:

1. This is primarily a deployment target - source code changes should be made in the original Astro project
2. The `docs/` directory should contain the complete built static site
3. Changes here are typically the result of building and deploying from the main Astro source code
4. Be cautious about manually editing files in `docs/` as they will be overwritten on next deployment