// open to extend , close to modification

// bad practice
const color = Object.freeze({
  green: "green",
  blue: "blue",
  red: "red",
});

const size = Object.freeze({
  small: "small",
  medium: "medium",
  big: "big",
});

class Product {
  constructor(name, color, size) {
    this.name = name;
    this.color = color;
    this.size = size;
  }
}

const apple = new Product("apple", color.green, size.small);
const house = new Product("house", color.blue, size.big);
const motorCycle = new Product("motor cycle", color.red, size.medium);

const products = [apple, house, motorCycle];

class filter {
  filterByColor(products, color) {
    return products.filter((p) => p.color === color);
  }

  // state space explosion
}

// good practice
// use specification pattern or another way
const betterFilter = (items, specification) => {
  return items.filter((item) => specification(item));
};

// combination
const andSpecification = (specifications, item) => {
  return specifications.every((spec) => spec(item));
};

const isSatisfiedColor = (color, item) => item.color === color;

const isSatisfiedSize = (size, item) => item.size === size;

const redAndMediumProducts = betterFilter(
  products,
  andSpecification.bind(null, [
    isSatisfiedColor.bind(null, color.red),
    isSatisfiedSize.bind(null, size.medium),
  ])
);

console.log(
  "all products : ",
  products,
  "red and medium products : ",
  redAndMediumProducts
);
