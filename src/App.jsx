import './App.css';
import './helpers/calculateSoldTvs.js';
import calculateSoldTvs from "./helpers/calculateSoldTvs.js";
import calculatePurchasedTvs from "./helpers/calculatePurchasedTvs.js";
import calculateToBeSoldTvs from "./helpers/calculateToBeSoldTvs.js";

function App() {
  return (
      <>
        <h1>Tech It Easy dashboard</h1>
        <h3>Verkoopoverzicht</h3>
        <section className="salesOverview">
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
        </section>
      </>
  )
}

export default App
