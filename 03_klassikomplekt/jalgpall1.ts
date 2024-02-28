class Player {
    private _name: string;
    private _team: any;

    constructor(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    get team(): Team {
        return this._team;
    }

    set team(value: Team) {
        this._team = value;
    }
}

class Team {
    private _players: Player[] = [];
    private _name: string;


    constructor(name: string) {
        this._name = name;
    }

    addPlayer(player: Player) : void {
        if (player.team == null) {
            this._players.push(player);
            player.team = this;
        }
    }


    get players(): Player[] {
        return this._players;
    }


    get name(): string {
        return this._name;
    }
}

let isik1:Player= new Player("Juku");
let isik2:Player= new Player("Mati");
let meeskond1= new Team("Harjumaa");
meeskond1.addPlayer(isik1);
meeskond1.addPlayer(isik2);
console.log(isik1.name);
console.log(meeskond1);
console.log(isik1.team.players.length);