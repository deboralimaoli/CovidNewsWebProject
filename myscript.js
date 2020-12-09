var app = document.getElementById('staysafe');

var typewriter = new Typewriter(staysafe, {
    loop: true
});

typewriter.typeString('Wear a Mask')
    .pauseFor(3000)
    .deleteAll()
    .typeString('Stay Safe')
    .pauseFor(4000)
    .deleteAll()
    .typeString('Protect People Life')
    .pauseFor(2500)
    .start();