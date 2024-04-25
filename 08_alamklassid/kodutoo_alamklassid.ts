class eestiLinnad {
    constructor(public nimi: string, public maakond: string, public rahvastikuArv: number){
        this.nimi = nimi;
        this.maakond = maakond;
        this.rahvastikuArv = rahvastikuArv;
    }

    tutvusta(): string {
        return "Linn: " + this.nimi + ", Maakond: " + this.maakond + ", Rahvastiku arv: " + this.rahvastikuArv;
    }
}

// Esimene alamklass
class Tallinn extends eestiLinnad {
    constructor(maakond: string, rahvastikuArv: number, public vaatamisväärsused: string[]) {
        super("Tallinn", maakond, rahvastikuArv);
    }

    tutvusta(): string {
        return super.tutvusta() + ", Vaatamisväärsused: " + this.vaatamisväärsused.join(", ");
    }

    huvitavFakt(): string {
        return "Tallinn on tuntud kui Baltikumi kultuuripealinn!";
    }
}

// Teine alamklass
class Tartu extends eestiLinnad {
    constructor(maakond: string, rahvastikuArv: number, public vaatamisväärsused: string[]) {
        super("Tartu", maakond, rahvastikuArv);
    }

    tutvusta(): string {
        return super.tutvusta() + ", Vaatamisväärsused: " + this.vaatamisväärsused.join(", ");
    }

    huvitavFakt(): string {
        return "Tartu on Eesti haridus- ja kultuuripealinn!";
    }
}

const tallinn = new Tallinn("Harju maakond", 460642, ["Tallinna Vanalinn", "Kadrioru park", "Lennusadam"]);
const tartu = new Tartu("Tartu maakond", 97524, ["Tartu Ülikool", "Tartu Toomkirik", "Ahhaa Teaduskeskus"]);
console.log(tallinn.tutvusta());
console.log(tallinn.huvitavFakt());
console.log("-------------------");
console.log(tartu.tutvusta());
console.log(tartu.huvitavFakt());
console.log("-------------------");


//Linn: Tallinn, Maakond: Harju maakond, Rahvastiku arv: 460642, Vaatamisväärsused: Tallinna Vanalinn, Kadrioru park, Lennusadam
//Tallinn on tuntud kui Baltikumi kultuuripealinn!
//-------------------
//Linn: Tartu, Maakond: Tartu maakond, Rahvastiku arv: 97524, Vaatamisväärsused: Tartu Ülikool, Tartu Toomkirik, Ahhaa Teaduskeskus
//Tartu on Eesti haridus- ja kultuuripealinn!
//-------------------
