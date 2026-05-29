import { LightningElement, api, wire } from 'lwc';
import getContactsByAccountId from '@salesforce/apex/ContactController.getContactsByAccountId';

export default class ContactTable extends LightningElement {
    @api recordId;
    data = []
    error

    columns = [
        { label: 'Nome', fieldName: 'Name' },
        { label: 'Email', fieldName: 'Email' },
        { label: 'Telefone', fieldName: 'Phone' },
        { label: 'Cargo', fieldName: 'Title' },
    ]
        
        @wire(getContactsByAccountId, {contaId: '$recordId'})
        wiredContacts({error, data}) {
            if(data) {
                this.data = data
                this.error = undefined;
            } else if(error) {
                 this.error = error.body.message   
            }
    }
}