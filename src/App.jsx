import { useState } from "react";
import party from "party-js";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);
  const [increase, setIncrease] = useState(1);
  const [upgradeLvl, setUpgradeLvl] = useState(0);
  const clicUpgrades = [25, 100, 250];
  const upgradesCost = [25, 500, 1000];
  const hideUpgrade = upgradeLvl > 2;
  const [goldenOreo, setGoldenOreo] = useState(false);
  const [goldenBackground, setGoldenBackground] = useState(false);
  const [confettis, setConfettis] = useState(false);

  return (
    <div className="game-container">
      <img className="logo-esd" src="https://res.cloudinary.com/antoinebaptista/image/upload/v1747663518/esd-logo_gl6ifi.svg" alt="logo ESD" />
      <div
        className={
          goldenBackground
            ? "game golden-background"
            : "game regular-background"
        }
      >
        <div className="click-zone">
          <div
            className={
              goldenBackground
                ? "counter-container golden-counter"
                : "counter-container green-counter"
            }
          >
            <img
              className="counter-img"
              src="https://res.cloudinary.com/antoinebaptista/image/upload/v1747663518/esd-oreo-small_ezhrbj.png"
              alt="small oreo"
            />
            <p>{count}</p>
          </div>
          {confettis ? (
            <button
              onMouseDown={(event) => party.confetti(event.currentTarget)}
              className={goldenOreo ? "clicker golden-oreo" : "clicker oreo"}
              onClick={() => setCount((count) => count + increase)}
            ></button>
          ) : (
            <button
              className={goldenOreo ? "clicker golden-oreo" : "clicker oreo"}
              onClick={() => setCount((count) => count + increase)}
            ></button>
          )}

          <div
            className={
              goldenBackground ? "increase-info golden" : "increase-info blue"
            }
          >
            <span>{increase}</span>
            <p>Oreo(s) par clic</p>
          </div>
          {!hideUpgrade && (
            <div className="upgrade-clics">
              Augmenter le nombre d'Oréos par clic
              <button
                onClick={() => {
                  if (count < upgradesCost[upgradeLvl]) {
                    alert("Vous n'avez pas assez d'Oréos !");
                    return;
                  }
                  setIncrease(clicUpgrades[upgradeLvl]);
                  setUpgradeLvl((upgradeLvl) => upgradeLvl + 1);
                  setCount((count) => count - upgradesCost[upgradeLvl]);
                }}
              >
                <img
                  className="upgrade-img"
                  src="https://res.cloudinary.com/antoinebaptista/image/upload/v1747663518/esd-oreo-small_ezhrbj.png"
                  alt="small oreo"
                />
                <span>{upgradesCost[upgradeLvl]}</span>
              </button>
            </div>
          )}
        </div>
        <div className="upgrades-container">
          <h1>
            <p>ACHETER</p>DES AMÉLIORATIONS
          </h1>

          <div className="upgrade">
            <span>
              AMÉLIORATION 1<p>Débloque l'Oréo d'or</p>
            </span>
            {goldenOreo ? (
              <div className="bought">ACHETÉ</div>
            ) : (
              <button
                onClick={() => {
                  if (count < 1000) {
                    alert("Vous n'avez pas assez d'Oréos !");
                    return;
                  }
                  setGoldenOreo(true);
                  setCount((count) => count - 1000);
                }}
              >
                <img src="https://res.cloudinary.com/antoinebaptista/image/upload/v1747663518/esd-oreo-small_ezhrbj.png" alt="small oreo" />
                1000
              </button>
            )}
          </div>

          <div className="upgrade">
            <span>
              AMÉLIORATION 2<p>Débloque le fond d'écran en or</p>
            </span>
            {goldenBackground ? (
              <div className="bought">ACHETÉ</div>
            ) : (
              <button
                onClick={() => {
                  if (count < 2500) {
                    alert("Vous n'avez pas assez d'Oréos !");
                    return;
                  }
                  setGoldenBackground(true);
                  setCount((count) => count - 2500);
                }}
              >
                <img src="https://res.cloudinary.com/antoinebaptista/image/upload/v1747663518/esd-oreo-small_ezhrbj.png" alt="small oreo" />
                2500
              </button>
            )}
          </div>

          <div className="upgrade">
            <span>
              AMÉLIORATION 3<p>Ajoute des confettis lors du clic</p>
            </span>
            {confettis ? (
              <div className="bought">ACHETÉ</div>
            ) : (
              <button
                onClick={() => {
                  if (count < 5000) {
                    alert("Vous n'avez pas assez d'Oréos !");
                    return;
                  }
                  setConfettis(true);
                  setCount((count) => count - 5000);
                }}
              >
                <img src="https://res.cloudinary.com/antoinebaptista/image/upload/v1747663518/esd-oreo-small_ezhrbj.png" alt="small oreo" />
                5000
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
