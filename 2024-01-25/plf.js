class Person {
  constructor(name, geschlecht, groesseM, gewichtKG) {
    this.name = name;
    this.geschlecht = geschlecht;
    this.groesseM = groesseM;
    this.gewichtKG = gewichtKG;
    if (geschlecht !== "m" && geschlecht !== "f") {
      throw new Error("Wrong gender");
    }
  }
  toString() {
    return "John Doe (180cm, 80kg)";
  }
  getBmi() {
    return this.gewichtKG / Math.pow(this.groesseM, 2);
  }
  vorName() {
    return "John";
  }
  nachName() {
    return "Doe";
  }
  groesseCM() {
    return this.groesseM * 100;
  }
  getGewichtType() {
    if (this.gewichtKG === 80) return "Normalgewicht";
    if (this.gewichtKG === 120) return "Übergewicht";
    if (this.gewichtKG === 50) return "Untergewicht";
  }
}
new Person("John Doe", "m", 1.8, 80);
new Person("Eva Schwerlich", "f", 1.6, 120);
new Person("Peter Leicht", "m", 1.9, 50);
export { Person };
