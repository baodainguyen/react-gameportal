# react-gameportal version 1.0.0

## Check latest npm version
If you want to update latest: npm install -g npm@latest (or: npm i -g npm@latest)

## Check node-modules in project folder (your-app)
If node_modules folder exist before you update latest npm version in project folder (your-app).
Remove by cmd: rm -rf node_modules
Then re-install: npm install (or: npm i) (note: install node_modules to build production and push on github to create github pages)

## Install github pages
cmd: cd your-app
cmd: npm i gh-pages --save-dev

## Setup package.json
"homepage", "private", "dependencies", "scripts", "eslintConfig"
Add .gitignore to ignore node_modules push on to github

## Build production
cmd: npm run deploy

## Option 1: Create new git repo
cmd: git init
cmd ssh: git remote add origin git@github.com:[your-user-account/your-app (replace by your link)]

## Option 2: Clone existing git repo
cmd ssh: git clone git@github.com:[your-user-account/your-app]
Copy all files from your project folder into your-app folder

## Push your files on to github
cmd: git add .
cmd: git commit -m "your note in this commit"

If the first time you push on git
cmd: git push -u origin master

If the second and then (you are on branch master)
cmd: git push