Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function () {
    // tmpl name && path
    this.route('home', {
        path: '/'
    });

//---------------------------------
    /*MENU 7Pri*/
    this.route('pri7', {
        path: '/pri7',
    });
    /*SUB-MENU*/
    this.route('p1', {
        path: '/p1',
    });
// //---------------------------------


    // this.route('info', {
    //     path: '/info/:url',
    // });

    //---------------------------
    this.route('about', {
        path: '/about-us',
    });
    this.route('whatIsSeameo', {
        path: '/what-is-seameo',
    });
});