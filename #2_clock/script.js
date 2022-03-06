const second = document.querySelector('.second-hand');
function move(){
    const min = document.querySelector(`min-hand`);
    
    const now = new Date();
    
    const seconds = now.getSeconds();            
    const secondDegree = (seconds/60) * 360 + 90;
    second.style.transform = `rotate(${secondDegree}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    min.style.transform = `rotate(${minsDegrees}deg)`;

    console.log("secondDegree: " + seconds);

}
setInterval(move, 1000);
move();