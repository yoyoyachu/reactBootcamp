import foods from './foods';
import {choice, remove} from './helpers';

const fruit = choice(foods);
console.log(`I'd like one ${fruit} please!!`);
console.log(`here you go: ${fruit} `);
console.log(`May i have another?`);
const remaining = remove(foods,fruit);
console.log(`sorry we just have ${remaining} left`);