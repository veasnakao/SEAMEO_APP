let indexTmpl = Template.info;

indexTmpl.helpers({
    params(barIcon, routeTo, title){
        return {
            routeTo: 'home',
            title: 'Centre Info'
        }
    },
    data(){
        return Router.current().params.url;
    }
});

