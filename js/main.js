// TODO use jade - http://jade-lang.com/

app.controller(
    "FrameController",
    function( $scope , $http, $sce) {
        app.settings.fetch({
            success : function () {
                var model = app.settings.findWhere({key:'url'}) || new app.model.Setting;
                $scope.url = model.get('value');
                if($scope.url) $scope.frameUrl = '/index.php?url=' + $scope.url;
                $scope.go = function () {
                    var url = $scope.url.match(/^http/)? $scope.url : 'http://'+$scope.url
                    $scope.frameUrl = '/index.php?url=' + url;
                    model.set({key : 'url', value : url});
                    app.settings.add(model);
                }
            }
        });
    }
);

app.controller(
    "NavigationController",
    function( $scope , $http, $sce) {
        console.log($scope);
    }
);

$("iframe").on("load", function () {
    var $contents = $(this).contents();
    $contents.find("head").append('<link rel="stylesheet" href="'+location.origin+'/css/frame.css" />');
    var $elements = $contents.find('*');

    $elements.find("body").off("click").on("click", function (e) {
        e.stopPropagation;
        e.preventDefault();

        Event.click($(documentFrame.elementFromPoint(Event.mouse.x, Event.mouse.y)));
    });

    var documentFrame = this.contentWindow.document;
    documentFrame.addEventListener('mousemove', function(e){
        Event.mouse.x = e.clientX || e.pageX;
        Event.mouse.y = e.clientY || e.pageY;
        Event.hover($(documentFrame.elementFromPoint(Event.mouse.x, Event.mouse.y)));
    }, false);

});