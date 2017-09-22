Template.dashboard_header.rendered = (function(){
	$(".dropdown-button").dropdown();
});

Template.dashboard_hidebar.rendered = (function(){
	$(".button-collapse").sideNav();
});

Template.dashboard_sidebar.rendered = (function(){
	$(document).ready(function(){
    $('.tooltipped').tooltip({delay: 50});
  });
});
