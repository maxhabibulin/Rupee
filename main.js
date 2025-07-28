"strict";

import CurrentYear from "./modules/current-year.js";
import GameScore from "/modules/game-score.js";
import {
  Collectible,
  GreenRupee,
  BlueRupee,
  RedRupee,
} from "/modules/collectibles.js";

const greenRupee = new GreenRupee();
const blueRupee = new BlueRupee();
const redRupee = new RedRupee();
const gameScore = new GameScore();
const currentYear = new CurrentYear();

gameScore.addCollectible(greenRupee);
gameScore.addCollectible(blueRupee);
gameScore.addCollectible(redRupee);

const collectGreenRupee = document.querySelector("#collect-green-rupees");
const collectBlueRupee = document.querySelector("#collect-blue-rupees");
const collectRedRupee = document.querySelector("#collect-red-rupees");
const greenRupeesCollected = document.querySelector("#green-rupees-collected");
const blueRupeesCollected = document.querySelector("#blue-rupees-collected");
const redRupeesCollected = document.querySelector("#red-rupees-collected");
const showScore = document.querySelector("#show-score");
const showCurrentYear = document.querySelector("#show-current-year");

const render = () => {
  greenRupeesCollected.textContent = greenRupee.getCollectedMessage();
  blueRupeesCollected.textContent = blueRupee.getCollectedMessage();
  redRupeesCollected.textContent = redRupee.getCollectedMessage();
  showScore.textContent = gameScore.getTotalScore();
};

showCurrentYear.textContent = currentYear.getCurrentYear();

collectGreenRupee.addEventListener("click", () => {
  greenRupee.collect();
  render();
});

collectBlueRupee.addEventListener("click", () => {
  blueRupee.collect();
  render();
});

collectRedRupee.addEventListener("click", () => {
  redRupee.collect();
  render();
});
