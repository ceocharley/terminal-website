const close = document.querySelector('.close');
const minimize = document.getElementById('suckmyballs');
const maximize = document.querySelector('.maximize');
const cmd = document.getElementById('cmd')
const home = document.getElementById('binbows')

// This is just a bunch of event listeners for the buttons on the window

close.addEventListener('click', () => {
    cmd.style.display = 'none';
});

minimize.addEventListener('click', () => {
    cmd.style.display = 'none';
});

home.addEventListener('click', () => {
    window.location.href = '/';
});

var max = false;

maximize.addEventListener('click', () => {
    if (max == false) {
        cmd.style.width = '100vw';
        cmd.style.height = '97vh';
        cmd.style.top = '0';
        cmd.style.left = '0';
        cmd.style.borderRadius = '0';
        cmd.style.border = 'none';
        cmd.style.boxShadow = 'none';
        cmd.style.zIndex = '99999';
        cmd.style.overflow = 'hidden';
        cmd.style.margin = '0';
        cmd.style.padding = '0';
        max = true;
    }
    else if (max == true) {
        cmd.style.width = '80vw';
        cmd.style.height = '80vh';
        cmd.style.top = '50%';
        cmd.style.left = '50%';
        cmd.style.borderRadius = '10px';
        cmd.style.border = '1px solid #000';
        cmd.style.boxShadow = '0 0 10px #000';
        cmd.style.zIndex = '99999';
        cmd.style.overflow = 'hidden';
        cmd.style.margin = '0';
        cmd.style.padding = '0';
        cmd.style.margin = '7.8vh auto'
        max = false;
    }
});