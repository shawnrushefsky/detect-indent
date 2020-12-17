# detect-indent
This was designed to detect the indentation in json files, but it should work on any kind of consistently indented file (python, js, etc).

# API

```javascript
const fs = require('fs');
const detectIndentation = require('detect-indent')

const file = fs.readFileSync('./somefile.json');

const { amount, type, indent } = detectIndentation(file);
```
