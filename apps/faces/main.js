// ==========================================================================
// Project:   Faces
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Faces */

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
Faces.main = function main() {

  // Step 1: Instantiate Your Views
  // The default code here will make the mainPane for your application visible
  // on screen.  If you app gets any level of complexity, you will probably 
  // create multiple pages and panes.  
  Faces.getPath('mainPage.mainPane').append() ;

  // Step 2. Set the content property on your primary controller.
  // This will make your app come alive!
  var people = Faces.store.find(Faces.PEOPLE_QUERY);
  Faces.peopleController.set('content', people);

  // TODO: Set the content property on your primary controller
  // ex: Faces.contactsController.set('content',Faces.contacts);

} ;

function main() { Faces.main(); }
