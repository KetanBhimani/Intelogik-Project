import { LightningElement, track } from 'lwc';

export default class ParentsCmps extends LightningElement {
    @track seachValue;
    eventHandler(event) {
        this.seachValue = event.detail;
    }


}