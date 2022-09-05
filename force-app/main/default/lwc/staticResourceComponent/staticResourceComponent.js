import { LightningElement } from 'lwc';

import KetanImage from '@salesforce/resourceUrl/Ketan_image';
import titleName from '@salesforce/label/c.lightning_card_title_name';

export default class StaticResourceComponent extends LightningElement {

    logo = KetanImage;

    labelList = {
        titleName
    };


}