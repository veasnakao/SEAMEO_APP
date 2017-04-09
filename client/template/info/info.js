let indexTmpl = Template.info;

indexTmpl.onCreated(function () {
    // let url = Router.current().url;
    // console.log(encodeURIComponent(url));
    // $(".info").html('<object data="http://www.seameo.org/SEAMEOWeb2/"/>');
});

indexTmpl.helpers({
    data(){
        return Router.current().params.url;
    }
});


