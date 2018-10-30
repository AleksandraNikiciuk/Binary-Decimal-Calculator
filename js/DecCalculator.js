import { Calculator } from "./Calculator";

class DecCalculator extends Calculator{
    constructor(settings) {
        super(settings);
        console.log( this.getName() );
    }
    add(numberX, numberY) {
        let result = [0,0,0,0,0,0,0,0,0];
        for(let i = numberX.length - 1; i >= 0  ; i--) {
            let carryBit =  numberX[i] + numberY[i] + result[i];
            if( carryBit  >= 10) {
                let arrayBit = carryBit.toString(10).replace(/\D/g, '0').split('').map(Number);
                let [result1, result2] = arrayBit;
                result[i] = result2;
                result[i-1] = result1;

            } else {
                result[i] = carryBit;
            }
        }
        return result;
    }

    changeNumber(root) {
        let activeElement = root.children('span');
        activeElement.on('click', function(event){
            event.preventDefault();
            $(this).attr('contenteditable', true);
            $(this).trigger('focus');
        });
    }

    updateResult() {
        let root =  this.$calculatorDOMElement;
        let $resultNumber = root.children(".group-number").children(".result-bit");
         for(let i =  this.resultNumberArray.length - 1, j = 0; i >= 0 ; i--, j++) {
          $resultNumber.eq(j).children().first().text(`${this.resultNumberArray[i]}`);
         }
    }

    initEvents() {
        super.initEvents();
            let addBtn = $('.operator-bar span');
            addBtn.on('click', (event) => {
                event.preventDefault();
                //console.log(this);
                this.checkNumber();
                this.updateResult();
            });
    }

}

export { DecCalculator  };

