class Grupp{
  eesnimed: string[] = [];
  lisaEesnimi(eesnimi: string){
    let puudu = true;
    for(let e of this.eesnimed){
      if(e==eesnimi){puudu=false;}
    }
    if(puudu){
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