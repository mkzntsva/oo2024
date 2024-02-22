class Sonum {
    sisu: string;
    autor: string;
    aeg: number;
    meeldimisi: number;

  constructor(sisu: string, autor: string, aeg: number, meeldimisi: number){
  this.sisu = sisu;
  this.autor = autor;
  this.aeg = aeg;
  this.meeldimisi = meeldimisi;
  }
  kysiPopulaarsus(): number{
    return this.meeldimisi/this.aeg;
  }
  lisaMeeldimine(){
    this.meeldimisi = this.meeldimisi + 1;
  }
}

let s1 = new Sonum("Pühapäeval toimub Tartu maraton", "Rein Sikk", 4, 2 );
let s2 = new Sonum("Homme lumesadu", "Rein Sikk", 5, 1 );
console.log(s1.sisu, s1.kysiPopulaarsus());
s1.lisaMeeldimine();
console.log(s1.kysiPopulaarsus(), s2.kysiPopulaarsus());
