Router.configure({
  layoutTemplate: 'ApplicationLayout'
});


Router.route('/',function() {
  this.render('Home');
  this.render('Footer', {to: 'footer'});
});

