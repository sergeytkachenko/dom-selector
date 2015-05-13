var app = angular.module( "App", ['ngRoute'] );
app.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : '../pages/home.html',
            controller  : 'frameController'
        })

        // route for the about page
        .when('/attribute/add', {
            templateUrl : '../pages/attribute-add.html',
            controller  : 'aboutController'
        })
});

app.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});


app.model = {};
app.collection = {};

//app.storage = new Backbone.LocalStorage('app.setting');

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

