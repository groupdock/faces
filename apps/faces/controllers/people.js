// ==========================================================================
// Project:   Faces.peopleController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Faces */

/** @class

  (Document Your Controller Here)

  @extends SC.ArrayController
*/
Faces.peopleController = SC.ArrayController.create(
/** @scope Faces.peopleController.prototype */ {

  orderBy: 'name',
  
  allowMultipleSelection: NO,
  
  editPerson: function() {
    Faces.getPath('editPage.mainPane').append();
    return YES;
  },
  
  submitPerson: function() {
    Faces.getPath('editPage.mainPane').remove();
    return YES;
  },
  
  addPerson: function() {
    var person;
    
    person = Faces.store.createRecord(Faces.Person, {
      "name" : "",
      "company" : "",
      "website" : "",
      "picture" : ""
    });
    
    this.invokeLater(function() {
      Faces.peopleController.selectObject(person);
      this.editPerson();
    });
    return YES;
  }

}) ;
