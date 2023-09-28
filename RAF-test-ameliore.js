const ball = document.getElementById("ball");
let start, previousTimeStamp, toucheClavier;
let sens = "translateY(";

function step(timeStamp) {

document.addEventListener(
    "keydown",
    (event) => {
        toucheClavier = event.key;
    });

    switch (toucheClavier){
        case 'ArrowRight' :
            sens = "translateX(";
            break;

        case 'ArrowLeft' :
            sens = "translateX(-";
            break;

        case 'ArrowTop' :
            sens = "translateY(-";
            break;

        case 'ArrowDown' :
            sens = "translateY(";
            break;
        }

  if (start === undefined) {
    start = timeStamp;
  }
  const elapsed = timeStamp - start;

  if (previousTimeStamp !== timeStamp) {
    const count = 0.01 * elapsed;
    ball.style.transform = `${sens}${count}px)`;
    
  }

  if (elapsed >= 0) {
    previousTimeStamp = timeStamp;
      window.requestAnimationFrame(step);
    }
  }

window.requestAnimationFrame(step);