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
export {Square, Rectangle, Circle, Cylindrical};
