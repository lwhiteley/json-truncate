# json-truncate [![NPM version](https://badge.fury.io/js/json-truncate.svg)](http://badge.fury.io/js/json-truncate) [![Dependency Status](https://gemnasium.com/kaelzhang/json-truncate.svg)](https://gemnasium.com/kaelzhang/json-truncate)

A way to truncate a json object. Useful for circular referenced objects.

## Install

```
npm install json-truncate --save
```

## Usage

```js
var JSONtruncate = require('json-truncate');

console.log(JSONtruncate(SomeDeepObject, 10));
```

## Returns

You will get a proper truncated object that can now be written to a file if needed.

#### Arguments

* `obj` - The Object that will be truncated.
* `maxDepth` - The depth at which to stop building the valid json.



## Licence

MIT