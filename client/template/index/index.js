Template.index.events({
    'click .js-info': function () {
        debugger;
        let url = $('.js-info').val();
        // Router.go(`/info`);
        // let a = $(this).val();
        console.log($(this).val());
        Router.go(`/info/${encodeURIComponent(url)}`);
    }
});

