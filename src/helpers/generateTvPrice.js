import {bestSellingTv} from "../constants/inventory.js";

function generateTvPrice() {

    return `€${bestSellingTv.price},-`;

}

export default generateTvPrice;