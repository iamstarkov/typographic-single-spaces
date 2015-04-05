import singleSpaces from './index';
import { equal } from 'assert';

it('should fix double spaces', ()=> {
  equal(singleSpaces(`foo  bar`), `foo bar`);
});

it('should fix double spaces after punctuation', ()=> {
  equal(singleSpaces(`foo.  Bar`), `foo. Bar`);
  equal(singleSpaces(`foo,  bar`), `foo, bar`);
});

it('should fix multiply spaces', ()=> {
  equal(singleSpaces(`foo           bar`), `foo bar`);
});
