import './App.css';
import './helpers/calculateSoldTvs.js';
import calculateSoldTvs from "./helpers/calculateSoldTvs.js";

function App() {
  return (
      <>
        <h1>Tech It Easy dashboard</h1>
        <h3>Verkoopoverzicht</h3>
        <section className="salesOverview">
          <article className="soldProducts">
            <h5>Aantal verkochte producten</h5>
            <div>{calculateSoldTvs()}</div>
          </article>
          <article className="soldProducts">
            <h5>Aantal verkochte producten</h5>
            <div>{calculateSoldTvs()}</div>
          </article>
          <article className="soldProducts">
            <h5>Aantal verkochte producten</h5>
            <div>{calculateSoldTvs()}</div>
          </article>
        </section>
      </>
  )
}

export default App
