# How to start
```bash
mkdir PROJECT_DIR
cd PROJECT_DIR
npm init -y
npm install --save-dev typescript ts-node
npm install --save-dev eslint
npm install --save-dev mocha
npm install --save-dev nyc
npm install --save-dev mochawesome
npm i --save-dev @types/assert
node_modules/typescript/bin/tsc --init
node_modules/.bin/eslint --init

touch index.ts

# run the program
node_modules/ts-node/dist/bin.js index.ts
```