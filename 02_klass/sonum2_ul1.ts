class Sonum {
  constructor(protected sisu: string, protected autor: string, protected aeg: number, protected meeldimisi: number){
    
  }
  kysiPopulaarsus(): number{
    return this.meeldimisi/this.aeg;
  }
  kysiSisu(){return this.sisu;}
  lisaMeeldimine(){
//      this.meeldimisi = this.meeldimisi + 1;
      this.meeldimisi++;
  }
}

let s1 = new Sonum("Pühapäeval toimub Tartu maraton", "Rein Sikk", 4, 2 );
let s2 = new Sonum("Homme lumesadu", "Rein Sikk", 5, 1 );
console.log(s1.kysiSisu, s1.kysiPopulaarsus());
s1.lisaMeeldimine();
console.log(s1.kysiPopulaarsus(), s2.kysiPopulaarsus());
