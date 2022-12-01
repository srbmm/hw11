// ------------------ js
class Shape{
    #shapeName = '';
    set name(value) {
        if (value.length > 2){
            this.#shapeName = value
        } else console.log("shapeName most be at least have 3 characters");
    }
    get name() { return this.#shapeName}
    area() {return 0}
    perimeter () {return 0}
}
// ------------------ 2
class Polygon extends Shape{
    #height_shape = 0;
    #width_shape = 0;
    constructor(height, width) {
        super();
        this.#height_shape = height;
        this.#width_shape = width;
        if (height === width) this.name = "Square";
        else this.name = "Rectangle"
    }
    set height(val) {
        if (val > 0) this.#height_shape = val;
    }
    set width(val) {
        if (val > 0) this.#width_shape = val;
    }
    get height() {
        return this.#height_shape;
    }
    get width() {
        return this.#width_shape;
    }
    area() {
        return this.#height_shape * this.#width_shape;
    }
    perimeter() {
        console.log(this.#height_shape)
        console.log(this.#width_shape)
        return (this.#height_shape + this.#width_shape) * 2;
    }
}
// --------------- 3
class NonPolygon extends Shape {
    #radius_shape = 0;
    constructor(radius) {
        super();
        this.#radius_shape = radius;
    }
    set radius(value) {
        if (value > 0){
            this.#radius_shape = value
        }
    }
    get radius() { return this.#radius_shape}
    area() { return (this.#radius_shape ** 2) * Math.PI}
    perimeter() {return 2 * Math.PI * this.#radius_shape;}
}
// -------------- 4
class Square extends Polygon{
    constructor(width) {
        super(width, width);
    }
    set width(value) {
    if (value > 0){
        super.width = value;
        this.height = value;
    }
    }
}

class Rectangle extends Polygon{
    constructor(width, height) {
        super(height, width);
    }
}
// ------------- 5
class Circle extends NonPolygon {
    constructor(radius) {
        super(radius);
    }
}
// ------------- 6
class Cylindrical extends Circle{
    #height_shape = 0;
    constructor(radius, height) {
        super(radius);
        this.#height_shape = height;
    }
    set height(value) {if(value > 0){
        this.#height_shape = value;
    }}
    get height() {return this.#height_shape}
    area() {return (Math.PI * (this.radius ** 2)) * this.#height_shape}
    perimeter() {return 2 * Math.PI * (this.radius) * (this.radius + this.#height_shape)}
}
const shapeSelc = document.getElementById('shapes'),
    radiusInp = document.getElementById('radius'),
    widthInp = document.getElementById('width'),
    heightInp = document.getElementById('height'),
    preP = document.getElementById('perres'),
    areaP = document.getElementById('areares');
let myShape = new Rectangle(0, 0);
shapeSelc.addEventListener('change', function (e) {
    heightInp.value = '';
    widthInp.value = '';
    radiusInp.value = '';
    if(e.target.value === 'rectangle'){
        heightInp.disabled = false;
        widthInp.disabled = false;
        radiusInp.disabled = true;
        myShape = new Rectangle(0,0);
    }else if(e.target.value === 'square'){
        heightInp.disabled = true;
        widthInp.disabled = false;
        radiusInp.disabled = true;
        myShape = new Square(0);
    }else if(e.target.value === 'circle'){
        heightInp.disabled = true;
        widthInp.disabled = true;
        radiusInp.disabled = false;
        myShape = new Circle(0);
    }else if(e.target.value === 'cylindrical'){
        heightInp.disabled = false;
        widthInp.disabled = true;
        radiusInp.disabled = false;
        myShape = new Cylindrical(0,0);
    }
})
function update() {
    if (!widthInp.disabled) myShape.width = +widthInp.value;
    if (!heightInp.disabled) myShape.height = +heightInp.value;
    if (!radiusInp.disabled) myShape.radius = +radiusInp.value;
    preP.innerText = myShape.perimeter();
    areaP.innerText = myShape.area();
}
widthInp.addEventListener("keyup", update);
heightInp.addEventListener("keyup", update);
radiusInp.addEventListener("keyup", update);