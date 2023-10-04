const typing1 = document.getElementById('ggg');

// This is the initial typing effect that displays on page load
const typewriter1 = new Typewriter(typing1, {
    loop: false,
    autostart: true,
    delay: 75,
    cursor: '',
});

// Every five seconds it'll set the user's cursor to the input box just in case they click away on accident and can't find it 😅
const input = document.getElementById('input');
setInterval(() => {
    input.focus();
}, 5000);

// Checks for the keydown event on the input box and will respond prompty
input.addEventListener('keydown', (e) => {
    const newline = document.createElement('br');

    // THERE IS ABSOLUTELY A BETTER WAY TO DO THIS BUT I DONT KNOW HOW TO DO IT SO THIS IS WHAT I DID
    const newline2 = document.createElement('br')
    const newline3 = document.createElement('br')
    const newline4 = document.createElement('br')
    
    // const value = document.createTextNode(input.value); unused
    const unknowncmd = document.createTextNode('\'' + input.value + '\' is not recognized as an internal or external command, operable program or batch file');
    const help = document.createTextNode("HELP      Displays help for commands"); // Janky way of doing this but it works
    const help2 = document.createTextNode("ABOUTME   Displays information about me");
    const help3 = document.createTextNode("CLS       Clears the screen");
    if (e.key === 'Enter') { // Checks for every time that the user presses enter and will respond accordingly
        if (input.value == 'ip') { // 🤫
            // i didnt write this code i stole it from stackoverflow.. i dont use jquery. i dont know how to use jquery. i dont want to learn jquery. i dont like jquery. 😨
            $.getJSON("https://api.ipify.org?format=json", function(data) {
         
            $("#faketext").text(data.ip);
            $("#faketext").append(newline);
            })
        }
        if (input.value == 'aboutme') {

            // get the time since feburary 5th 2009
            let age = Date.now() - 1233803640000;
            age = Math.floor(age / 31557600000);

            const tw2 = new Typewriter(faketext, {
                loop: false,
                autostart: true,
                delay: 75,
                cursor: '',
            });

                    tw2
            .pasteString('<br>')
            .pasteString('Hi there, I\'m Charley!')
            .pasteString('<br>')
            .pasteString('<br>')
            .pasteString('I\'m a ' + age + ' year old developer, project manager and student from California')
            .pasteString('<br>')
            .pasteString('I\'m currently working on <a target="_blank" href="https://aurorarp.net">Aurora Roleplay</a>. A new definition of serious FiveM roleplay.')
            .pasteString('<br>')
            .pasteString('As well as the <a target="_blank" href="https://voyagemc.com">Voyage Network</a>. A Minecraft network with a variety of gamemodes.')
            .pasteString('<br>')
            .pasteString('I am also an experienced web developer, and I\'m learning Lua and Java')
            .pasteString('<br>')
            .pasteString('Fun fact! You can find me on social media! Such as <a target="_blank" href="https://twitter.com/Charley59549045">X</a>, <a target="_blank" href="https://github.com/ceocharley">GitHub</a>, and <a target="_blank" href="https://www.tiktok.com/@ceocharley">TikTok</a>!')
            .pasteString('<br>')
            .pasteString('<br>')
            .pasteString('Did you know? This website is open-source on <a target="_blank" href="https://github.com/ceocharley/terminal-website">GitHub</a>!')
            .start();
        }
        if (input.value == 'help') {
            document.getElementById("faketext").append(newline, help, newline2, help2, newline3, help3, newline4);
        }
        if (input.value === 'clear' || input.value === 'cls') {
            console.log('Clearing elements');
            if (input.value === 'clear' || input.value === 'cls') {
                // Check if the element exists before trying to access its properties
                const faketextElement = document.getElementById("faketext");
                const gggElement = document.getElementById("ggg");
                const fuckuElement = document.getElementById("fucku");
                const asdoasdElement = document.getElementById("asdoasd");
            
                if (faketextElement) {
                    faketextElement.textContent = '';
                }
            
                if (gggElement) {
                    gggElement.textContent = '';
                }
            
                if (fuckuElement) {
                    fuckuElement.textContent = '';
                }
            
                if (asdoasdElement) {
                    asdoasdElement.textContent = '';
                }            
            }            
        }        
        // Checks if the input equals any applicable input and then will set the input to '' so that they cant spam
        if (input.value == '' || input.value == 'ip' || input.value == 'aboutme' || input.value == 'help' || input.value == 'clear' || input.value == 'cls') {
            input.value = '';
        } else {
            input.value = '';
            document.getElementById("faketext").appendChild(newline);
            document.getElementById("faketext").appendChild(unknowncmd);
        }
        input.value = '';
    }
});

// this is the original message it pastes, change it if you want it to show different stuff.

// Change this variable if you want it to get a different age
let age = Date.now() - 1233803640000;
age = Math.floor(age / 31557600000);

typewriter1
    .typeString('cd Users\\Charley\\Desktop')
    .pauseFor(1)
    .typeString('<br>')
    .pauseFor(150)
    .pasteString('C:\\Users\\Charley\\Desktop>')
    .pauseFor(250)
    .typeString('aboutme')
    .pauseFor(250)
    .typeString('<br>')
    .pasteString('Hi there, I\'m Charley!')
    .pasteString('<br>')
    .pasteString('<br>')
    .pasteString('I\'m a '+ age + ' year old developer, project manager and student from California')
    .pasteString('<br>')
    .pasteString('I\'m currently working on <a target="_blank" href="https://aurorarp.net">Aurora Roleplay</a>. A new definition of serious FiveM roleplay.')
    .pasteString('<br>')
    .pasteString('As well as the <a target="_blank" href="https://voyagemc.com">Voyage Network</a>. A Minecraft network with a variety of gamemodes.')
    .pasteString('<br>')
    .pasteString('I am also an experienced web developer, and I\'m learning Lua and Java')
    .pasteString('<br>')
    .pasteString('Fun fact! You can find me on social media! Such as <a target="_blank" href="https://twitter.com/Charley59549045">X</a>, <a target="_blank" href="https://github.com/ceocharley">GitHub</a>, and <a target="_blank" href="https://www.tiktok.com/@ceocharley">TikTok</a>!')
    .pasteString('<br>')
    .pasteString('<br>')
    .pasteString('Did you know? This website is open-source on <a target="_blank" href="https://github.com/ceocharley/terminal-website">GitHub</a>!')
    // .typeString('<br>')
    // .pasteString('C:\\Users\\Malware\\Desktop>')
    .start();

