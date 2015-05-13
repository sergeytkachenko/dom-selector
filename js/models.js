app.model.Setting = Backbone.Model.extend({
    localStorage: app.storage
});
app.model.Attribute = Backbone.Model.extend({
    localStorage: app.storage
});
app.collection.Attribute = Backbone.Collection.extend({
    model : app.model.Attribute,
    localStorage: app.storage
});

app.Setting = new app.model.Setting({id: "setting"});
app.Setting.fetch();

app.Attributes = new app.collection.Attribute();

app.Attributes.add([
    {
        id : 1,
        title : 'Цена',
         disabled : false
    },
]);