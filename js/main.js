// TODO use jade - http://jade-lang.com/

app.controller(
    "MyController",
    function( $scope , $http, $sce) {
        $scope.go = function () {
            var url = $scope.url.match(/^http/)? $scope.url : 'http://'+$scope.url
            $scope.frameUrl = '/index.php?url=' + url;
        }
    }
);

document.getElementById('frame').onload = function () { // навешиваем события на frame
    var $elements = $(this).contents().find('*');
    $elements.hover(function () {
        console.log(this)
    }, function () {

    })
}