function player(name, team){
    this.name = name;
    this.team = team;
}

const virat = new player('Virat Kohli', 'RCB');
const MSD = new player('M.S Dhoni', 'CSK');
const Bhuvi = new player('Bhuvaneshwar', 'SRH');


player.prototype.greet= function player() {
    console.log(`I'm ${this.name} and im in ${this.team}`);
}

virat.greet();
Bhuvi.greet();

player.prototype.nickname = 'something';

virat.nickname = 'cheeku';
Bhuvi.nickname = 'bhoo';

console.log(Bhuvi)

// class player
// {
//     constructor(name, team)
//     {
//         this.name = name;
//         this.team = team;
//     }
//     greet(){
//         console.log(`Hey im ${this.name} and im in ${this.team}`);
//     }
// }
// const virat = new player('Virat Kohli', 'RCB');
// const bhuvi = new player('Bhuvaneshwar', 'SRH');



// bhuvi.greet();
// virat.greet();
