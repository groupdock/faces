// ==========================================================================
// Project:   Faces.FaceView
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Faces */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
Faces.FaceView = SC.View.extend(
/** @scope Faces.FaceView.prototype */ {

  contentDisplayProperties: 'name company website picture'.w(),
  
  render: function(context, firstTime) {
    var content = this.get('content');
    var name = content.get('name');
    var company = content.get('company');
    var website = content.get('website');
    var picture = content.get('picture');
    
    /* THE FOLLOWING IS WHAT THE HTML FOR THIS CUSTOM VIEW WILL LOOK LIKE
    
      <div class="face">
        <div class="face-bottom-overlay">
          <div class="face-name">Luc Castera</div>
          <div class="face-company">Intellum</div>
        </div>
        <div class="face-background">
          <img src="/images/image.png" class="stretch" />
        </div>
      </div>
      
    */
    
    context = context.begin('div').addClass('face-bottom-overlay').push('');
		context = context.begin('div').addClass('face-name').push(name).end();
		context = context.begin('div').addClass('face-company').push(company).end();
	  context = context.end();
    
	  if (picture) {
		  context = context.begin('div').addClass('face-background').push('<img src="' + picture + '" class="stretch" alt="" />').end();
	  } 
  
    sc_super();
  }

});
