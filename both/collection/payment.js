Collection.Payment = new Mongo.Collection("payment");
Schema.Payment = new SimpleSchema({
    orderId: {
        type: String,
        label: "Order"
    },
    paymentDate: {
        type: Date,
        label: "ថ្ងៃបង់ប្រាក់"
    },
    dueAmount: {
        type: Number,
        label: "ប្រាក់ត្រូវបង់ (៛)",
        decimal: true,
        min: 0
    },
    paidAmount: {
        type: Number,
        label: "ប្រាក់បានបង់ (៛)",
        decimal: true,
        min: 0
    },
    balance: {
        type: Number,
        label: "ប្រាក់នៅសល់ (៛)",
        decimal: true,
        defaultValue: 0
    },
    change: {
        type: Number,
        label: "ប្រាក់អាប់ (៛)",
        decimal: true,
        optional: true,
        defaultValue: 0
    },
    status: {
        type: String,
        label: "Status",
        optional: true,
        defaultValue: "unpaid"
    }
});
Collection.Payment.attachSchema(Schema.Payment);