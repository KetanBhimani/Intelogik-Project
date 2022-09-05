public with sharing class SearchAccount {

    @AuraEnabled(cacheable=true)
    public static list<Account> getSearch(String strKey){


        list<Account> account = new list<Account>();

        account = [SELECT Id, Name, Phone FROM Account WHERE Name LIKE: '%'+strKey+'%'];
        return account;
    }
    
}
