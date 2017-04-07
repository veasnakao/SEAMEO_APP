Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function () {
    this.route('index', {
        path: '/'
    });
    //staff

    // this.route('info');
    this.route('info', {
        path: '/info/:url',
    });
});