# Modul 291 - Oberflächen (UIs) mit Webtechnologien entwickeln

## Project setup
When using these projects with Node-version `18.3.0 LTS` (`node --version`) then 

1. Install packages with `yarn` with following option
`$ yarn --ignore-engines`
or
`$ yarn config set ignore-engines true`
`$ yarn install`

2. Start vue-app with
`$ yarn run serve-win` for Microsoft Windows systems
`$ yarn run serve-mac` for Apple Macs systems

``` 
"serve-win": "set NODE_OPTIONS=--openssl-legacy-provider && vue-cli-service serve",
"serve-mac": "export NODE_OPTIONS=--openssl-legacy-provider; vue-cli-service serve",
```

### Project run 
Run the project (with hot-reloads for development)

for Windows:
```
yarn run serve-win
```
for Mac:
```
yarn run serve-mac
```

### Project deploy
Compiles and minifies for production
```
yarn run build
```

### How to install yarn
* [Install yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)

### Keep your notes or personal changes
If you want to keep the local modifications somehow, you'd use stash to hide them away before pulling, then reapply them afterwards:
```
git stash
git pull
git stash pop
```
