//--------------------------------
// lenth and countity of string



const sent = "Lorem ipsum dolor sit nayan consectetur adipisicing elit. Nayan porro reprehenderit veniam praesentium in? Eius laudantium natus quidem Nayan soluta!";


const matches = sent.match(/nayan/gi);
 
const machesMany = matches ? matches.length : 0;

let positions = sent.search(/nayans/i);

positions = positions >= 0 ? positions : "nothing found";
// console.log(machesMany);
// console.log(positions);




// lenearasearch function emplements


function linearSearch(arr, val){
    const length = arr.length;
    for(let i=0; i < length; i++){
        if(arr[i] == val){ 
             return i;
            }

    }

    return 'not found';
}


// console.log(linearSearch(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'], 'g'));
// console.log(linearSearch(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'],'z'));



// the bigest siring of an arry


function longestString(names){
    let longestword = '';

    for(name of names){
        if(name.length > longestword.length){
            longestword = name;
        }
    }
    return [ longestword, names.indexOf(longestword)];
}

// console.log(longestString(['md nayan','md nayan islam', 'nayan', 'islam', 'md']));


 // find Remainder of a number by 3 % 5


function teenPus(number){
  for(let i =1; i <= number; i++) {
    if(i % 15 === 0 ){
        console.log(`${i} is teenPus`);
    }else if(i % 3 === 0) {
        console.log(`${i} is teen`);
    }else if(i % 5 === 0) {
        console.log(`${i} is pus`);
    }else{
        console.log(i);
    }
  }   
}

// teenPus(50);


// fillter the true value of an arry

const fullArr = [

    "md",
    undefined,
    "md nayan Islamic",
    false,
    "",
    "mango",
    40,
    true,
    "Thanks All",
    NaN
];

const trueArr = fullArr.filter(function(el){
    if(el){
        return true;
    }else{
        return false;
    }
});
const trueArry = fullArr.filter(Boolean);

// console.log(trueArr);
// console.log(trueArry);


//filter the true values of an object

const obj = {
    a: "nayan",
    b: undefined,
    C: "md nayan Islamic",
    d: false,
    e: "",
    f: "mango",
    g: 40,
    h: true,
    i: "Thanks All",
    j: NaN
}


const truthyObject = function(obj){
    for(let i in obj){
        if(!obj[i]){
            delete obj[i];
        }
    }

    return obj;
}

console.log(truthyObject(obj))