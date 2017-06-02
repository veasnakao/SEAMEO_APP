//declare tmpl
let indexTmpl = Template.centre,
    bioTmpl = Template.bio;


indexTmpl.helpers({
    params(barIcon, routeTo, title){
        return {
            barIcon:'true',
            title:'SEAMEO Centres'
        }
    }
});

bioTmpl.helpers({
    params(barIcon, routeTo, title){
        return {
            routeTo:'centre',
            title: 'SEAMEO BIOTROP'
        };
    }
});

