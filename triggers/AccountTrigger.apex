/**
 * @description       : 
 * @author            : Amit Singh
 * @group             : 
 * @last modified on  : 01-16-2025
 * @last modified by  : Amit Singh
**/
trigger AccountTrigger on account (after insert){
    /** */
    public void onAfterInsert(List<Account> newAccounts){
        // Do something
    }
}