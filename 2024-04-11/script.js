class Kasse {
  constructor() {
    this.geldlade = 0;
  }

  scannen(artikel) {
    return artikel;
  }

  bezahlen(betrag, artikel) {
    if (betrag < artikel.preis) {
      throw new Error("Betrag nicht ausreichend");
    }
    this.geldlade += artikel.preis;
    return {
      rechnung: `Artikel: ${artikel.name}, Preis: ${artikel.preis}`,
      retourgeld: betrag - artikel.preis
    };
  }

  toString() {
    return `Heute ${this.geldlade} € eingnommen`;
  }
}

class Artikel {
  constructor(name, preis) {
    this.name = name;
    this.preis = preis;
  }
}

const cola = new Artikel("Cola", 1.89);
const kasse = new Kasse();

try {
  const bezahlteCola = kasse.bezahlen(2, cola);
  console.log(bezahlteCola.rechnung);
  console.log(`Retourgeld: ${bezahlteCola.retourgeld}`);
  console.log(kasse.toString());
} catch (error) {
  console.error(error.message);
}
