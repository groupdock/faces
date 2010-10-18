// ==========================================================================
// Project:   Faces.personController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Faces */

/** @class

  (Document Your Controller Here)

  @extends SC.ObjectController
*/
Faces.personController = SC.ObjectController.create(
/** @scope Faces.personController.prototype */ {

  pane: null,

  contentBinding: 'Faces.peopleController.selection',
  contentBindingDefault: SC.Binding.single(),

}) ;
