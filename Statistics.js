class Statistics {
    constructor() {
        this.gameResults = [{
            win: true,
            bid: 2
        }];
    }
 
     addGameToResults(win, bid){
        this.gameResults.push({win, bid});
    }

        showGamesStatistics(){
            let numberOfGames = this.gameResults.length;
            let numberOfWins = this.gameResults.filter(result => result.win).length;
            let numberOfDefeats = this.gameResults.filter(result => !result.win).length;
            return [numberOfGames, numberOfWins, numberOfDefeats];
        }  
}

const statistics = new Statistics();