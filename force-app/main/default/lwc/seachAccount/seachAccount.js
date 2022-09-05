import { LightningElement, wire } from 'lwc';
import getSearch from '@salesforce/apex/SearchAccount.getSearch';

export default class SeachAccount extends LightningElement {
    serachKey;

     @wire(getSearch,{strKey: '$serachKey'}) act;
     searchHandler(event){
         this.serachKey = event.target.value; 
     }

}