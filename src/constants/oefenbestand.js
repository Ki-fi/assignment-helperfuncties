import {inventory} from "./inventory.js";

const tvNames = inventory.map(
    (product) => {return product.name}
);

const soldOut = inventory.filter(
    (product) => {return product.originalStock === product.sold}
);

const tvInfo = inventory.find(
    (product) => {return product.type === "NH3216SMART"}
);

const tvBrandsAndNames = inventory.map((product) => {
    const suitable = product.refreshRate >= 100;
    return `name: ${product.brand} ${product.name}, suitable: ${suitable}`}
);

function resultOefenbestand() {
    console.log(tvNames);
    console.log(soldOut);
    console.log(tvInfo);
    console.log(tvBrandsAndNames)
}

export default resultOefenbestand;

