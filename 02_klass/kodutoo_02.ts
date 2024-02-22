class Bookstore {
  constructor(protected pealkiri: string, protected autor: string, protected lehekyljed: number, protected hind: number){}
  toString(){return this.pealkiri+" aastast "+this.synniaasta;}
  kasSarnane(isik:Isik){return this.eesnimi==isik.eesnimi;}
  kysiSynniaasta(){return this.synniaasta;}
}