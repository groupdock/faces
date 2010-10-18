// ==========================================================================
// Project:   Faces.SinatraDataSource
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Faces */
sc_require('models/person');
Faces.PEOPLE_QUERY = SC.Query.local(Faces.Person, {
  orderBy: 'name'
});


/** @class

  (Document Your Data Source Here)

  @extends SC.DataSource
*/
Faces.SinatraDataSource = SC.DataSource.extend(
/** @scope Faces.SinatraDataSource.prototype */ {

  // ..........................................................
  // QUERY SUPPORT
  // 

  fetch: function(store, query) {
    if (query == Faces.PEOPLE_QUERY) {
      SC.Request.getUrl('/people').header({'Accept': 'application/json'}).json()
        .notify(this, 'didFetchPeople', store, query)
        .send();
      return YES;
    }

    return NO ;
  },
  
  didFetchPeople: function(response, store, query) {
    if (SC.ok(response)) {
      store.loadRecords(Faces.Person, response.get('body').content);
      store.dataSourceDidFetchQuery(query);
    } else {
      store.dataSourceDidErrorQuery(query,response);
    }
  },

  // ..........................................................
  // RECORD SUPPORT
  // 
  
  retrieveRecord: function(store, storeKey) {
    if (SC.kindOf(store.recordTypeFor(storeKey), Faces.Person)) {
      var url = store.idFor(storeKey);
      SC.Request.getUrl(url).header({'Accept': 'application/json'}).json()
        .notify(this, 'didRetrievePerson', store, storeKey)
        .send();
      return YES;
    } else {
      return NO;
    }
  },
  
  didRetrievePerson: function(response, store,storeKey) {
    if (SC.ok(response)) {
      var dataHash = response.get('body').content;
      store.dataSourceDidComplete(storeKey, dataHash);
    } else {
      store.dataSourceDidError(storeKey, response);
    }
  },
  
  createRecord: function(store, storeKey) {
    if (SC.kindOf(store.recordTypeFor(storeKey), Faces.Person)) {
      SC.Request.postUrl('/people').header({'Accept':'application/json'}).json()
        .notify(this, 'didCreatePerson', store, storeKey)
        .send(store.readDataHash(storeKey));
      return YES;
    } else {
      return NO;
    }
  },
  
  didCreatePerson: function(response, store, storeKey) {
    if (SC.ok(response)) {
      var parser = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
      var url = parser.exec(response.header('Location'))[8];
      store.dataSourceDidComplete(storeKey, null, url);
    } else {
      store.dataSourceDidError(storeKey,response);
    }
  },
  
  updateRecord: function(store, storeKey) {
    if (SC.kindOf(store.recordTypeFor(storeKey)), Faces.Person) {
      SC.Request.putUrl(store.idFor(storeKey)).header({'Accept': 'application/json'}).json()
        .notify(this, 'didUpdatePerson', store,storeKey)
        .send(store.readDataHash(storeKey));
      return YES; 
    } else {
      return NO;
    }
  },
  
  didUpdatePerson: function(response,store,storeKey) {
    if (SC.ok(response)) {
      var data = response.get('body');
      if (data) { data = data.content }
      store.dataSourceDidComplete(storeKey,data);
    } else {
      store.dataSourceDidError(storeKey);
    }
  },
  
  destroyRecord: function(store, storeKey) {
    if (SC.kindOf(store.recordTypeFor(storeKey), Faces.Person)) {
      SC.Request.deleteUrl(store.idFor(storeKey)).header({'Accept':'application/json'}).json()
        .notify(this, 'didDestroyPerson', store,storeKey)
        .send();
      return YES;
    } else {
      return NO;
    }
  },
  
  didDestroyPerson: function(response,store,storeKey) {
    if (SC.ok(response)) {
      store.dataSourceDidDestroy(storeKey);
    } else {
      store.dataSourceDidError(response);
    }
  }
  
}) ;
