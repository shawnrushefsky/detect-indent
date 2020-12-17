const { expect } = require('chai');
const fs = require('fs');
const path = require('path');
const detectIndent = require('../detect-indent');

const spaces1 = fs.readFileSync(path.join(__dirname, 'fixtures/1space.json'), 'utf8');
const spaces2 = fs.readFileSync(path.join(__dirname, 'fixtures/2space.json'), 'utf8');
const spaces4 = fs.readFileSync(path.join(__dirname, 'fixtures/4space.json'), 'utf8');
const tabs1 = fs.readFileSync(path.join(__dirname, 'fixtures/1tab.json'), 'utf8');

describe('detect-indent', () => {
  it('works with 1 space', () => {
    const result = detectIndent(spaces1);
    expect(result).to.deep.equal({
      amount: 1,
      type: 'spaces',
      indent: ' '
    });
  });

  it('works with 2 spaces', () => {
    const result = detectIndent(spaces2);
    expect(result).to.deep.equal({
      amount: 2,
      type: 'spaces',
      indent: '  '
    });
  });

  it('works with 4 spaces', () => {
    const result = detectIndent(spaces4);
    expect(result).to.deep.equal({
      amount: 4,
      type: 'spaces',
      indent: '    '
    });
  });

  it('works with 1 tab', () => {
    const result = detectIndent(tabs1);
    expect(result).to.deep.equal({
      amount: 1,
      type: 'tabs',
      indent: '\t'
    });
  });
});