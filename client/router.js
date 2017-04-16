Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function () {
    //tmpl name && path
    this.route('home', {
        path: '/'
    });



    this.route('info', {
        path: '/info/:url',
    });

    this.route('about', {
        path: '/about-us',
    });
    this.route('whatIsSeameo', {
        path: '/what-is-seameo',
    });
});