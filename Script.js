// DOM Elements
const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
focus = document.getElementById('focus');

// Show time 
function showTime(){
    let today = new Date(), // gives the current date and time
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    // SET AM OR PM
    const amPm = hour >=12 ? 'PM' : 'AM'; // hours method counts 00 - 23

    // 12hr Format 
    hour = hour % 12 || 12;

    // OUTPUT TIME
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000); //1000 miliseconds = 1 sec
}

// ADD ZEROS
function addZero(n){
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background Image
function setBgImage(){
    let today = new Date(),
    hours = today.getHours();

    if(hours < 12){
        // Morning
        document.body.style.backgroundImage = "url('../Dynamic_Landing_Page/img/morning.jpeg')"
        greeting.textContent = 'God Morgen';
    } else if(hours < 18) {
        afternoon
        document.body.style.backgroundImage = "url('../Dynamic_Landing_Page/img/afternoon.jpeg')";
        greeting.textContent = 'God Dag';
    } else {
        // Evening
        document.body.style.backgroundImage = "url('../Dynamic_Landing_Page/img/night.jpeg')";
        greeting.textContent = 'God Natt';
    }
}

// GET NAME
function getName(){
    if(localStorage.getItem('name') === null){
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// SET NAME 
function setName(e) {
    if(e.type === 'keypress'){
        // Make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setIten('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText)
    }
}

// GET FOCUS
function getFocus(){
    if(localStorage.getItem('focus') === null){
       focus.textContent = '[Enter focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// SET FOCUS
function setFocus(e) {
    if(e.type === 'keypress'){
        // Make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setIten('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    } 
}



name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);


// RUN
showTime();
setBgImage();
getName();
getFocus();
setName();
setFocus();