let myImage = document.querySelector('img');

myImage.onclick = function imageClick() {
    let src = myImage.getAttribute('src');
    if(src === 'images/cloud.jpg') {
        myImage.setAttribute('src', 'images/cloud2.jpg');
    } else {
        myImage.setAttribute('src', 'images/cloud.jpg');
    }
};

let myHeading = document.querySelector('h1');
let changeUserBtn = document.querySelector('button');

function setUserName(name) {
    name = name || prompt('Please enter your name.');
    if (name) {
        localStorage.setItem('userName', name);
        myHeading.textContent = `Welcome ${name}, to Stéphane's Home in the Clouds.`;    
    } else {
        myHeading.textContent = 'Welcome to Stéphane\'s Home In The Clouds.';
    }
}

// initialization
setUserName(localStorage.getItem('userName'));
changeUserBtn.onclick = function() { setUserName(); };