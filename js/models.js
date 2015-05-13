Backbone.Collection.prototype.saveAll = function () {
    _(this.models).each( function(entity) {
        entity.save();
    } );
}

app.model.Setting = Backbone.Model.extend();
app.model.Attribute = Backbone.Model.extend();

app.collection.Settings = Backbone.Collection.extend({
    model : app.model.Setting,
    localStorage : new Backbone.LocalStorage('collection.Settings')
});
app.collection.Attribute = Backbone.Collection.extend({
    model : app.model.Attribute,
    localStorage : new Backbone.LocalStorage('collection.Attribute')
});

app.settings = new app.collection.Settings();
app.settings.bind('change add remove', app.settings.saveAll, app.settings);

app.attributes = new app.collection.Attribute();
app.attributes.bind('change add remove', app.attributes.saveAll, app.attributes);
