Collection.Staff = new Mongo.Collection("staff");
Schema.Staff = new SimpleSchema({
    name: {
        type: String,
        label: "ឈ្មេាះ",
        max: 200
    },
    gender: {
        type: String,
        label: "បុគ្គលិក",
        autoform: {
            type: "select",
            options: function () {
                return [
                    // {label: '(Select One)', value: ''},
                    {label: 'Male', value: 'Male'},
                    {label: 'Female', value: 'Female'}
                ];
            }
        }
    },
    // workDate: {
    //     type:Date,
    //     label:"Work Date"
    // },
    fee: {
        type: Number,
        label: "Fee (%)",
        decimal: true,
        optional: true
    },
    baseSalary: {
        type: Number,
        label: "ប្រាក់ខែគោល ($)",
        decimal: true,
        optional: true
    },
    status:{
        type: String,
        label: "ស្ថានភាព",
        autoform: {
            type: "select",
            options: function () {
                return [
                    {label: 'កំពុងធ្វើការ', value: 'active'},
                    {label: 'ឈប់ធ្វើការ', value: 'close'},
                ];
            }
        }
    },
    tel: {
        type: String,
        label: "ទូរស័ព្ទ",
        optional: true,
        autoform: {
            type: "tel"
        }
    }
});
Collection.Staff.attachSchema(Schema.Staff);

//search staff
Collection.Staff.search = function (query, limit) {
    let limitAmount = limit || 10;
    if (!query) {
        return;
    }
    let regPattern = `${query}`;
    let reg = new RegExp(regPattern, 'i');//match all case
    let selector = {};
    selector.$or = [{
        name: {
            $regex: reg
        }
    }];
    let staffs = Collection.Staff.find(selector, {
        sort: {
            _id: 1
        },
        limit: limitAmount
    });
    return staffs;
};