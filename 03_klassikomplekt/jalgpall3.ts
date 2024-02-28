class Player {
    private _name: string;
    private _team: any;
    private _x: number=0;
    private _y: number=0;

    constructor(name: string) {
        this._name = name;
    }

    setPosition(x: number, y: number): void {
        this._x = x;
        this._y = y;
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


    get x(): number {
        return this._x;
    }

    get y(): number {
        return this._y;
    }
}

class Team {
    private _players: Player[] = [];
    private _name: string;


    constructor(name: string) {
        this._name = name;
    }

    startGame(width: number, height: number): void {
        // init players
        for (const player of this._players) {
            player.setPosition(
                width * Math.random(),
                height * Math.random()
            );
        }
    }

    addPlayer(player: Player): void {
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

class Ball {
    private _x: number;
    private _y: number;
    private _game: Game;


    constructor(x: number, y: number, game: Game) {
        this._x = x;
        this._y = y;
        this._game = game;
    }


    get x(): number {
        return this._x;
    }

    get y(): number {
        return this._y;
    }
}

class Stadium {
    private _width: number;
    private _height: number;

    constructor(width: number, height: number) {
        this._width = width;
        this._height = height;
    }


    get width(): number {
        return this._width;
    }

    get height(): number {
        return this._height;
    }
}

class Game {
    private _homeTeam: Team;
    private _awayTeam: Team;
    private _stadium: Stadium;
    private _ball: Ball= new Ball(0, 0, this);

    constructor(homeTeam: Team, awayTeam: Team, stadium: Stadium) {
        this._homeTeam = homeTeam;
        this._awayTeam = awayTeam;
        this._stadium = stadium;
    }


    start(): void {
        this._ball = new Ball(this._stadium.width / 2, this._stadium.height / 2, this);
        this._homeTeam.startGame(this._stadium.width / 2, this._stadium.height);
    }

    get homeTeam(): Team {
        return this._homeTeam;
    }

    get awayTeam(): Team {
        return this._awayTeam;
    }

    get stadium(): Stadium {
        return this._stadium;
    }

    get ball(): Ball {
        return this._ball;
    }
}

let st1= new Stadium(110, 90);
let isik1:Player= new Player("Juku");
let isik2:Player= new Player("Mati");
let meeskond1= new Team("Harjumaa");
meeskond1.addPlayer(isik1);
meeskond1.addPlayer(isik2);
let isik21:Player= new Player("Kati");
let isik22:Player= new Player("Mari");
let meeskond2= new Team("Raplamaa");
meeskond2.addPlayer(isik1);
meeskond2.addPlayer(isik2);
let mang1=new Game(meeskond1, meeskond2, st1);
mang1.start()
console.log(isik1);
//kuva esimese meeskonna isik1 kaugus pallist mängu algul
console.log(isik1.x);
console.log(mang1.ball.x);
console.log(isik1.y);
console.log(mang1.ball.y);
let dx:number=isik1.x-mang1.ball.x;
let dy:number=isik1.y-mang1.ball.y;
let kaugus:number=Math.sqrt(dx*dx+dy*dy);
console.log(dx, dy, kaugus);