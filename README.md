# JSCOMPLEX with npm scripts 
## How to Use

1.- Cloning
```
git clone https://github.com/jansanchez/jscomplex-with-npm-scripts.git jscomplex_npm
```
```
cd jscomplex_npm
```
2.- Install
```
npm install -d
```
3.- Running
```
npm run jscomplex
```

## What we did?

### Package.json

**Old `package.json`**

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
}
```

**New `package.json`**

```json
"scripts": {
    "jscomplex": "jscomplex \"['./index.js', './js/**/*.js']\"",
    "test": "echo \"Error: no test specified\" && exit 1"
}
```
