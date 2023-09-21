# delphi-ai

## About

**delphi-ai** is a simple unofficial [node](https://nodejs.org/) package to interact with the API for the Delphi AI. It is developed in [TypeScript](https://www.typescriptlang.org/) and transpiles to JavaScript (ESM).

[Delphi](https://delphi.allenai.org/) is an AI released in 2021 by the **Allen Institute for Artifical Intelligence**, who described it as *"a computational model for descriptive ethics, i.e., people's moral judgments on a variety of everyday situations."* Essentially, you provide a prompt, and the AI judges whether it is ethical.

The [demo website](https://delphi.allenai.org/) uses an API to retrieve outputs from the computational model. This package acts as a wrapper for that API to allow you to integrate Delphi with your projects.

> WARNING: this package is unofficial and not supported by the developers of Delphi. The API could be turned off at any time.

> NOTE: The copyright for Delphi belongs to the **Allen Institute for Artifical Intelligence**, not the developer of this package.

## Prerequesites

This package has no production dependencies!

However, it does require Node 18 or higher. Use `node --version` to check your node version.

## Installation

`npm install delphi-ai`

## Usage

> Note: If the Delphi API returns a non-200 response, an error will be thrown.
> None of the examples below include error handling, but don't forget it!

### ES Modules

This package uses ESM, so it is easiest to import from within a project also using ESM.

```js
import delphi from "delphi-ai";

const response = await delphi("Eating ");
console.log(response);
```

### CommonJS

Because ES module imports are asynchronous, this package cannot be imported with a synchronous `require()` call.
You must use a dynamic import instead, which must be inside an asynchronous method or handled as a `Promise`.

```js
(async () => {
    const delphi = await import("delphi-ai");
    const response = await delphi("Eating ");
    console.log(response);
})();

// or

import("delphi-ai").then(async (delphi) => {
    const response = await delphi("Eating ");
    console.log(response);
});
```

The recommended way to use this package is from within a project using ES Modules.
ESM is the official module system for JavaScript. If you are using CommonJS, consider upgrading!

