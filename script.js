document.addEventListener('mousemove', event => {
    let maxLenght = Math.sqrt(Math.pow(window.innerHeight, 2) + Math.pow(window.innerWidth, 2)) / 2;
    let vector = {
        x: event.clientX - window.innerWidth / 2,
        y: event.clientY - window.innerHeight / 2
    };
    vector.length = Math.sqrt(Math.pow(vector.x, 2) + Math.pow(vector.y, 2));

    let alphaX = Math.abs(vector.x / window.innerWidth / 2);
    let alphaY = Math.abs(vector.y / window.innerHeight / 2);

    let alpha = vector.length / maxLenght;

    vector.x = Math.sign(vector.x);
    vector.y = Math.sign(vector.y);

    document.querySelector('.main-sheet')
        .style.transform =
            'perspective(1000px)' +
                `rotate3d(${vector.y * -alphaY}, ${vector.x * alphaX}, 0, ${2.5 * alpha}deg)`;
});
