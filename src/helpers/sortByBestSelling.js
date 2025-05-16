import {inventory} from "../constants/inventory.js";

inventory.sort((a, b) => b.sold - a.sold);

function sortByBestSelling(){

    console.log(inventory);

}

export default sortByBestSelling;

