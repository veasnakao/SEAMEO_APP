let indexTmpl = Template.about,
    whatIsSeameoTmpl = Template.whatIsSeameo;

indexTmpl.helpers({
    params(barIcon, routeTo, title){
        return {
            barIcon:'true',
            title: 'About SEAMEO'
        };
    }
});

whatIsSeameoTmpl.helpers({
    params(barIcon, routeTo, title){
        return {
            routeTo:'aboutUs',
            title: 'What is SEAMEO?'
        };
    }
});