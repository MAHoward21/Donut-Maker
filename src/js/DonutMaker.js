class DonutMaker{

    constructor(){
        this.donuts = 0;
        this.autoClicker = 0;
        this.autoClickerPrice = 100;
        this.donutMultiplier = 0;
        this.donutMultiplierPrice = 10;
    }
    recordClick(){
        if(this.donutMultiplier>=0 && this.donuts >=0){
            this.donuts = Math.ceil(this.donuts * Math.pow(1.2, this.donutMultiplier)).toFixed(1);
        }
        else{
            this.donuts++;
        }
        if(this.autoClicker>=1 && this.donuts >=2){
            this.donuts = Math.ceil(this.donuts * Math.pow(1.2, this.autoClicker));
        }
        else{
            this.donuts++;
        }
    }
    addNewAutoClicker(){
        this.autoClicker++;
        this.donuts-=this.autoClickerPrice;
        this.autoClickerPrice *= 1.1;
        this.autoClickerPrice = Math.floor(this.autoClickerPrice);
    }
    addNewDonutMultiplier(){
        this.donutMultiplier++;
        this.donuts-=this.donutMultiplierPrice;
        this.donutMultiplierPrice *= 1.10;
        this.donutMultiplierPrice = Math.floor(this.donutMultiplierPrice);
    }

    resetGame() {
        this.donuts = 0;
        this.autoClicker = 0;
        this.autoClickerPrice = 100;
        this.donutMultiplier = 0;
        this.donutMultiplierPrice = 10;
    }
}
export{DonutMaker}

