 class Akvaarium {
  pikkus: number;
  laius: number;
  korgus: number;
  vesiKogus: number;

  constructor(pikkus: number, laius: number, korgus: number) {
    this.pikkus = pikkus;
    this.laius = laius;
    this.korgus = korgus;
    this.vesiKogus = 0;
  }

  arvutaRuumala(): number {
    return this.pikkus * this.laius * this.korgus;
  }

  lisaVett (kogus: number): void{
    this.vesiKogus = this.vesiKogus + kogus;
    console.log(kogus + ' kuupsentimeetrit vett lisati akvariumile');
  }

  kysiVeeKogus(): number {
    return this.vesiKogus;
  }

}

const akvaarium1 = new Akvaarium(100, 40, 50);
const ruumala1 = akvaarium1.arvutaRuumala();
console.log('Akvaariumi ruumala: ' + ruumala1 + ' kuupsentimeetrit'); 

akvaarium1.lisaVett(150);
akvaarium1.lisaVett(300);
const praeguneVeeKogus = akvaarium1.kysiVeeKogus();
console.log('Akvaariumis on praegu ' + praeguneVeeKogus + ' kuupsentimeetrit');