// Requirement 3: Arrow function 1
const display1 = ({ title }) => console.log(title);
// Requirement 3: Arrow function 2
const display2 = ({ price }) => console.log(price);

// Requirement 1: Object literal 1
const item1 = { title: "Pen", price: 2 };
// Requirement 1: Object literal 2
const item2 = { title: "Notebook", price: 5 };
// Requirement 1: Object literal 3
const item3 = { title: "Eraser", price: 1 };

// Requirement 2: Destructured object 1
const { title: t1 } = item1;
// Requirement 2: Destructured object 2
const { price: p2 } = item2;
// Requirement 2: Destructured object 3
const { title: t3, price: p3 } = item3;

display1({ title: t1 });
display2({ price: p2 });