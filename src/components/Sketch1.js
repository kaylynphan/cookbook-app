import Sketch from 'react-p5';
const Sketch1 = () => {
    let status = 0;
    let min, sec, frame, timerIsShown;
    let recipeID = 0;

    let setup = (p5, canvasParentRef) => {
        let xyz = p5.createCanvas(720, 512).parent(canvasParentRef);
        p5.frameRate(20);
        p5.colorMode(p5.RGB, 255);
        min = 2;
        sec = 0;
        frame = 20;
        timerIsShown = false;
    };
    let draw = (p5) => {
        p5.background(200);
        //timer.display()
        if (timerIsShown) {
        if (min < 0) {
            p5.text("0 Minutes", 20, 20);
            p5.text("0 Seconds", 20, 40);
        } else {
            p5.text(min + " Minutes", 20, 20);
            p5.text(sec + " Seconds", 20, 40);
        }
        }
        //timer.countDown()
        frame--;
        if (frame < 0) {
        sec--;
        frame = 20;
        }
        if (sec < 0) {
        min--;
        sec = 59;
        }
    };
    return (
        <div>
            <Sketch setup={setup} draw={draw}/>
        </div>
    )
}

export default Sketch1

