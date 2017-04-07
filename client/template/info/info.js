Template.info.onCreated(function () {
    // let url = Router.current().url;
    // console.log(encodeURIComponent(url));
    // $(".info").html('<object data="http://www.seameo.org/SEAMEOWeb2/"/>');
    // $(".info").html('<object data="http://www.seameo.org/SEAMEOWeb2/"/>');
});

Template.info.helpers({
    data(){
        // let url = Router.current().url;

        return Router.current().params.url;
    }
});


