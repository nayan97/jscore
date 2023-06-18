let amount=prompt('amount');
let currency =prompt('currency');

let rate = 0;


if (currency == 'USD') {
    rate = 106;
} else if(currency == 'CAD'){
    rate = 70;
}else if(currency == 'AUS'){
    rate = 22;
}
else if(currency == 'EURO'){
    rate = 120;
}


let bdt = parseInt(amount) * rate;

console.log(`
${amount} ${currency} = ${bdt} BDT
`);