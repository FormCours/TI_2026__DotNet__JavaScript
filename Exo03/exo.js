'use strict';

const r01 = 5 > 3
// → true

const r02 = null === undefined
// → false

const r03 = 'b' > 'a'
// → true

const r04 = 0 === false
// → false

const r05 = 'JavaScript'.length > 5
// → true

const r06 = '42' == 42
// → true

const r07 = 'JavaScript'.startsWith('java')
// → false

const r08 = '10' > 9
// → true

const r09 = 'hello world'.indexOf('world') === 6
// → true

const r10 = 'Della Duck !'.length === 10
// → false

const r11 = Math.round(4.4) === Math.floor(4.9)
// → true

const r12 = 1 + 2 + '3' === '33'
// → true

const r13 = null == 0
// → true

const r14 = 'Riri Fifi Loulou'.split(' ').length === 3
// → true

const r15 = 4 + '5' + 6 === '96'
// → false

const r16 = (3.14159).toFixed(2) === 3.14
// → false
