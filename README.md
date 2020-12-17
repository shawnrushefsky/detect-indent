# detect-indent
Detects Indentation in JSON files

# API

```javascript
const fs = require('fs');
const detectIndentation = require('detect-indent')

const file = fs.readFileSync('./somefile.json');

const { amount, type, indent } = detectIndentation(file);
```
