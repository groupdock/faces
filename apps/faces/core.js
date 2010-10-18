// ==========================================================================
// Project:   Faces
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Faces */

/** @namespace

  My cool new app.  Describe your application.
  
  @extends SC.Object
*/
Faces = SC.Application.create(
  /** @scope Faces.prototype */ {

  NAMESPACE: 'Faces',
  VERSION: '0.1.0',

  // This is your application store.  You will use this store to access all
  // of your model data.  You can also set a data source on this store to
  // connect to a backend server.  The default setup below connects the store
  // to any fixtures you define.
  store: SC.Store.create().from('Faces.SinatraDataSource')
  
  // TODO: Add global constants or singleton objects needed by your app here.

}) ;
