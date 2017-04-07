Collection.Customer = new Mongo.Collection("customer");
Schema.Customer = new SimpleSchema({
    name: {
        type: String,
        label: "ឈ្មេាះ",
        // defaultValue: "General",
        max: 200
    },
    gender: {
        type: String,
        label: "ភេទ",
        autoform: {
            type: "select",
            options: function () {
                return [
                    {label: 'ប្រុស', value: 'ប្រុស'},
                    {label: 'ស្រី', value: 'ស្រី'}
                ];
            }
        }
    },
    tel: {
        type: String,
        label: "ទូរស័ព្ទ",
        autoform: {
            type: "tel"
        }
    }
});
Collection.Customer.attachSchema(Schema.Customer);