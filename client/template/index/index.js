//declare tmpl
let indexTmpl = Template.index;

indexTmpl.events({
    'click .js-info' (event, instance) {
        // debugger;
        let url = $('.js-info').val();
        // Router.go(`/info`);
        // let a = $(this).val();
        // console.log($(this).val());
        Router.go(`/info/${encodeURIComponent(url)}`);
    },
    'click .js-fb' (event, instance){
        let url = event.currentTarget.value;
        Router.go(`/info/${encodeURIComponent(url)}`);
    }
});

