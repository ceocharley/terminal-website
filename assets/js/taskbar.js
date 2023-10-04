const time = document.getElementById('time');

// format
// 9:06 PM
// 07/06/2023

// This is mainly just a clock
// It occasionally is used for the buttons on the taskbar

time.innerHTML = new Date().toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
}) + '<span> <br> </span>' + new Date().toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
});

const windows = document.getElementById('windows');
const terminal = document.getElementById('terminal');
// If you want to change the buttons, change these.
const aurora = document.getElementById('aurora');
const voyage = document.getElementById('voyage');
const terminalWindow = document.getElementById('cmd');

terminal.addEventListener('click', () => {
    if (terminalWindow.style.display == 'none') {
        terminalWindow.style.display = 'block';
        terminal.classList.add('pullUp');
        setInterval(() => {
            terminal.classList.remove('pullUp');
        }, 100);
    } else {
        terminalWindow.style.display = 'none';
        terminal.classList.add('pushDown');
        setInterval(() => {
            terminal.classList.remove('pushDown');
        }, 100);
    }

});

aurora.addEventListener('click', () => {
    window.open('https://aurorarp.net', '_blank');
});

voyage.addEventListener('click', () => {
    window.open('https://voyagemc.com', '_blank');
});

windows.addEventListener('click', () => {
    // run the pushIn CSS animation
    windows.classList.add('pushIn');
    // remove the animation after it's done
    setTimeout(() => {
        windows.classList.remove('pushIn');
    }, 250);
});
