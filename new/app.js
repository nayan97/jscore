const studentForm = document.getElementById('s_form');

studentForm.onsubmit = (e) =>{
    e.preventDefault();   

const formData = new FormData(e.target);
const data =Object.fromEntries(formData.entries());
console.log(data);
   
}