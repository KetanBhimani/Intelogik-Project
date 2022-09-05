import { LightningElement } from 'lwc';

export default class FormComponent extends LightningElement {
    valBooleanflag = false;

    hideHandler() {
        this.valBooleanflag = false;
    }

    showHandler() {
        this.valBooleanflag = true;
    }
}