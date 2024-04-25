const { error } = require("console");

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

class Kassa {
  #geldlade;
  #gescannteArtikel;
  constructor(geldlade, geldGegeben) {
    this.#geldlade = geldlade;
    this.#gescannteArtikel = [];
    this.geldGegeben = geldGegeben;
  }
  scannen(artikel) {
    this.#gescannteArtikel.push(artikel);
  }
  get offenerBetrag() {
    let betrag = 0;
    this.#gescannteArtikel.forEach((a) => (betrag += a.preis));
    return betrag;
  }

  rückgeld() {
    if (this.geldGegeben < this.offenerBetrag) {
      throw new Error("Zu wenig Geld gegeben");
    }
    return this.geldGegeben - this.offenerBetrag;
  }

  get Kassenstand() {
    let t = this.#geldlade + this.offenerBetrag;
    return t.toString();
  }

  get returngescannteArtikel() {
    const gescannterArtikel = this.#gescannteArtikel.map((artikel) => {
      return artikel.name;
    });
    return gescannterArtikel;
  }
}

class Produkt {
  constructor(name, preis) {
    this.preis = preis;
    this.name = name;
  }
}

const Tomate = new Produkt("Tomate", 5);
const Brot = new Produkt("Brot", 2.49);
const Cola = new Produkt("Cola", 1.99);
const Wasser = new Produkt("Wasser", 2, 99);
const kassa = new Kassa(100, 50);

let artikelListe = [Tomate, Brot, Cola, Wasser];

const userKassa = new Kassa(100, 0);

function einkaufen() {
  rl.question(
    'Was möchtest Sie kaufen? "fertig" zum beenden \n',
    (artikelInput) => {
      if (artikelInput == "fertig") {
        endoutput();
        return;
      } else {
        const foundArtikel = artikelListe.find((a) => {
          if (a.name == artikelInput) {
            return a;
          }
        });
        if (foundArtikel == undefined) {
          throw new Error("Artikel nicht gefunden");
        } else {
          userKassa.scannen(foundArtikel);
        }
        console.log(`Du hast ${foundArtikel.name} gescannt`);
        einkaufen();
      }
    }
  );
}
einkaufen();

function endoutput() {
  console.log("Du musst noch " + userKassa.offenerBetrag + "€ zahlen");
  rl.question("Wie viel geld gibst du ihm?  \n", (geldGegebenInput) => {
    userKassa.geldGegeben = parseFloat(geldGegebenInput);
    console.log(`Du hast ${userKassa.geldGegebenKassa}€ gegeben`);
    console.log(
      "Dein Rückgeld beträgt: " + userKassa.rückgeld().toFixed(2) + "€"
    );
    console.log("Dein Kassenstand beträgt: " + userKassa.Kassenstand + "€");
    console.log(
      "Du hast folgende Artikel gekauft:" + userKassa.returngescannteArtikel
    );
    rl.close();
  });
}
