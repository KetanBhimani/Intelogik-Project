import { LightningElement, track } from 'lwc';

export default class CustomValidation extends LightningElement {
    searchHandler(){
        let nameRef = this.template.querySelector(".nameCmp");
        let dateRef = this.template.querySelector(".dateCmp");

        let nameValue = nameRef.value;
        let dateValue = dateRef.value;

        if(!nameValue){
            nameRef.setCustomValidity("Plz enter name");
        }
        else{
            nameRef.setCustomValidity("");
        }
        nameRef.reportValidity();

        if(!dateValue){
            dateRef.setCustomValidity("Plz enter date");
        }
        else{
            dateRef.setCustomValidity("");
        }
        dateRef.reportValidity();
    }
}