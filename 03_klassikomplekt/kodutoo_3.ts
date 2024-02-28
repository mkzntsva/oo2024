class Tootaja {
  private nimi: string;
  private tunnitasu: number;
  private tootunnid: number;

  constructor(nimi: string, tunnitasu: number, tootunnid: number) {
    this.nimi = nimi;
    this.tunnitasu = tunnitasu;
    this.tootunnid = tootunnid;
  }

  getNimi(): string {
    return this.nimi;
  }

  getTunnitasu(): number {
    return this.tunnitasu;
  }

  getTootunnid(): number {
    return this.tootunnid;
  }

  arvutaPalk(): number {
  return this.tunnitasu * this.tootunnid;
  }
}

class Osakond {
  private osakonnaNimi: string;
  private tootajad: Tootaja[];

  constructor(osakonnaNimi: string) {
    this.osakonnaNimi = osakonnaNimi;
    this.tootajad = [];
  }

  lisaTootaja(tootaja: Tootaja): void {
    this.tootajad.push(tootaja);
  }

  naitaOsakonnaInfo(): void {
    console.log("Osakond: " + this.osakonnaNimi);
    console.log("Töötajad:");
    this.tootajad.forEach((tootaja) => {
      console.log( tootaja.getNimi() + " - Palk: " + tootaja.arvutaPalk(), " eurot");
    });
  }
}

const tootaja1 = new Tootaja("Mari Mets", 10, 78);
const tootaja2 = new Tootaja("Matti Rebane", 12, 85);
const osakondIT = new Osakond("IT Osakond");
osakondIT.lisaTootaja(tootaja1);
osakondIT.lisaTootaja(tootaja2);
osakondIT.naitaOsakonnaInfo();


//Osakond: IT Osakond
//Tootajad:
//Mari Mets - Palk: 780  eurot
//Matti Rebane - Palk: 1020  eurot