// ==========================================================================
// Project:   Faces.editPage
// Copyright: © 2010 Intellum Inc.
// ==========================================================================
/*globals Faces */

// This page describes a part of the interface for your application.  

Faces.editPage = SC.Page.design({

  mainPane: SC.PanelPane.design({
    layout: { centerX: 0, centerY: 0, width: 550, height: 200},
    contentView: SC.View.design({
      childViews: 'prompt  nameLabel name companyLabel company websiteLabel website pictureLabel picture submitButton'.w(),
      prompt: SC.LabelView.design({
        layout: { top: 12, left: 20, height: 18, right: 20 },
        fontWeight: SC.BOLD_WEIGHT,
        value: "Add yourself below"
      }),
      nameLabel: SC.LabelView.design({
        layout: { top: 40, left: 0, width: 120, height: 18 },
        textAlign: SC.ALIGN_RIGHT,
        value: "Name"
      }),
      name: SC.TextFieldView.design({
        layout: { top: 40, left: 140, height: 20, width: 350 },
        hint: "your name goes here",
        valueBinding: "Faces.personController.name"
      }),
      companyLabel: SC.LabelView.design({
        layout: { top: 70, left: 0, width: 120, height: 18 },
        textAlign: SC.ALIGN_RIGHT,
        value: "Company"
      }),
      company: SC.TextFieldView.design({
        layout: { top: 70, left: 140, height: 20, width: 350 },
        hint: "your company goes here",
        valueBinding: "Faces.personController.company"
      }),
      websiteLabel: SC.LabelView.design({
        layout: { top: 100, left: 0, width: 120, height: 18 },
        textAlign: SC.ALIGN_RIGHT,
        value: "Website"
      }),
      website: SC.TextFieldView.design({
        layout: { top: 100, left: 140, height: 20, width: 350 },
        hint: "your website URL goes here",
        valueBinding: "Faces.personController.website"
      }),
      pictureLabel: SC.LabelView.design({
        layout: { top: 130, left: 0, width: 120, height: 18 },
        textAlign: SC.ALIGN_RIGHT,
        value: "Picture"
      }),
      picture: SC.TextFieldView.design({
        layout: { top: 130, left: 140, height: 20, width: 350 },
        hint: "a url to your picture goes here",
        valueBinding: "Faces.personController.picture"
      }),                  
      submitButton: SC.ButtonView.design({
        layout: { bottom: 15, right: 50, width: 80, height: 24 },
        title: "Submit",
        target: 'Faces.peopleController',
        action: 'submitPerson'
      })     
    })
  })

});
