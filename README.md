# SKELETON REACT APP

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](http://prettier.io) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

## Development

1. Press `Clone` button.

2. Install and run:

```bash
yarn install
yarn start
```

## PullRequest

  - [ ] This PR implements new feature, fix bug, or some other changes
  - [ ] If PR is not ready to review mark it as Draft
  - [ ] All commits in this PR should be created by `npm commit` by [conventional-commits](https://www.conventionalcommits.org/en/v1.0.0/)
  - [ ] Title of the PR should have issue(s) identifier(s) ("BOX-123 Example title of PR")

## Project Structure

| Name                        | Description                                             |
| --------------------------- | ------------------------------------------------------- |
| **src/**                    | Source files                                            |
| **tests/**                  | Test cases will be placed here                          |
| **tests/unit/**             | Unit Test cases will be placed here                     |
| **tests/e2e/**              | E2E testing                                             |
| **tests/integration/**      | API routes (Integration) Test cases will be placed here |
## Notes

### 1. Why is my git pre-commit hook not executable by default?

- Because files are not executable by default; they must be set to be executable.

```
chmod ug+x .husky/*
chmod ug+x .git/hooks/*
```
