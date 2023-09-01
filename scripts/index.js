import * as fs from 'fs';

const bugFolder = './images/bugs';
const fishFolder = './images/fish';
const seaCreaturesFolder = './images/sea-creatures';

fs.readdirSync(bugFolder).forEach(file => {
    console.log(file);
});
