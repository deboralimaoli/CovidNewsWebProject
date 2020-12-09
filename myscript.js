var app = document.getElementById('staysafe');

var typewriter = new Typewriter(staysafe, {
    loop: true
});

typewriter.typeString('COVID-19 Latest News')
    .pauseFor(5000)
    .deleteAll()
    .typeString('Wear a mask')
    .pauseFor(4000)
    .deleteAll()
    .typeString('Stay Safe')
    .pauseFor(2500)
    .start();