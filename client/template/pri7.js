let indexTmpl = Template.pri7,
    p1Tmpl = Template.p1;

indexTmpl.helpers({
    params(barIcon, routeTo, title){
        return {
            barIcon:'true',
            title: 'SEAMEO 7 Priority Areas '
        };
    }
});

p1Tmpl.helpers({
    params(barIcon, routeTo, title){
        return {
            routeTo:'pri7',
            title: '1) Early Childhood Care and Education'
        };
    }
});