import {inventory} from "../constants/inventory.js";

inventory.sort((a, b) => b.refreshRate - a.refreshRate);

function sortByRefreshrate(){

    console.log(inventory);

}

export default sortByRefreshrate;

