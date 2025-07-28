"strict";

class GameScore {
  #collectibles;

  constructor() {
    this.#collectibles = [];
  }

  addCollectible(collectible) {
    return this.#collectibles.push(collectible);
  }

  getTotalScore() {
    return this.#collectibles.reduce((total, current) => {
      return total + current.getScore();
    }, 0);
  }
}

export default GameScore;
