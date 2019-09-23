class Wallet {
    constructor(money){
        let _money = money;
        this.getWalletValue = () => {
            return _money;
        }
        this.checkIfCanPlay = (value) => {
            return _money > value;
        }
        this.changeWallet = (value, type = "+") => {
            if( !isNaN(value) && typeof value === "number"){
                if(type === "+"){
                    return _money += value;
                } else if (type == "-"){
                    return _money -= value;
                } else {
                    return new Error("Wrong arythmetic sign");
                }
            } else return new Error("Wrong type of value");
        }
    }
}

const wallet = new Wallet(200);