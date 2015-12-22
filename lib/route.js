Router.configure({
  layoutTemplate: 'applicationLayout'
});


Router.route('/',function() {
  this.render('home');
});
Router.route('/about',function() {
  this.render('about');
});
Router.route('/contract',function() {
  this.render('contract');
});
Router.route('/timeSpace',function() {
  this.render('timeSpace');
});
Router.route('/service',function() {
  this.render('service');
});
Router.route('/galleryAdd',function() {
  this.render('galleryAdd');
});
Router.route('/galleryList',function() {
  this.render('galleryList');
});
Router.route('/myForm',function() {
  this.render('myForm');
});
Router.route('/imageView',function() {
  this.render('imageView');
});









