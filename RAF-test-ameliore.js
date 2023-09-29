const brique = document.getElementById("brique");
let start, previousTimeStamp, toucheClavier;
let left = 0;
let right = 0;

function step(timeStamp) {

document.addEventListener(
    "keydown",
    (event) => {
        toucheClavier = event.key;
    });

    switch (toucheClavier){
        case 'ArrowRight' :
            right = right + 50;
            toucheClavier = 0;
            break;

        case 'ArrowLeft' :
            right = right - 50;
            toucheClavier = 0;
            break;
        }

  if (start === undefined) {
    start = timeStamp;
  }
  const elapsed = timeStamp - start;

  const count = 0.1 * elapsed;

  if (previousTimeStamp !== timeStamp) {
    brique.style.top = `${count}px`;
    brique.style.left = `${right}px`;  
  }

  console.log(count + ' ' + window.innerHeight)
  if (count < (window.innerHeight-51)) {
    previousTimeStamp = timeStamp;
      window.requestAnimationFrame(step);
    }
  }

window.requestAnimationFrame(step);
