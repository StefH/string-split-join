import { consoleTestResultsHandler } from 'tslint/lib/test';
import { expect } from 'chai';
import { StringUtils } from '../src/stringUtils';

describe('StringUtils', () => {

    it('join : with escape \\', () => {
        const result = StringUtils.join([ 'a', 'b', ':c', 'd']);
        expect(result).to.equal('a:b:\\:c:d');
    });

    it('join : with escape $', () => {
        const result = StringUtils.join([ 'a', 'b', ':c', 'd'], { escapeChar: '$' });
        expect(result).to.equal('a:b:$:c:d');
    });

    it('join | with escape $', () => {
        const result = StringUtils.join([ 'a', 'b', '|c', 'd'], { separatorChar: '|', escapeChar: '$' });
        expect(result).to.equal('a|b|$|c|d');
    });

    it('split : with escape \\', () => {
        const results = StringUtils.split('a:b:\\:c:d');
        expect(results).to.deep.equal(['a', 'b', ':c', 'd' ]);
    });

    it('split on |', () => {
        const results = StringUtils.split('a|b|c|d', { separatorChar: '|' });
        expect(results).to.deep.equal(['a', 'b', 'c', 'd' ]);
    });

    it('split on | with escape $', () => {
        const results = StringUtils.split('a|b|$|c|d', { separatorChar: '|', escapeChar: '$' });
        expect(results).to.deep.equal(['a', 'b', '|c', 'd' ]);
    });

});
