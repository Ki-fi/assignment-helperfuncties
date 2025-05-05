import './App.css';
import './helpers/calculateSoldTvs.js';
import calculateSoldTvs from "./helpers/calculateSoldTvs.js";
import calculatePurchasedTvs from "./helpers/calculatePurchasedTvs.js";
import calculateToBeSoldTvs from "./helpers/calculateToBeSoldTvs.js";
import generateTvName from "./helpers/generateTvName.js";
import generateTvPrice from "./helpers/generateTvPrice.js";
import {bestSellingTv} from "./constants/inventory.js";

function App() {
  return (
      <>
        <h1>Tech It Easy dashboard</h1>

        <section>
            <h3>Verkoopoverzicht</h3>
        <div className="salesOverview">
          <article className="soldProducts">
            <h4>Aantal verkochte producten</h4>
            <h3>{calculateSoldTvs()}</h3>
          </article>
          <article className="purchasedProducts">
            <h4>Aantal ingekochte producten</h4>
            <h3>{calculatePurchasedTvs()}</h3>
          </article>
          <article className="toBeSoldProducts">
            <h4>Aantal te verkopen producten</h4>
            <h3>{calculateToBeSoldTvs()}</h3>
          </article>
        </div>
        </section>
          <h3>Best verkochte tv</h3>
              <article className="bestSoldProduct">
                  <img src={bestSellingTv.sourceImg} alt="img-bestselling-tv"/>
                  <div>
                  <h4>{generateTvName()}</h4>
                  <h3>{generateTvPrice()}</h3>
                  <p>

                  </p>
                  </div>
              </article>
      </>
  )
}

export default App
