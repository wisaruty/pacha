Router.configure({
  layoutTemplate: 'ApplicationLayout'
});


Router.route('/',function() {
  this.render('Home');
});
Router.route('/about',function() {
  this.render('About');
});
Router.route('/contract',function() {
  this.render('Contract');
});
Router.route('/timeSpace',function() {
  this.render('TimeSpace');
});
Router.route('/service',function() {
  this.render('Service');
});







