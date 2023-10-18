const indicator = document.querySelector('.nav.indicator');
const items = document.querySelectorAll('.nav-item');

function handleIndicator(el) {
    items.forEach(item => {
        item.classList.remove('is-active');
        item.removeAttribute('style');

    });

    indicator.style.width = '${el.offsetWidth}px';
    indicator.style.left = '${el.offsetLeft}px';
    indicator.style.backgroundColor = el.getAttribute('active-color');

    el.classList.add('is-active');
    el.style.color = el.getAttribute('active-color');
}

items.forEach((item, index) => {
    item.addEventListener('click', (e) => { handleIndicator(e.target)});
    item.classList.contains('is-active') && handleIndicator(item);
});


//Get Data
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const lessage = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

//Validate Data
function validateForm(){

    clearMessages();

    if(nameInput.value.length < 1){
        errorNodes[0].innerText = "Name Cannot Be Blank";
        nameInput.classList.add("error-border");
    }

    if(!emailIsValid(email.value)){
        errorNodes[1].innerText = "Invalid email address";
        email.Input.classList.add("error-border");
    }
}
//Clear error/ success messages
function clearMessages(){
    for(let i=0; i < errorNodes.length; i++){
        errorNodes[i].innerText = "";
    }
    nameInput.classList.remove("error-border");
}
