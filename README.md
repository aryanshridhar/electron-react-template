## secure-electron-template

A short but powerful template to get you started with electron with typescript quickly.

### Demo

Demonstration of the electron app with renderer hot reloading enabled -

![Screen Recording 2022-03-25 at 11 18 53 PM](https://user-images.githubusercontent.com/53977614/160176905-0e33565f-6efe-4d96-a308-f57f7beee479.gif)

### Included features & modules

The current version of template is bundled with the following packages and framework to give a smooth developer experience -

<b>Electron + </b>

- React
- Typescript
- Webpack (development & production)
- Electron forge
- Hot reloading
- Configured preload scripts.
- Eslint
- Prettier

### Configure in our own project

One way is to clone the repository and modify it. If that's the case, one has to follow these steps to use the template -

- Clone the repository -

```
git clone https://github.com/aryanshridhar/electron-react-template
```

- Open `package.json` and edit out the following lines -

```diff
{
- "name": "electron-react-template",
+ "name": "your_package_name",
- "productName": "electron-react-template",
+ "productName": "your_product_name"
- "version": "1.0.0",
+ "version": "your_package_version_number",
- "description": "My Electron application description",
+ "description": "your_package_description",
  "main": ".webpack/main",
  "scripts": {
    "start": "electron-forge start",
    "package": "electron-forge package",
    "make": "electron-forge make",
    "publish": "electron-forge publish",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "prettify": "yarn prettier --write ."
  },
- "keywords": [
-  "electron",
-  "template",
-  "forge",
-  "webpack",
-  "hot reloading",
-  "typescript"
- ],
  "author": {
-   "name": "aryanshridhar",
+   "name": "your_profile_name",
-   "email": "aryanshridhar7@gmail.com"
+   "email": "your_email_address"
  },
  "license": "MIT",
  "bugs": {
-   "url": "https://github.com/aryanshridhar/electron-react-template/issues"
+   "url": "your_github_repo/issues"
  },
- "homepage": "https://github.com/aryanshridhar/electron-react-template#readme",
+ "homepage": "your_github_repo#readme",
  "config": {
    "forge": "./tools/forge/forge.config.js"
  },
  "devDependencies": {
    "@electron-forge/cli": "^6.0.0-beta.63",
    "@electron-forge/maker-deb": "^6.0.0-beta.63",
    "@electron-forge/maker-rpm": "^6.0.0-beta.63",
    "@electron-forge/maker-squirrel": "^6.0.0-beta.63",
    "@electron-forge/maker-zip": "^6.0.0-beta.63",
    "@electron-forge/plugin-webpack": "6.0.0-beta.63",
    "@types/react": "^17.0.41",
    "@types/react-dom": "^17.0.14",
    "@typescript-eslint/eslint-plugin": "^5.0.0",
    "@typescript-eslint/parser": "^5.16.0",
    "@vercel/webpack-asset-relocator-loader": "1.7.0",
    "css-loader": "^6.0.0",
    "electron": "17.1.2",
    "eslint": "^8.0.1",
    "eslint-config-airbnb": "^19.0.4",
    "eslint-config-prettier": "^8.5.0",
    "eslint-import-resolver-alias": "^1.1.2",
    "eslint-plugin-import": "^2.25.4",
    "eslint-plugin-jsx-a11y": "^6.5.1",
    "eslint-plugin-prettier": "^4.0.0",
    "eslint-plugin-react": "^7.29.4",
    "eslint-plugin-simple-import-sort": "^7.0.0",
    "fork-ts-checker-webpack-plugin": "^6.0.1",
    "node-loader": "^2.0.0",
    "prettier": "2.6.0",
    "style-loader": "^3.0.0",
    "ts-loader": "^9.2.2",
    "typescript": "~4.5.4"
  },
  "dependencies": {
    "electron-squirrel-startup": "^1.0.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  }
}

```

### Contributing

First of all, thanks for taking out time and enhancing the template even more! :)
You can build the template by following these steps -

- Clone the repository -

```
git clone https://github.com/aryanshridhar/electron-react-template
```

- Install dependencies -

```
cd electron-react-template/ && yarn install
```

We use yarn install of npm!

- Before opening a pull request make sure of lint and fix all the eslint/prettier errors by -

```
yarn lint:fix && yarn prettify
```

That's it!

### What's next ?

Adhering to the rules/guidelines checklist set by electron concerning the security of application is a must.
For more information - https://www.electronjs.org/docs/latest/tutorial/security#checklist-security-recommendations

Probably this can be a part of next release! ;)
