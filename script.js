class shape {
    draw() {
        console.log('drawig a shape')
    }
}
class circle extends shape {
    draw() {
        console.log('drawig a circle')
    }
} 

class square extends shape{
    draw() {
        console.log('drawig a square')
    }
}
let shapes = [new shape(), new circle(), new square()];

shapes.forEach(shape => shape.draw());