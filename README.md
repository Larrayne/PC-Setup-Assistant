# PC Setup Assistant

A Node.js CLI that opens your development environment in one step.

## Features

- Interactive menu powered by Inquirer
- Development workspace launcher
- Opens URLs, projects, folders, and desktop apps
- Utility modules for welcome screen, loading spinner, and progress bar
- GitHub Actions CI pipeline

## Project Structure

- launcher.js: main CLI entry point
- config.js: your personal workspace configuration
- actions/development.js: launches Development workspace
- utils/open.js: runs shell commands and logs success/failure
- scripts/ci-check.js: syntax check used by CI
- .github/workflows/ci.yml: CI pipeline on push and pull request

## Requirements

- Node.js 20+ (22 recommended)
- npm
- Windows (current command setup uses Windows commands)

## Installation

1. Clone the repository.
2. Install dependencies:

   npm install

## Usage

Run:

node launcher.js

Then choose a workspace from the menu.

Current menu status:
- Development: implemented
- Study: coming soon
- Entertainment: coming soon
- Open Everything: currently launches Development

## Configuration

Edit config.js to match your machine.

Example:

module.exports = {
  urls: [
    "https://chatgpt.com",
    "https://github.com"
  ],
  projects: [
    "C:\\Users\\your-user\\Documents\\Projects\\my-project"
  ],
  folders: [
    "C:\\Users\\your-user\\Documents\\Projects"
  ],
  apps: [
    "code",
    "wt"
  ]
};

Notes:
- urls: opened in browser
- projects: opened with VS Code (code)
- folders: opened in File Explorer
- apps: executable names; wt maps to Windows Terminal

## Scripts

- npm test: runs JavaScript syntax checks via scripts/ci-check.js

## CI Pipeline

GitHub Actions workflow location:
- .github/workflows/ci.yml

Pipeline behavior:
- Runs on push to main and on pull requests
- Tests Node 20.x and 22.x
- Executes npm ci and npm test

## Troubleshooting

Inquirer prompt is not a function:
- Ensure import uses require("inquirer").default in CommonJS.

Prompt type list is not registered:
- Use type: "select" for Inquirer v14+.

## License

ISC
