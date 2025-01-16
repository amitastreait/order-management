/**
 * @description       : 
 * @author            : Amit Singh
 * @group             : 
 * @last modified on  : 01-16-2025
 * @last modified by  : Amit Singh
**/
public with sharing class CaseTriggerHandler{
    public void onAfterInsert(List<Case> newCases){
        // Do something
    }
    public void onAfterUpdate(List<Case> newCases, Map<Id, Case> oldMap){
        // Do something
    }
    public void onAfterDelete(List<Case> oldCases){
        // Do something
    }
    public void onBeforeInsert(List<Case> newCases){
        // Do something
    }
    public void onBeforeUpdate(List<Case> newCases, Map<Id, Case> oldMap){
        // Do something
    }
    public void onBeforeDelete(List<Case> oldCases){
        // Do something
    }
    public void onAfterUndelete(List<Case> newCases){
        // Do something
    }
}