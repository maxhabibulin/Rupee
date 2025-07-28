"strict";

class Collectible {
  #name;
  #worth;
  #count;

  constructor(name, worth) {
    this.#name = name;
    this.#worth = worth;
    this.#count = 0;
  }

  collect() {
    this.#count++;
  }

  getScore() {
    return this.#count * this.#worth;
  }

  getCollectedMessage() {
    return `${this.#count} ${this.#name}s collected`;
  }
}

class GreenRupee extends Collectible {
  constructor() {
    super("Green", 1);
  }
}

class BlueRupee extends Collectible {
  constructor() {
    super("Blue", 5);
  }
}

class RedRupee extends Collectible {
  constructor() {
    super("Red", 20);
  }
}

export { Collectible, GreenRupee, BlueRupee, RedRupee };
