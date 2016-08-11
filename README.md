# Fatigue.js
Fatigue.js fixes your confusing nest of build tools, boilerplate, linters, &amp; time-sinks. Inspired by https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4

[![npm version](https://img.shields.io/npm/v/fatiguejs.svg?style=flat-square)](https://www.npmjs.org/package/fatiguejs)
[![Build Status](https://img.shields.io/travis/blittle/fatiguejs.svg?style=flat-square)](https://travis-ci.org/blittle/fatiguejs)

### Install
Install Fatigue.js with npm or jspm:

```
npm install fatiguejs
jspm install npm:fatiguejs
```

### Usage
Simply add the following code to the main entry point of your app:

```js
import fixMe from 'fatiguejs';

fixMe();
```

### sofe
Fatigue.js is conveniently a [sofe service](https://github.com/CanopyTax/sofe):

```js
System.import('fatiguejs!sofe').then(fatigue => fatigue.default());
```
