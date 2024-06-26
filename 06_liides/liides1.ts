interface Adder{
   add(nr: number):void;
   getSum():number;
}

class CharCounter{
    constructor(protected adder:Adder){}
    addWordCharacters(word:string):void{
        this.adder.add(word.length);
    }
    addWordsCharacters(words:string[]):void{
        for(let word of words){
          this.addWordCharacters(word);
        }
    }
    addSentenceCharacters(sentence:string):void{
       this.addWordsCharacters(sentence.split(" "));
    }
    getCharacterCount(){
        return this.adder.getSum();
    }
}
class SimpleAdder implements Adder{
    protected sum:number=0;
    add(nr:number){this.sum+=nr;}
    getSum(): number {
        return this.sum;
    }
}
let adder1:Adder=new SimpleAdder();
let counter1:CharCounter=new CharCounter(adder1);
counter1.addWordsCharacters(["Vana", "Kalamaja"]);
counter1.addSentenceCharacters("ilusa suure puumaja");
counter1.addWordCharacters("Juku");
counter1.addWordCharacters("tuli");
counter1.addWordCharacters("kooli");
console.log(counter1.getCharacterCount());