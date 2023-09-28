const brique = document.getElementById("brique");
let start, previousTimeStamp, toucheClavier;
let sens = "translateY(";

function step(timeStamp) {

  if (start === undefined) {
    start = timeStamp;
  }
  const elapsed = timeStamp - start;

  if (previousTimeStamp !== timeStamp) {
    const count = 0.1 * elapsed;
    brique.style.top = `${count}px`;
    
  }

  if (elapsed >= 0) {
    previousTimeStamp = timeStamp;
      window.requestAnimationFrame(step);
    }
  }

window.requestAnimationFrame(step);