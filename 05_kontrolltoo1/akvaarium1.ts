class Akvaarium {
  pikkus: number;
  laius: number;
  korgus: number;

  constructor(pikkus: number, laius: number, korgus: number) {
    this.pikkus = pikkus;
    this.laius = laius;
    this.korgus = korgus;
  }

  arvutaRuumala(): number {
    return this.pikkus * this.laius * this.korgus;
  }
}

const akvaarium1 = new Akvaarium(100, 40, 50);
const ruumala1 = akvaarium1.arvutaRuumala();
console.log('Akvaariumi ruumala: ' + ruumala1 + ' kuupsentimeetrit'); 