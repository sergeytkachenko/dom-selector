// TODO use jade - http://jade-lang.com/
// TODO replace relative path to absolute in php file

app.controller(
    "frameController",
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

        $("iframe").off("load").on("load", function () {
            var $contents = $(this).contents();
            $contents.find("head").append('<link rel="stylesheet" href="'+location.origin+'/css/frame.css" />');
            $contents.find("head").append('<base href="'+$scope.url+'" target="_blank">');
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
    }
);

app.controller(
    "navigationController",
    function( $scope , $http, $sce) {
        app.attributes.fetch({
            'success' : function () {
                $scope.attributes = app.attributes.models
            }
        });
    }
);

