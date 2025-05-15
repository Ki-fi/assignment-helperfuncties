import {inventory} from "../constants/inventory.js";
import screenSizesMapped from "./generateScreenSizes.js";


const allTvs = inventory.map((product) => {
    return <>
        <div  className="bestSellingProduct">
        <img src={product.sourceImg} className="imgBestSellingTv" alt="img-tv"/>
        <div>
            <h4>{`${product.brand} ${product.type} - ${product.name}`}</h4>
            <h3>{`€${product.price},-`}</h3>
            <p>{screenSizesMapped(product)}
            </p>
        </div>
        </div>
        </>
})

export default allTvs;

