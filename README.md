# delphi-ai

[![API status](https://img.shields.io/github/actions/workflow/status/JstnMcBrd/delphi-ai/api.yml?logo=github&label=API%20status)](https://github.com/JstnMcBrd/delphi-ai/actions/workflows/api.yml)
[![Validate](https://img.shields.io/github/actions/workflow/status/JstnMcBrd/delphi-ai/validate.yml?logo=github&label=Validate)](https://github.com/JstnMcBrd/delphi-ai/actions/workflows/validate.yml)
<br />
[![NPM Version](https://img.shields.io/npm/v/delphi-ai)](https://www.npmjs.com/package/delphi-ai)
[![NPM License](https://img.shields.io/npm/l/delphi-ai)](./LICENSE)
![NPM Type Definitions](https://img.shields.io/npm/types/delphi-ai)
![NPM Downloads](https://img.shields.io/npm/dt/delphi-ai)
<br />
![Node version](https://img.shields.io/node/v/delphi-ai)

## About

**delphi-ai** is a simple [Node](https://nodejs.org/) package to interact with the API for the Delphi AI. It is developed in [TypeScript](https://www.typescriptlang.org/) and transpiles to JavaScript (ESM).

Delphi is an AI released in 2021 by the **Allen Institute for Artifical Intelligence**, who described it as *"a computational model for descriptive ethics, i.e., people's moral judgments on a variety of everyday situations."* Essentially, provide a prompt and the AI will judge whether it is ethical.

The [demo website](https://delphi.allenai.org/) uses an API to retrieve outputs from the computational model. This package acts as a wrapper for that API to allow you to integrate Delphi with your projects.

> <img alt="Warning" src="https://raw.githubusercontent.com/Mqxx/GitHub-Markdown/main/blockquotes/badge/dark-theme/warning.svg">
>
> The copyright for Delphi belongs to the **Allen Institute for Artifical Intelligence**. This package is unofficial and not supported by them. The API could be turned off at any time. Please check the API status above before reporting issues.

## Prerequesites

This package has no production dependencies!

However, it does require Node 18 or higher. Use `node --version` to check your node version.

## Installation

`npm install delphi-ai`

## Usage

If the API returns a non-200 response, an error will be thrown.
None of the examples below include error handling, but don't forget it!

### ES Modules

```js
import delphi from 'delphi-ai';

const response = await delphi('Building a rocket');
console.log(response); // "It's impressive"
```

### CommonJS

```js
const delphi = require('delphi-ai');

(async () => {
	const response = await delphi('Fighting a mummy');
	console.log(response); // "It's wrong"
})();

// or

delphi('Climbing up the Eiffel Tower').then((response) => {
	console.log(response); // "It's normal"
});
```

## Development

When a merge request is created, the changes must pass linting, building, and unit tests. These checks are run automatically by GitHub. You can run them manually using `npm run lint`, `npm run build`, and `npm test`.

GitHub will also periodically run a test to confirm the API is still working. You can run this test manually with `npm run test-api`.

When a new [Release](https://github.com/JstnMcBrd/delphi-ai/releases) is created, GitHub will automatically deploy the new version to the [npm registry](https://npmjs.com/package/delphi-ai).

This project abides by [Semantic Versioning](https://semver.org/) and [Keep A Changelog](https://keepachangelog.com/). To see a list of changes for each update, check the description of [releases on GitHub](https://github.com/JstnMcBrd/delphi-ai/releases).
