# es-config

Simple, modern TypeScript/JavaScript tooling configuration common to many of
my projects.

## Setup

Install `@covertcj/es-config` and it's peer dependencies:

```
npm i -D @covertcj/es-config @typescript-eslint/parser @typescript-eslint/eslint-plugin typescript eslint prettier eslint-config-prettier eslint-plugin-prettier
```

Then you can optionally generate the required eslint/prettier files into
your project (only supports typescript at the moment):

```bash
npx bootstrap-es-config
```

And add an eslint runner to your `package.json`'s scripts:

```jsonc
{
  "scripts": {
    "lint": "tsc --noEmit && eslint --fix --ext .js,.ts src/"
  }
}
```
