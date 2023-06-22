

let name=prompt('Name');
let age =prompt('age');
let gender =prompt('gender');

let biyaer_age = 0;

let somman='';


switch (gender) {
    case 'Male':
        biyaer_age = 21;
        somman = 'vaia';
        break;

    case 'Female':
        biyaer_age = 21;
        somman = 'Apu';
        break;
}



if (age >= biyaer_age) {

    console.log(`
    Hi ${ name } ${ somman }, apni bier upojukto
    `);
} else {
    console.log(`
    Hi ${name} ${somman}, apni bier upojukto noy
    `);
}
