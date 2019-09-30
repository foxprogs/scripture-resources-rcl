```js
var usfmJS = require('usfm-js');
import usfm from '../mocks/hi_tit.usfm.js';

const usfmJSON = usfmJS.toJSON(usfm);
const {chapters} = usfmJSON;
const chapterKey = '1';
const verses = chapters[chapterKey];

<Verses verses={verses} inline={true} />
```