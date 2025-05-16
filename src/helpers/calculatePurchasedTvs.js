import {inventory} from "../constants/inventory.js";


function calculatePurchasedTvs(){

    let totalPurchasedTvs = 0;

    for (let i = 0; i < inventory.length; i++) {
        totalPurchasedTvs = totalPurchasedTvs + inventory[i].originalStock;
    }
    console.log(totalPurchasedTvs);
    return totalPurchasedTvs;
}

export default calculatePurchasedTvs;