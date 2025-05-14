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

const biggerThan65 = inventory.filter((product) => {
    return product.availableSizes.find((size) => size >= 65)
});
// (want array binnen array)

const hasAmbilight = inventory.filter((product) => {
    return product.options.filter((option) => option.name === "ambilight")
})

function resultOefenbestand() {
    // console.log(tvNames);
    // console.log(soldOut);
    // console.log(tvInfo);
    // console.log(tvBrandsAndNames);
    // console.log(biggerThan65);
    // console.log(hasAmbilight);
}

export default resultOefenbestand;

