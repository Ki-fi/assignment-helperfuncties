
import {inventory} from "../constants/inventory.js";


function calculateSoldTvs(){

    let totalSoldTvs = 0;

    for (let i = 0; i < inventory.length; i++) {
        totalSoldTvs = totalSoldTvs + inventory[i].sold;
    }
    console.log(totalSoldTvs);
    return totalSoldTvs;
}

export default calculateSoldTvs;