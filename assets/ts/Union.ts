// we can use multiple type in one variable using union

type ID = string | number;

const id: string | number = "g-102";
const newId: ID = 33;

//

type Rectangle = {
  height: number;
  width: number;
};

type Circle = {
  radious: number;
};

type Square = {
  length: number;
};

function calculateArea(shape: Rectangle | Circle) {
  if ("radious" in shape) {
    return Math.PI * shape.radious * shape.radious;
  }
  return shape.height * shape.width;
}

function universalCalculator(shape: Rectangle | Circle | Square) {
  if ("radious" in shape) {
    return Math.PI * shape.radious * shape.radious;
  } else if ("length" in shape) {
    return shape.length * shape.length;
  }
  return shape.height * shape.width;
}
