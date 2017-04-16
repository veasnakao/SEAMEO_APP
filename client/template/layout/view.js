let indexTmpl = Template.view;

indexTmpl.onCreated(function () {
    this.params = new ReactiveVar();
    this.autorun(() => {
        let currentData = Template.currentData();
        if (currentData) {
            this.params.set(currentData);
        }
    });
});

//params from tmpl
indexTmpl.helpers({
    routeTo(){
        let instance = Template.instance();
        return (!_.isEmpty(instance.params.get().routeTo)) ? instance.params.get().routeTo : undefined;
    },
    title(){
        let instance = Template.instance();
        return (!_.isEmpty(instance.params.get().title)) ? instance.params.get().title : undefined;
    },
    barIcon(){
        let instance = Template.instance();
        return (!_.isEmpty(instance.params.get().barIcon)) ? instance.params.get().barIcon : undefined;
    }
});

