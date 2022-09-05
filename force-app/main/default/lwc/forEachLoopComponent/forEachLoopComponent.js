import { LightningElement } from 'lwc';

export default class ForEachLoopComponent extends LightningElement {
    showButton = false;
    ceoList;

    showHandler(){
        this.ceoList=[
            {
                id: 3,
                name: 'Ketan',
                title: 'CEO of Facebook',
                
            },
            {
                id: 2,
                name: 'Hiral',
                title: 'CEO of MicroSOft',
                
            },
            {
                id: 1,
                name: 'Kinjal',
                title: 'CEO of Amazon',
                
            },
            {
                id: 4,
                name: 'Vibha',
                title: 'CEO of Google',
                
            },
        ];
        this.showButton = true;
    }

    hideHandler(){
        this.showButton = false;
    }
}