Collection.OrderDetail = new Mongo.Collection("orderDetail");
Schema.OrderDetail = new SimpleSchema({
    orderId: {
        type: String,
        label: "Order"
    },
    itemId: {
        type: String,
        label: "ItemId"
    },
    itemName: {
        type: String,
        label: "Item Name"
    },
    price: {
        type: Number,
        label: "Price",
        decimal: true
    },
    discount: {
        type: Number,
        label: "Discount",
        optional: true,
        decimal: true,
        defaultValue(){
            return 0;
        }
    },
    quantity: {
        type: Number,
        label: "Quantity"
    },
    amount: {
        type: Number,
        label: "Total",
        decimal: true,
        optional: true,
        // autoform: {
        //     value: function () {
        //         let price = AutoForm.getFieldValue('price');
        //         let quantity = AutoForm.getFieldValue('quantity');
        //         let amount = price * quantity;
        //         return amount;
        //     }
        // }
    }
});
Collection.OrderDetail.attachSchema(Schema.OrderDetail);