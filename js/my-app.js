// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'ios', //ios, md, auto
    modalTitle: 'Framework7', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/card/',
    	url: 'card.html',
    	name: 'card',
  		},
		{
		path: '/info/',
    	url: 'info.html',
    	name: 'info',
  		},
		
		
		{
		path: '/tabs/',
    	url: 'tabs.html',
    	name: 'tabs',
  		},
		{
		path: '/form/',
    	url: 'form.html',
    	name: 'form',
  		},
		{
		path: '/artist/',
    	url: 'artist.html',
    	name: 'artist',
  		},
		
		{
		path: '/contact/',
    	url: 'contact.html',
    	name: 'contact',
  		},
		
		{
		path: '/ofertas/',
    	url: 'ofertas.html',
    	name: 'ofertas',
  		},
		
		{
		path: '/playlist/',
    	url: 'playlist.html',
    	name: 'playlist',
  		},
		
		{
		path: '/profile/',
    	url: 'profile.html',
    	name: 'profile',
  		},
	]
});

// Export selectors engine
var $$ = Dom7;





 

