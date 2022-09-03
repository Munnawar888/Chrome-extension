fetch('https://icanhazdadjoke.com/slack')
.then(res => res.json())
.then(data => {
    const jokes = data.attachments[0].text;
    const jokesText = document.getElementById('jokes');
    jokesText.innerHTML = jokes;
})