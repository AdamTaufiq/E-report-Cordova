// var dbGeolocation = new PouchDB('mresponz_geolocation');
// var dbS3 = new PouchDB('tbl_S3_img');


var app = new Framework7({
    root: '#app',
  // App Name
  name: 'My App',
  // App id
 view: {
   stackPages: true
 },

  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [
    {
        name: 'test3',
        path: '/test3/',
        componentUrl: 'page/Status.html',
    },

    {
      name: 'page1',
      path: '/page1/',
      componentUrl: 'page/test3.html',
    },

    {
      name: 'page2',
      path: '/page2/',
      componentUrl: 'page/test3.html',
    },

  {
    name: 'test3',
    path: '/test3/',
    componentUrl: 'page/test3.html',
  },

 
  ],
  
  
  
  })
  
  var mainView = app.views.create('.view-main');
  var $$ = Dom7;

  
  function begin() {
    console.log('test')
    app.views.main.router.navigate({ name: 'test3' })
  }
  
  function logout() {
    console.log('test0000')
  }

  