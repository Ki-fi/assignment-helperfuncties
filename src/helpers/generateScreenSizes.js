import {bestSellingTv} from "../constants/inventory.js";


// Gemaakt voor deel 1 mbv for-loop

function screenSizesForlooped() {

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

// Gemaakt voor deel 2 mbv .map methode

function screenSizesMapped(product){
    const screenSize = product.availableSizes.map(size => {
        return `${size} inches (${(size * 2.45).toFixed(0)} cm)`
    });

    if (product.availableSizes.length - 1) {
        return screenSize.join(' | ');
    }

    return screenSize;
}

export default screenSizesMapped;