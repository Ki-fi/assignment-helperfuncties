import {bestSellingTv} from "../constants/inventory.js";

function generateScreenSizes() {

    let screenSize = ""

    for (let i = 0; i < bestSellingTv.availableSizes.length; i++) {
        const screenSizeInInch = bestSellingTv.availableSizes[i];
        const screenSizeInCm = screenSizeInInch * 2.45;
        screenSize += `${screenSizeInInch} inches (${screenSizeInCm.toFixed(0)} cm)`;

        if (i < bestSellingTv.availableSizes.length - 1){
            screenSize += " | ";
        }
    }

    return screenSize;

}

export default generateScreenSizes;