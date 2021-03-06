// # Refactoring
// Usando closure e function factory, creare 3 funzioni:

// ```javascript
// createSmallCircle()
// createMediumCircle()
// createBigCircle()
// ```

// Una function factory che ritorna delle funzioni
// + Ognuna dalle funzioni utilizzata ellipse() per creare cerchi con caratteristiche diverse :
// ```javascript
// {
//     x: Number,
//     y: Number,
//     radius: Number 
// }

// const createSmallCircle = functionFactory(.....);
// const createMediumCircle = functionFactory(.....);
// const createBigCircle = functionFactory(.....);
// ```

function setup() {
    createCanvas(800, 600);
    background(0);

    const size = 30;

    //my clousure
    var functionFactory = function (x, y, radius){
        var newEllipse = function(){
            ellipse(x, y, radius, radius);
        }
        return newEllipse();
    }

    const createSmallCircle = functionFactory(35, 25, 15, 10);
    const createMediumCircle = functionFactory(90, 70, 40, 50);
    const createBigCircle = functionFactory(200, 250, 90, 100);
}
