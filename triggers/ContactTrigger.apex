/**
 * @description       : 
 * @author            : Amit Singh
 * @group             : 
 * @last modified on  : 01-16-2025
 * @last modified by  : Amit Singh
**/
trigger ContactTrigger on contact (after insert) {
    List<Contact> contacts = new List<Contact>();
    for (Contact c : Trigger.new) {
        contacts.add(c);
    }
    System.debug('Contacts: ' + contacts);
}