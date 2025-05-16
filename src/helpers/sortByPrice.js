import {inventory} from "../constants/inventory.js";

inventory.sort((a, b) => a.price - b.price);

function sortByPrice(){

    console.log(inventory);

}

export default sortByPrice;

