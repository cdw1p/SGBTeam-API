# SGBTeam-API

SGB Team Official API to Check SGB Code Validation

PHP Version : https://github.com/dandyraka/SGB-Team-API

## Install

```
npm install sgbteam-api
```

## Example

```js
const { WebBased, WebBasedRegion, CLIBased } = require('sgbteam-api');

// Initializing a variable
const SGB_CODE = 'YOUR_CODE'
const SGB_SECRET = 'YOUR_SECRET'
const SGB_REGION = 'YOUR_REGION'

/* Web Based */
WebBased(SGB_CODE, SGB_SECRET).then(response => {
  console.log(response) // true or false
})

/* Web Based (Region) */
// Maybe you can use it for absent regional members
WebBasedRegion(SGB_CODE, SGB_SECRET, SGB_REGION).then(response => {
  console.log(response) // true or false
})

/* CLI Based */
CLIBased(SGB_CODE, SGB_SECRET).then(response => {
  console.log(response) // true or false
})

// or use await
console.log(await CLIBased(SGB_CODE, SGB_SECRET))
```

## Results

```
true  : valid
false : invalid
```
