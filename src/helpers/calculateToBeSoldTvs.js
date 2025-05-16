import calculatePurchasedTvs from "./calculatePurchasedTvs.js";
import calculateSoldTvs from "./calculateSoldTvs.js";

function calculateToBeSoldTvs() {

    let totalToBeSoldTvs = calculatePurchasedTvs() - calculateSoldTvs();

    console.log(totalToBeSoldTvs);
    return totalToBeSoldTvs;
}

export default calculateToBeSoldTvs;