import './App.css';
import './helpers/calculateSoldTvs.js';
import calculateSoldTvs from "./helpers/calculateSoldTvs.js";
import calculatePurchasedTvs from "./helpers/calculatePurchasedTvs.js";
import calculateToBeSoldTvs from "./helpers/calculateToBeSoldTvs.js";
import generateTvName from "./helpers/generateTvName.js";
import generateTvPrice from "./helpers/generateTvPrice.js";
import {bestSellingTv} from "./constants/inventory.js";
import resultOefenbestand from "./constants/oefenbestand.js";
import {allBrands} from "./helpers/listAllBrands.jsx";
import allTvs from "./helpers/listAllTvs.jsx";
import screenSizes from "./helpers/generateScreenSizes.js";

function App() {
    resultOefenbestand();

    function logClickButton1(){
        console.log("Meest verkochte eerst")
    }
    function logClickButton2(){
        console.log("Goedkoopste eerst")
    }
    function logClickButton3(){
        console.log("Meest geschikt voor sport")
    }
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
        <section>
          <h3>Best verkochte tv</h3>
              <article className="bestSellingProduct">
                  <img src={bestSellingTv.sourceImg} className="imgBestSellingTv" alt="img-bestselling-tv"/>
                  <div>
                  <h4>{generateTvName()}</h4>
                  <h3>{generateTvPrice()}</h3>
                  <p>{screenSizes(bestSellingTv)}</p>
                      <p>
                      <img src="src/assets/check.png" className="icon" alt="icon"/>wifi
                      <img src="src/assets/minus.png" className="icon" alt="icon"/>speech
                      <img src="src/assets/check.png" className="icon" alt="icon"/>hdr
                      <img src="src/assets/check.png" className="icon" alt="icon"/>bluetooth
                      <img src="src/assets/minus.png" className="icon" alt="icon"/>ambilight
                      </p>
                  </div>
              </article>
        </section>
        <section>
            <h3>Alle tv's</h3>
            <div className="buttonRow">
            <button type="button" onClick={logClickButton1}>Meest verkochte eerst</button>
            <button type="button" onClick={logClickButton2}>Goedkoopste eerst</button>
            <button type="button" onClick={logClickButton3}>Meest geschikt voor sport</button>
            </div>
            {/*<div>{allBrands}</div>*/}
            <article className="listAllTvs">{allTvs}</article>
        </section>
      </>
  )
}

export default App
