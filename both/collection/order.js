Collection.Order = new Mongo.Collection("order");
Schema.Order = new SimpleSchema({
    date: {
        type: Date,
        defaultValue: new Date()
    },
    deliveryDate: {
        type: Date,
        label: "ថ្ងៃយកមកបោក :",
        optional: true
    },
    receiveDate: {
        type: Date,
        label: "ថ្ងៃទទួល :",
        optional: true
    },
    customerId: {
        type: String,
        label: "អតិថិជន :",
        optional: true,
        autoform: {
            type: "select",
            options: function () {
                let customer = Collection.Customer.find();
                let list = [];
                customer.forEach(function (obj) {
                    list.push({label: obj.name, value: obj._id})
                });
                return list;
            }
        }
    },
    staffId: {
        type: String,
        label: "បុគ្គលិក :",
        optional: true,
        autoform: {
            type: "select",
            options: function () {
                let staff = Collection.Staff.find();
                let list = [];
                staff.forEach(function (obj) {
                    list.push({label: obj.name, value: obj._id})
                });
                return list;
            }
        }
    },
    status: {
        type: String,
        label: "Status",
        optional: true
    },
    total: {
        type: Number,
        label: "សមតុល្យ",
        decimal: true,
        optional: true
    },
    // discountType: {
    //     type: String,
    //     label: "Discount ",
    //     optional: true,
    //     autoform: {
    //         type: "select-radio",
    //         options: function () {
    //             return [
    //                 {label: 'Cash', value: 'c'},
    //                 {label: 'Percentage', value: 'p'}
    //             ];
    //         }
    //     },
    //
    // },
    discountVal: {
        type: Number,
        label: "បញ្ចុះតម្លៃ",
        decimal: true,
        optional: true,
        defaultValue: 0
    },
    discountAmount: {
        type: Number,
        label: "Discount Amount",
        decimal: true,
        optional: true,
        defaultValue: 0
    },
    grandTotal: {
        type: Number,
        label: "Grand Total",
        decimal: true,
        optional: true,
        // autoform: {
        //     value: function () {
        //         let discountVal = AutoForm.getFieldValue('discountVal');
        //         let total = AutoForm.getFieldValue('total');
        //         if (discountVal == 0) {
        //             return total;
        //         }
        //     }
        // }
    },
    description:{
        type: String,
        optional: true,
        label: "បរិយាយ :",
        autoform: {
            afFieldInput: {
                type: "textarea"
            },
            placeholder:'បរិយាយ'
        }
    }
});
Collection.Order.attachSchema(Schema.Order);