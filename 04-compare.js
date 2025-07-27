let shape1={width:10,height:20,}
let shape2={width:30,height:40,}

let biggershape = maxshape(shape1, shape2)

function maxshape(shape1, shape2) {
    const area1 = shape1.width * shape1.height;
    const area2 = shape2.width * shape2.height;
    return area1 > area2 ? shape1 : shape2;
}
  
console.log(`The bigger shape is:, biggershape`);
console.log(`The area of the bigger shape is:`, biggershape.width * biggershape.height);

report('shape1', shape1)
report('shape2', shape2)
function report(name, shape){
    console.log(`The area of ${name} is:`, shape.width * shape.height)
    console.log(`The width of ${name} is:`, shape.width)
        console.log(`The height of ${name} is:`, shape.height)
        console.log(`The perimeter of ${name} is:`, 2 * (shape.width + shape.height))
        if (shape === biggershape) {
            console.log(`This is the bigger shape:`, name);
        }
    }