class Game{
    constructor(money){
        this.wallet = new Wallet(money);
        this.statistics = new Statistics();
        document.getElementById('start').addEventListener('click', this.startGame.bind(this));
        this.spanWallet = document.querySelector('.panel span.wallet');
        this.colorPanels = document.querySelectorAll('section.game div.color');
        this.bidInput = document.getElementById('bid');
        this.spanResult = document.querySelector('.score span.result');
        this.spanNumber = document.querySelector('.score span.number');
        this.spanWin = document.querySelector('.score span.win');
        this.spanLoss = document.querySelector('.score span.loss');
        this.render();
    }

    render(collors = ['grey', 'grey', 'grey'],  money = this.wallet.getWalletValue(), stat = [0,0,0], result = "",
    bid = 0, wonMoney = 0){
        this.colorPanels.forEach((el, i) => {
            el.style.backgroundColor = collors[i];
        });
        this.spanWallet.textContent = `${money}$`
        if(result){
            result = `Wygrałeś ${wonMoney}$`;      
        } else if (!result && result !== "" ) result = `Przegrałeś ${bid}$`;
        this.spanResult.textContent = result;
        this.spanNumber.textContent = stat[0];
        this.spanWin.textContent = stat[1];
        this.spanLoss.textContent = stat[2];
        this.bidInput.value= "";
    }

    startGame(){
        if(this.bidInput.value < 1 ){
            return alert('Input value must be greater than 1!');
        }
        const bid = Math.floor(this.bidInput.value);
        if( !this.wallet.checkIfCanPlay(bid)){
            return alert('Sorry you dont have enough money');
        }
        this.wallet.changeWallet(bid, '-');
        const draw = new Draw();
        const tableOfDrawColors = draw.getDrawResult();
        const win = Result.checkIfWins(tableOfDrawColors);
        const wonMoney = Result.moneyWinsInGames(win, bid);
        console.log(wonMoney);
        this.wallet.changeWallet(wonMoney);
        this.statistics.addGameToResults(win,bid);
        this.render(tableOfDrawColors, this.wallet.getWalletValue(), this.statistics.showGamesStatistics(), win, bid, wonMoney);
        
    }   
}
