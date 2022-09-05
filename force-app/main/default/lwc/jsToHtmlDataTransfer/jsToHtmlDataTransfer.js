import { LightningElement } from 'lwc';

export default class JsToHtmlDataTransfer extends LightningElement {
    fullName= 'Ketan';

    nameHandler(event){
        this.fullName= 'Vibha';
    }
}