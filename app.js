let name=prompt('Name');
let age =prompt('age');
let gender =prompt('gender');

let biyaer_age = 0;

let somman='';

if (gender== 'Male') {
    biyaer_age = 21;
    somman = 'vaia';

}else if (gender== 'Female') {
    biyaer_age = 18;
    somman = 'madam';
    
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

