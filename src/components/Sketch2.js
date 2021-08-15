import Sketch from 'react-p5';
const Sketch2 = () => {

    let stage = 0;
    let nextBtnImg, dietImg, skipBtnImg, cusineImg;
    let btnWidth = 120;
    let btnHeight = 40;
    let btnX = 40;
    let btnY = 450;
    
    let setup = (p5, canvasParentRef) => {
        let xyz = p5.createCanvas(720, 512).parent(canvasParentRef);
        xyz.mousePressed((event) => {
            if (p5.mouseX >= btnX && p5.mouseX <= btnX + btnWidth) {
                if (p5.mouseY >= btnY && p5.mouseY <= btnY + btnHeight) {
                    stage = 1;
                }
            }
        })
        p5.colorMode(p5.RGB, 255);
        nextBtnImg = p5.loadImage('https://cdn.glitch.com/7aa80956-89ee-4d18-bf59-1c3fe25543b1%2FnextStepBtn.png?v=1629014243670');
        dietImg = p5.loadImage('https://cdn.glitch.com/7aa80956-89ee-4d18-bf59-1c3fe25543b1%2Fdiet-page-deselected.jpg?v=1629015395799');
        skipBtnImg = p5.loadImage('https://cdn.glitch.com/7aa80956-89ee-4d18-bf59-1c3fe25543b1%2FskipBtn.png?v=1629014934851');
        cusineImg = p5.loadImage('https://cdn.glitch.com/7aa80956-89ee-4d18-bf59-1c3fe25543b1%2Fcuisine-page-deselected.jpg?v=1629014969046');
    };
    let draw = (p5) => {
        p5.background(200);
        if (stage == 0) {
            p5.image(dietImg, 0, 0, 720, 512)
        } else if (stage == 1) {
            p5.image(cusineImg, 0, 0, 720, 512);
        }
        p5.image(nextBtnImg, btnX, btnY, btnWidth, btnHeight);
    };

    return (
        <div>
            <Sketch setup={setup} draw={draw}/>
        </div>
    )
}

export default Sketch2

