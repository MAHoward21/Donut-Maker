describe('Iteration 1 - FEATURE 1 : Have a way to count donuts.',() => {
    describe('Can add to donut count.', ()=>{
        let underTest;

        beforeEach(() =>{
            underTest = new DonutMaker;
        });

        it('Should start with a click count of 0', () => {
            expect(underTest.donuts).toBe(0);
        });

        it('Should add one click to the click count when a click is recorded',() =>{
            underTest.recordClick();
            expect(underTest.donuts).toBe(1);
        });

        it('Should add two clicks to the click count when a click is recorded',()=>{
            underTest.recordClick();
            underTest.recordClick();
            expect(underTest.donuts).toBe(2);
        });
    });
});
describe('Iteration 1 - Feature 2- Ability to purchase initial Auto Clicker for 100 earned donuts.', () => {
    let underTest;
    beforeEach(() => {
        underTest = new DonutMaker();
    });
    it('Should be able to create an Auto Clicker', () => {
        underTest.addNewAutoClicker();
        expect(underTest.autoClicker).toBe(1);
    });
    it('Subtracts donuts used for payment from your total', () => {
        underTest.addNewAutoClicker();
        expect(underTest.donuts).toBe(-100);
    });
});
describe('Iteration 1 - Feature 3- The cost of each Auto Clicker will go up with each purchase.', () => {
    let underTest;
    beforeEach(() => {
        underTest = new DonutMaker();
    });
    it('Should increase the cost of the second Auto Clicker by an additional ten percent.', () => {
        underTest.addNewAutoClicker();
        expect(underTest.autoClickerPrice).toBe(110);
    });
    it('Should Increase the cost of every additional Auto Clicker by an additional ten percent.', () => {
        underTest.addNewAutoClicker();
        underTest.addNewAutoClicker();
        expect(underTest.autoClickerPrice).toBe(121);
    });
    });
describe('Ensure that there are enough clicks to buy a Auto Clicker.', ()=>{
    let underTest;
    beforeEach(() => {
        underTest = new DonutMaker();
    });
    it('Prevent the Auto Clicker count from going up if there are not enough clicks to purchase a Auto Clicker.', () =>{
        underTest.addNewAutoClicker();
        expect(underTest.donuts).toBe(-100);
    })
})
describe('Iteration 1 - Feature 5: Ensure that there are enough clicks to buy a Auto Clicker.', () => {
    beforeEach(() => {
        underTest = new DonutMaker;
    })
    it('The amount of Auto Clickers affect the amount of donuts added when an  Activate Auto Clickers  event is called.', () => {
        underTest.addNewAutoClicker();
        expect(underTest.donuts).toBe(-100)
    })
});
describe('Iteration 2 - Feature 1: Be able to purchase the first Donut Multiplier with 10 clicks from your click count.', () => {
    beforeEach(() => {
        underTest = new DonutMaker;
    })
    it('Can retrieve a Donut Multiplier count.', () => {
        expect(underTest.donutMultiplier).toBe(0);
    })
    it('Can add to the Donut Multiplier count.', () => {
        underTest.addNewDonutMultiplier();
        expect(underTest.donutMultiplier).toBe(1);
    })
    it('Subtract the amount of the Donut Multiplier cost from the donut count.', () =>{
        underTest.addNewDonutMultiplier();
        expect(underTest.donuts).toBe(-10);
    })
});
describe('Iteration 2 - FEATURE 2 : The cost of each Donut Multiplier will go up with each purchase.', () => {
    let underTest;
    beforeEach(() => {
    underTest = new DonutMaker;
})
    it('Increase the cost of the second Donut Multiplier by an additional ten percent.', () => {
        expect(underTest.donutMultiplierPrice).toBe(10);
    })
    it('Increase the cost of every additional Donut Multiplier by an additional ten percent.', () => {
        underTest.addNewDonutMultiplier();
        expect(underTest.donutMultiplierPrice).toBe(11);
    })
});
describe('Iteration 2 - FEATURE 3 : Ensure that there are enough donuts to buy a Donut Multiplier.', () => {
    let underTest;
    beforeEach(() => {
        underTest = new DonutMaker;
    })
    it('Prevent the Donut Multiplier count from going up if there are not enough donuts to purchase a Donut Multiplier.', () => {
        underTest.addNewDonutMultiplier();
        expect(underTest.donuts).toBe(-10);
    });
});
describe('Iteration 2 - FEATURE 4 : The first Donut Multiplier should increase the value of a click 1.2x.', () => {
    let underTest;
    beforeEach(() => {
        underTest = new DonutMaker;
    })
    it('Increase the amount of donuts added to the donut count by multiplying by 1.2 after the first Donut Multiplier is purchased.', () => {
        underTest.addNewDonutMultiplier();
        expect(underTest.donuts).toBe(-10)
})
});
describe('Iteration 2 - FEATURE 5 : The amount the subsequent Donut Multipliers click bonus will go up exponentially.', () => {
    let underTest;
    beforeEach(() => {
        underTest = new DonutMaker;
    })
    it('Increase the click value multiplier to 1.2 to the xth power, where _x_ is the amount of the Donut Multipliers count.', () => {
        underTest.addNewDonutMultiplier();
        underTest.addNewDonutMultiplier();
        underTest.recordClick();
        expect(underTest.donuts).toBe(-20);
    });
});
describe('Iteration 2 - FEATURE 6 : The Donut Multipliers click bonus will apply to clicks from the Auto Clicker', () => {
    let underTest;
    beforeEach(() => {
        underTest = new DonutMaker;
    })
    it('When an Add Auto Clickers event is executed, increase the value of each Auto Clicker by the amount of the Donut Multiplier.', () => {
        underTest.addNewDonutMultiplier();
        underTest.recordClick();
        expect(underTest.donuts).toBe(-9);
    })
})
