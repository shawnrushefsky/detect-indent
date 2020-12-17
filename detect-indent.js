function detectIndentation(file) {
  const lines = file.split('\n');
  const tokenTypes = {
    spaces: 0,
    tabs: 0
  };
  const numIndentation = [];

  lines.forEach((line) => {
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === ' ') {
        tokenTypes.spaces += 1;
      } else if (char === '\t') {
        tokenTypes.tabs += 1;
      } else {
        numIndentation.push(i);
        return;
      }
    }
  });

  const differences = [];
  for (let i = 1; i < numIndentation.length; i++) {
    if (numIndentation[i] > numIndentation[i-1]) {
      differences.push(numIndentation[i] - numIndentation[i-1]);
    }
  }

  function _mode(arr){
    return arr.sort((a,b) =>
          arr.filter(v => v===a).length
        - arr.filter(v => v===b).length
    ).pop();
  }

  const type = tokenTypes.spaces > tokenTypes.tabs ? 'spaces' : 'tabs';
  const characters = {
    'spaces': ' ',
    'tabs': '\t'
  };

  const amount = _mode(differences);

  return {
    amount,
    type,
    indent: characters[type].repeat(amount)
  }
}

module.exports = detectIndentation;