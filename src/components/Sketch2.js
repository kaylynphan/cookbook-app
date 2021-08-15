import Sketch from 'react-p5';
const Sketch2 = () => {

    let stage = 0;
    let nextBtnImg, dietImg, skipBtnImg, cusineImg, cusineSelectedImg;
    let btnWidth = 150;
    let btnHeight = 50;
    let btnX = 90;
    let btnY = 550;
    
    let setup = (p5, canvasParentRef) => {
        let xyz = p5.createCanvas(900, 640).parent(canvasParentRef);
        xyz.mousePressed((event) => {
            console.log("X: " + p5.mouseX + " Y: " + p5.mouseY);
            //American cusine field
            if (p5.mouseX >= 550 && p5.mouseX <= 667) {
                if (p5.mouseY >= 166 && p5.mouseY <= 317) {
                    if (stage = 2) {
                        stage = 3;
                    }
                }
            }
            if (p5.mouseX >= btnX && p5.mouseX <= btnX + btnWidth) {
                if (p5.mouseY >= btnY && p5.mouseY <= btnY + btnHeight) {
                    stage = 2;
                }
            }
        })
        p5.colorMode(p5.RGB, 255);
        nextBtnImg = p5.loadImage('https://cdn.glitch.com/7aa80956-89ee-4d18-bf59-1c3fe25543b1%2FnextStepBtn.png?v=1629014243670');
        dietImg = p5.loadImage('https://cdn.glitch.com/7aa80956-89ee-4d18-bf59-1c3fe25543b1%2Fdiet-page-deselected.jpg?v=1629015395799');
        skipBtnImg = p5.loadImage('https://cdn.glitch.com/7aa80956-89ee-4d18-bf59-1c3fe25543b1%2FskipBtn.png?v=1629014934851');
        cusineImg = p5.loadImage('https://cdn.glitch.com/7aa80956-89ee-4d18-bf59-1c3fe25543b1%2Fcuisine-page-deselected.jpg?v=1629014969046');
        cusineSelectedImg = p5.loadImage("https://cdn.glitch.com/7aa80956-89ee-4d18-bf59-1c3fe25543b1%2Fcuisine-page-selected.jpg?v=1629029031474");
    };
    let draw = (p5) => {
        p5.background(200);
    
        if (stage == 0) {
            p5.image(dietImg, 0, 0, 900, 640);
        } else if (stage == 2) {
            p5.image(cusineImg, 0, 0, 900, 640);
        } else if (stage == 3) {
            p5.image(cusineSelectedImg, 0, 0, 900, 640);
        }

        if (stage < 2) {
            p5.image(nextBtnImg, btnX, btnY, btnWidth, btnHeight);
        }
    };

    return (
        <div>
            <Sketch setup={setup} draw={draw}/>
        </div>
    )
}

export default Sketch2

