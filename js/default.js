var app = angular.module( "App", [] );
app.model = {};
app.collection = {};

app.storage = new Backbone.LocalStorage('app.setting');

var Event = {
    mouse : {x: 0, y: 0},
    hover : function ($el) {
        $el.parents("body").find("*").removeClass("hover");
        $el.addClass("hover");
    },

    click : function ($el) {
        $el.toggleClass("click");
    }
}

