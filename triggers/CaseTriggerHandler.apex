/**
 * @description       : 
 * @author            : Amit Singh
 * @group             : 
 * @last modified on  : 01-16-2025
 * @last modified by  : Amit Singh
**/
public with sharing class CaseTriggerHandler{
    public void onAfterInsert(List<Case> newCases){
        /** 1 */
        /** Iterate over cases and upadte description */
        for(Case c : newCases){
            c.Description = 'This is a new case';
        }
    }
    public void onAfterUpdate(List<Case> newCases, Map<Id, Case> oldMap){
        /*2*/
        /** Go with the cases, check if the status is changed create a task for the case */
        List<Task> tasks = new List<Task>();
        for(Case c : newCases){
            if(c.Status != oldMap.get(c.Id).Status){
                Task t = new Task();
                t.Subject = 'Case status changed';
                t.WhatId = c.Id;
                tasks.add(t);
            }
        }
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