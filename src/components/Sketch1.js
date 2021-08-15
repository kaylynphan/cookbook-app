import Sketch from 'react-p5';

let img1, img2, img3, img4, img5;

const Sketch1 = () => {

    let status = 0;
    let setup = (p5, canvasParentRef) => {
        let xyz = p5.createCanvas(900, 966).parent(canvasParentRef);
        xyz.mousePressed((event) => {
            console.log("X: " + p5.mouseX + " Y: " + p5.mouseY);
            if (p5.mouseX >= 500) {
                if (p5.mouseY >= 600) {
                    status++;
                }
            }
        })

        img1 = p5.loadImage("https://cdn.glitch.com/7aa80956-89ee-4d18-bf59-1c3fe25543b1%2Frecipe-overview-ingredients.jpg?v=1629037033640");
        img2 = p5.loadImage("https://cdn.glitch.com/7aa80956-89ee-4d18-bf59-1c3fe25543b1%2Frecipe-overview-instructions.jpg?v=1629037032571");
        img3 = p5.loadImage("https://cdn.glitch.com/7aa80956-89ee-4d18-bf59-1c3fe25543b1%2Frecipe-step-1.jpg?v=1629037037537");
        img4 = p5.loadImage("https://cdn.glitch.com/7aa80956-89ee-4d18-bf59-1c3fe25543b1%2Frecipe-step-2.jpg?v=1629037041095");
        img5 = p5.loadImage("https://cdn.glitch.com/7aa80956-89ee-4d18-bf59-1c3fe25543b1%2Frecipe-step-3.jpg?v=1629037043354");
    };
    let draw = (p5) => {
        p5.background(255);
        if (status == 0) {
            p5.image(img1, 0, 0, 900, 966);
        } else if (status == 1) {
            p5.image(img2, 0, 0, 900, 966);
        } else if (status == 2) {
            p5.image(img3, 0, 0, 900, 966);
        } else if (status == 3) {
            p5.image(img4, 0, 0, 900, 966);
        } else if (status == 4) {
            p5.image(img5, 0, 0, 900, 966);
        }
        
    };
    return (
        <div>
            <Sketch setup={setup} draw={draw}/>
        </div>
    )
}

export default Sketch1

