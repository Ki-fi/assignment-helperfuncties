import {inventory} from "../constants/inventory.js";

// function TvName() {
//     return `${inventory.brand} ${inventory.type} - ${inventory.name}`;
// }

// function TvPrice() {
//     return `€${inventory.price},-`;
// }
//
// function ScreenSizes() {
//     let screenSize = ""
//     for (let i = 0; i < inventory.availableSizes.length; i++) {
//         const screenSizeInInch = inventory.availableSizes[i];
//         const screenSizeInCm = screenSizeInInch * 2.45;
//         screenSize += `${screenSizeInInch} inches (${screenSizeInCm.toFixed(0)} cm)`;
//
//         if (i < inventory.availableSizes.length - 1){
//             screenSize += " | ";
//         }
//     }
//     return screenSize;
// }

// const screenSizes = inventory.map((product) => {
//     const screenSizeInCm = product.availableSizes.map((inches) => {return inches * 2.45});
//     return `${product.availableSizes} inches (${screenSizeInCm.toFixed} cm)`
// })

const allTvs = inventory.map((product) => {
    return <>
        <div  className="bestSellingProduct">
        <img src={product.sourceImg} className="imgBestSellingTv" alt="img-tv"/>
        <div>
            <h4>{`${product.brand} ${product.type} - ${product.name}`}</h4>
            <h3>{`€${product.price},-`}</h3>
            <p>{`${product.availableSizes} inches (${product.availableSizes * 2.45.toFixed} cm)`}</p>
        </div>
        </div>
        </>
})

export default allTvs;

