# Demo react app <!-- omit in toc -->

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](http://prettier.io) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

## Example

1. [react-redux-saga](/demo/react-redux-saga/)
2. [react-redux-thunk]()
3. [react-mobx]()
4. ...

## Project Structure

| Name                   | Description                                             |
| ---------------------- | ------------------------------------------------------- |
| **src/**               | Source files                                            |
| **src/context**        | ...                                                     |
| **src/entities**       | ...                                                     |
| **src/features**       | ...                                                     |
| **src/hooks**          | ...                                                     |
| **src/layouts**        | ...                                                     |
| **src/lib**            | ...                                                     |
| **src/pages**          | ...                                                     |
| **src/services**       | ...                                                     |
| **src/store**          | ...                                                     |
| **src/ui**             | ...                                                     |
| **src/utils**          | ...                                                     |
| **src/widgets**        | ...                                                     |
| **tests/**             | Test cases will be placed here                          |
| **tests/unit/**        | Unit Test cases will be placed here                     |
| **tests/e2e/**         | E2E testing                                             |
| **tests/integration/** | API routes (Integration) Test cases will be placed here |

## Notes

### 1. PullRequest

- [ ] This PR implements new feature, fix bug, or some other changes
- [ ] If PR is not ready to review mark it as Draft
- [ ] All commits in this PR should be created by `yarn commit` by [conventional-commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [ ] Title of the PR should have issue(s) identifier(s) ("BOX-123 Example title of PR")

### 2. Why is my git pre-commit hook not executable by default?

- Because files are not executable by default; they must be set to be executable.

```bash
chmod ug+x .husky/*
chmod ug+x .git/hooks/*
```
