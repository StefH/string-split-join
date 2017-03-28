# string-split-join
[![Build Status](https://travis-ci.org/StefH/string-split-join.svg?branch=master)](https://travis-ci.org/StefH/string-split-join)
[![codecov](https://codecov.io/gh/StefH/string-split-join/branch/master/graph/badge.svg)](https://codecov.io/gh/StefH/string-split-join)
[![npm version](https://badge.fury.io/js/string-split-join.svg)](http://badge.fury.io/js/string-split-join)
[![devDependency Status](https://david-dm.org/StefH/string-split-join/dev-status.svg)](https://david-dm.org/StefH/string-split-join?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/StefH/string-split-join.svg)](https://github.com/StefH/string-split-join/issues)
[![GitHub stars](https://img.shields.io/github/stars/StefH/string-split-join.svg)](https://github.com/StefH/string-split-join/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/StefH/string-split-join/master/LICENSE)


## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About

StringUtils for splitting and joining strings with support for separatorCharacter and escapeCharacter.

## Installation

Install through npm:
```
npm install --save string-split-join
```

Use it like:

```typescript
import { StringUtils } from 'string-split-join';

export class Test {
  public test(): void {
    let result: string;

    // Joining
    result = StringUtils.join([ 'a', 'b', ':c', 'd']); // 'a:b:\\:c:d'
    result = StringUtils.join([ 'a', 'b', ':c', 'd'], { escapeChar: '$' });  // 'a:b:$:c:d'
    result = StringUtils.join([ 'a', 'b', '|c', 'd'], { separatorChar: '|', escapeChar: '$' }); // 'a|b|$|c|d'

    // Splitting
    let results: [];
    results = StringUtils.split('a:b:\\:c:d'); // ['a', 'b', ':c', 'd' ]
    results = StringUtils.split('a|b|c|d', { separatorChar: '|' }); // ['a', 'b', 'c', 'd' ]
    results = StringUtils.split('a|b|$|c|d', { separatorChar: '|', escapeChar: '$' }); // ['a', 'b', '|c', 'd' ]
  }
}
```

### Usage without a module bundler
```
<script src="node_modules/string-split-join/bundles/string-split-join.umd.js"></script>
<script>
    // everything is exported StringUtils namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via [compodoc](https://compodoc.github.io/compodoc/) and can be viewed here:
https://StefH.github.io/string-split-join/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and [yarn](https://yarnpkg.com/en/docs/install)
* Install local dev dependencies: `yarn` while current directory is this repo

### Development server
Run `yarn start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `yarn test` to run tests once or `yarn run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
yarn run release
```

## License

MIT
