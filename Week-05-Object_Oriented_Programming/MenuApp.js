class Fighter {
    constructor(name,discipline) {
        this.name = name;
        this.discipline = discipline;
    }

    describe() {
        return `${this.name} is a  ${this.discipline} fighter.`;
    }
}

class Weightclass {
    constructor(name) {
        this.name = name;
        this.fighters = [];
    }

    addFighter(fighter) {
        if (fighter instanceof Fighter) {
            this.fighters.push(fighter);
        } else {
            throw new Error(`You can only add an instance of a fighter. Argument is not a figter: ${fighter}`);
        }
    }

    describe() {
        return `${this.name} has ${this.players.length} players.`;
    }
}

class Menu {
    constructor() {
        this.Weightclass = []
        this.selectedWeightclass = null
    }

    start() {
        let selection = this.showMainMenuOptions();
         while (selection !=0) {
            switch (selection) {
                case '1':
                    this.createWeightclass();
                    break;
                case '2':
                    this.viewWeightclass();
                    break;
                case '3':
                    this.deleteWeightclass();
                    break;
                case '4' :
                    this.displayWeightclass();
                    break;
                default:
                     selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('Goodbye!');
    }
      
    showMainMenuOptions() {
        return prompt(`
            0) exit
            1) create
            2) view
            3) delete
            4) display all Weightclasses
        `);
    }

    showWeightclassMenuOptions(weightclassInfo) {
        return prompt(`
            0) back
            1) create fighter
            2)delete fighter
            -----------------
            ${weightclassInfo}
        `);

    }

    displayWeightclass() {
        let teamString = '';
        for (let i = 0; i < this.Weightclass.length; i++) {
            teamString += i + ') ' + this.Weightclass[i].name + '\n';
        }
        alert(teamString);
    }

    deleteWeightclass() {
        let index = prompt('Enter the index of the Weightclass you wish to delete:');
        if (index > -1 && index < this.Weightclass.length) {
            this.Weightclass.splice(index, 1);
        }
    }
    
    createWeightclass() {
        let name = prompt('Enter name for new weightclass:');
        this.Weightclass.push(new Weightclass(name));
        console.log(this.Weightclass);
    }

    viewWeightclass() {
        let index = prompt('Enter the index of the Weightclass you wish to view:');
        if (index > -1 && index < this.Weightclass.length) {
            this.selectedWeightclass = this.Weightclass[index];
            let description = 'Weightclass: ' + this.selectedWeightclass.name + '\n';

            for (let i = 0; i < this.selectedWeightclass.fighters.length; i++) {
             description += i + ') ' + this. selectedWeightclass.fighters[i].name
                + ' - ' + this.selectedWeightclass.fighters[i].discipline + '\n';
            }

            let selection = this.showWeightclassMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createFighter();
                    break;
                case '2':
                    this.deleteFighter();

            }


        }
    }

    createFighter() {
        let name = prompt('Enter name for new fighter:');
        let discipline = prompt('Enter discipline for new fighter:');
        this.selectedWeightclass.fighters.push(new Fighter(name,discipline));
        console.log(this.selectedWeightclass);
    }

    deleteFighter() {
        let index = prompt('Enter the index of the figther you wish to delete:');
        if (index > -1 && index < This.selectedWeightclass.fighters.length) {
            this.selectedWeightclass.fighters.splice(index, 1);
        }
    }
    
}


let myMenu = new Menu();
myMenu.start();