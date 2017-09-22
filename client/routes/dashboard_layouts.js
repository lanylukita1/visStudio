FlowRouter.route('/dashboard_layouts', {
  name: 'App.dashboard_layouts',
  action() {
    BlazeLayout.render('dashboard_layouts');
  },
});

