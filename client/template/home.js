//declare tmpl
let indexTmpl = Template.home;


indexTmpl.helpers({
    params(barIcon, routeTo, title){
        return {
            barIcon:'true',
            title:' '
        }
    }
});

indexTmpl.events({
    // 'click .js-info' (event, instance) {
    //     let url = event.currentTarget.value;
    //     Router.go(`/info/${encodeURIComponent(url)}`);
    // },
    // 'click .js-fb' (event, instance){
    //     let url = event.currentTarget.value;
    //     Router.go(`/info/${encodeURIComponent(url)}`);
    // }
});

