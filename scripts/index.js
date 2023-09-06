import * as data from "./insects.js";

const bugFolder = './images/bugs/';
const fishFolder = './images/fish/';
const seaCreaturesFolder = './images/sea-creatures/';

const creatures = [];

creatures[0] = {type: "bug", name: "Agrias butterfly", blurb: "I caught an agrias butterfly! I wonder if it finds me disagrias-able?", src: "./images/bugs/agrias_butterfly.png"};
creatures[1] = {type: "bug", name: "Giant cicada", blurb: "I caught a giant cicada! I guess it's PRETTY big...", src: "./images/bugs/giant_cicada.png"};
creatures[2] = {type: "fish", name: "Anchovy", blurb: "I caught an anchovy! Stay away from my pizza!", src: "./images/fish/anchovy.png"};
creatures[3] = {type: "fish", name: "Whale shark" , blurb: "Thar she blows! I caught a whale shark! I'm tellin' ya, it was thiiiiiiiiiiiiiiiiiiiis big!", src: "./images/fish/whale_shark.png"};
creatures[4] = {type: "sea creature", name: "Abalone", blurb: "I got an abalone! Why do I want a sandwich now?", src: "./images/sea-creatures/abalone.png"};
creatures[5] = {type: "sea creature", name: "Lobster", blurb: "I got a lobster! Lobjective complete.", src: "./images/sea-creatures/lobster.png"};

const image = document.getElementById("mainImage");

let sel = Math.floor(Math.random() * 80);

let creature = creatures[sel];

document.getElementById("creature_image").src = bugFolder.concat(data.insects[sel].src);
document.getElementById("creature_name").innerText = data.insects[sel].name;
document.getElementById("creature_blurb").innerText = data.insects[sel].blurb;
