Collection.Item = new Mongo.Collection("item");
Schema.Item = new SimpleSchema({
    name: {
        type: String,
        label: "ប្រភេទ",
        unique: true,
        max: 200
    },
    price: {
        type: Number,
        label: "តម្លៃ (៛)",
        decimal: true,
    }
});
Collection.Item.attachSchema(Schema.Item);

Collection.Item.search = function (query, limit) {
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

    return Collection.Item.find(selector, {
        sort: {
            name: 1
        },
        limit: limitAmount
    });
};
