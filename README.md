# Farm + Tauri + Varlet mobile app template

### Intro

varlet-app-template is an out-of-the-box lightweight mobile web template, developed based on `Vue3`, `Varlet`, `Typescript`. compiler `farm` and `tauri`

### License

This project is based on the `MIT` license

### Features

- ⚡️ &nbsp; Developed based on `Vue3`, `Varlet`, `Typescript`. compiler `farm` and `tauri`
- 📦 &nbsp; Automatic and on-demand import of built-in component libraries and third-party libraries
- 🗂 &nbsp; Built-in stack routing navigation similar to native apps
- 🗂 &nbsp; Built-in conventional routing based on file directory structure
- 🌍 &nbsp; Built-in application-level internationalization
- 📦 &nbsp; Built-in request library integrated, support composition api
- 📦 &nbsp; Built-in theme customization
- 📦 &nbsp; Built-in mobile debugging tool
- 📦 &nbsp; Built-in `pinia` for state management
- 📦 &nbsp; Built-in `mockjs` for data mocking
- 📦 &nbsp; Built-in `vitest` for unit testing
- 📦 &nbsp; Built-in `cypress` for e2e testing
- 📦 &nbsp; Built-in `unocss` integration
- 📦 &nbsp; Built-in `eslint`, `commitlint`, `lint-staged`, `prettier` and other code checking/formatting tools
- 💪 &nbsp; Officially maintained by `varletjs`, the first party provides support for `varlet`


### preview 

![image](https://github.com/ErKeLost/farm-tauri-varlet-mobile-app/assets/66500121/ac2ea81e-a499-4525-a81c-9260045300a3)

![image](https://github.com/ErKeLost/farm-tauri-varlet-mobile-app/assets/66500121/f537c46a-5d9f-4b95-b257-79027a5b59a0)

![image](https://github.com/ErKeLost/farm-tauri-varlet-mobile-app/assets/66500121/056d7778-dd47-4c3b-9e74-fa78fece284f)


#### Install Dependencies

```shell
pnpm install
```

#### Start the development environment

```shell
// like ios
pnpm tauri ios init

// start
pnpm tauri ios dev
```

#### Build

```shell
pnpm tauri ios build
```

#### Lint Code

```shell
pnpm lint
```

#### TS type checking

```shell
pnpm type-check
```

#### Code Formatting

```shell
pnpm format
```

#### Running unit tests

```shell
pnpm test
```

#### Run unit tests and generate test reports

```shell
pnpm test:coverage
```

