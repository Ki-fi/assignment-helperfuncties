import {inventory} from "../constants/inventory.js";


const allBrands = inventory.map((product) => {
    return <ul key={product.brand}>
        <li>{product.brand}</li>
    </ul>
});

export { allBrands };