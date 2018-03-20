import fs from 'fs';
import path from 'path';


let a = { name: 'toto', age: 32, email: 'toto@test.fr'};

let b = {...a, name: 'titi'};

console.log(b);

if(fs.existsSync(path.join(__dirname, '..', '.babelrc'))) {
  console.log('true');
}
