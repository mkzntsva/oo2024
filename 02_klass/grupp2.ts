class Grupp{
  eesnimed: string[] = [];
  lisaEesnimi(eesnimi: string){
    //Lisa eesnimi vaid juhul, kui seda veel pole
    if (this.eesnimed.includes(eesnimi)) {
      console.log(eesnimi + " on juba olemas.");
    } else {
      this.eesnimed.push(eesnimi);
    }
  }
  kysiEesnimed():string[]{return this.eesnimed;}
}

let g1 = new Grupp();
g1.lisaEesnimi("Juku");
g1.lisaEesnimi("Juku");
g1.lisaEesnimi("Kati");
console.log(g1.kysiEesnimed());


    arvutaSumma(): number {
        return this.books.reduce((summa, raamat) => summa + raamat.kysiHind(raamat.kogus), 0);
    }