import { LightningElement } from 'lwc';

export default class LoanInterestCalculator extends LightningElement {
    amount;
    duration;
    interest;
    loanInterest;

    amountChangeHandler(event){
        this.amount = parseInt(event.target.value);
    }

    durationChangeHandler(event){
        this.duration = parseInt(event.target.value);
    }

    interestChangeHandler(event){
        this.interest = parseInt(event.target.value);
    }

    loanCalculatorHandler(){
        this.loanInterest = (this.amount * this.duration * this.interest);
    }

    

}