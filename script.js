let form = document.forms.pingForm;

let inputEmail = form[0];
form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    let inputEmailValue = inputEmail.value;
    console.log(inputEmailValue);
   let inputParent = inputEmail.parentElement;
   console.log(inputParent);

   let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if(inputEmailValue === '') {
        inputParent.classList.add('error');
        setTimeout(removeError,4000);
    } else if (!(inputEmailValue.match(mailformat))) {
        inputParent.classList.add('error');
        setTimeout(removeError,4000);
        
    } else {
        inputParent.classList.remove('error');
    }
}


function removeError() {
   
let inputEmailValue = inputEmail.value;
console.log(inputEmailValue);
let inputParent = inputEmail.parentElement;
console.log(inputParent);
inputParent.classList.remove('error');

}
