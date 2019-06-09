# es-config

Simple, modern JavaScript tooling configuration common to many of my projects.

## Setup

Install `@covertcj/es-config` and it's peer dependencies:

```
npm i -D @covertcj/es-config eslint prettier eslint-config-prettier eslint-plugin-prettier
```

Then copy the config templates into your project:

```bash
cp "node_modules/@covertcj/es-config/templates/*" ./
```

And add an eslint runner to your `package.json`'s scripts:

```jsonc
{
  "scripts": {
    "lint": "eslint --fix --ext .js,.ts src/"
  }
}
```
