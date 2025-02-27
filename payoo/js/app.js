document.getElementById("login-btn")
.addEventListener("click", function(event){
    event.preventDefault();
    const accountNumber = document.getElementById("ac-number").value;
 
    const pinNumber = document.getElementById("pin-number").value;
    const pin = parseInt(pinNumber, 10);
    
    if (accountNumber.length === 11) {
        if ( pin === 1234){

            window.location.href = "./main.html"
        }else {
            console.log("Please enter a valid pin number");
            
        }
        
    }else {
        console.log('invalid');
        
    }

});