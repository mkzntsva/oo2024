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

    lisaVett(kogus: number): void {
        this.vesiKogus += kogus;
        //console.log(kogus + ' kuupsentimeetrit vett lisati akvaariumile');
    }

    kysiVeeKogus(): number {
        return this.vesiKogus;
    }


    veeValamine(akvaarium: Akvaarium, kogus: number): void {
        const vabaRuum = akvaarium.arvutaRuumala() - akvaarium.vesiKogus;

        if (vabaRuum >= kogus + 2) {
            this.vesiKogus -= kogus;
            akvaarium.lisaVett(kogus);
            console.log(kogus + ' kuupsentimeetrit vett valati üle teise akvaariumisse');
            console.log('Esimese akvaariumi vesi Kogus on: ' + this.vesiKogus + ' kuupsentimeetrit');
            console.log('Teise akvaariumi vesi Kogus on: ' + akvaarium.vesiKogus + ' kuupsentimeetrit');
        } else {
            console.log('Hoiatus: Akvaarium saab liiga täis, ei saa valada nii palju!');
        }
    }
}

const akvaarium1 = new Akvaarium(100, 40, 50);
const ruumala1 = akvaarium1.arvutaRuumala();
console.log('Esimese akvaariumi ruumala: ' + ruumala1 + ' kuupsentimeetrit');
akvaarium1.lisaVett(110000);
console.log('Esimese akvaariumi vesi Kogus on: ' + akvaarium1.vesiKogus);
console.log();
const akvaarium2 = new Akvaarium(80, 30, 50);
const ruumala2 = akvaarium2.arvutaRuumala();
console.log('Teise akvaariumi ruumala: ' + ruumala2 + ' kuupsentimeetrit');
akvaarium2.lisaVett(14500);
console.log('Teise akvaariumi vesi Kogus on: ' + akvaarium2.vesiKogus);
console.log();

akvaarium1.veeValamine(akvaarium2, 100000);

//väljund
//Esimese akvaariumi ruumala: 200000 kuupsentimeetrit
//Esimese akvaariumi vesi Kogus on: 110000

//Teise akvaariumi ruumala: 120000 kuupsentimeetrit
//Teise akvaariumi vesi Kogus on: 14500

//100000 kuupsentimeetrit vett valati üle teise akvaariumisse
//Esimese akvaariumi vesi Kogus on: 10000 kuupsentimeetrit
//Teise akvaariumi vesi Kogus on: 114500 kuupsentimeetrit



 















