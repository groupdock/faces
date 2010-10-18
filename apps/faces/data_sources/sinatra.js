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
    
    // TODO: Add handlers to retrieve an individual record's contents
    // call store.dataSourceDidComplete(storeKey) when done.
    
    return NO ; // return YES if you handled the storeKey
  },
  
  createRecord: function(store, storeKey) {
    
    // TODO: Add handlers to submit new records to the data source.
    // call store.dataSourceDidComplete(storeKey) when done.
    
    return NO ; // return YES if you handled the storeKey
  },
  
  updateRecord: function(store, storeKey) {
    
    // TODO: Add handlers to submit modified record to the data source
    // call store.dataSourceDidComplete(storeKey) when done.

    return NO ; // return YES if you handled the storeKey
  },
  
  destroyRecord: function(store, storeKey) {
    
    // TODO: Add handlers to destroy records on the data source.
    // call store.dataSourceDidDestroy(storeKey) when done
    
    return NO ; // return YES if you handled the storeKey
  }
  
}) ;
