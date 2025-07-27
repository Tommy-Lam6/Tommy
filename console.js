let shape1={width:10,height:20,}
let shape2={width:30,height:40,}

// console.log('shape width:',shape1.width)
// console.log('shape height:',shape1.height)


// console.log('shape width:',shape2.width)
// console.log('shape height:',shape2.height)

let area1=checkshape(shape1)
let area2=checkshape(shape2)

function checkshape(shape) {
    // console.log('shape width:',shape.width)
    return Math.floor(shape.width*shape.height)
}

// console.log('area of shape1:', calcArea(shape1))
// console.log('area of shape2:', calcArea(shape2))
// area1='console.log('area of shape1:', calcArea(shape1))'
// area2='console.log('area of shape2:', calcArea(shape2))'

report('shape1', shape1)
report('shape2', shape2)
function report(name, shape) {
    console.log(`The area of ${name} is:`, checkshape(shape))
    console.log(`The width of ${name} is:`, shape.width)
    console.log(`The height of ${name} is:`, shape.height)
}