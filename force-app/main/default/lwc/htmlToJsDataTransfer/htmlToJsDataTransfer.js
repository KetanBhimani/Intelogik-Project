import { LightningElement } from 'lwc';

export default class HtmlToJsDataTransfer extends LightningElement {
    letterHandler(event){
        var varLetterfrmHtmlToJS = event.target.value;
        alert('You have entered : ' + varLetterfrmHtmlToJS);
    }
}