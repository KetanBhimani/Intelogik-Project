import { LightningElement } from 'lwc';

export default class ChildCmps extends LightningElement {
    searchKey;

    changeHandler(event) {
        this.searchKey = event.target.value;

        const evnt = new CustomEvent("getvalueforpar", {
            detail: this.searchKey
        });

        this.dispatchEvent(evnt);
    }


}