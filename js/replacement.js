/**
 * 1. Отправить head страницы в свой head, но предварительно запомнить, что-бы потом можно было удалить
 * 2. Переобразовать все относительные ссылки на абсолютные
 * 3. Изолировать свои классы и скрипты
 * 4. css стили искомого сайта оборачивать в less и переобразовывать на лету
 *
 * разберать header и body нужно на сервере
 *
 **/
//
var DomHelper = {
    getHeader : function (html) {
        var parser = new DOMParser(),
            doc = parser.parseFromString(html, "text/xml");
        console.log(doc);
    }
}

var app = angular.module( "App", [] );
app.controller(
    "MyController",
    function( $scope , $http, $sce) {
        $scope.go = function () {
            if(!$scope.url.match(/.[a-zа-я]{2,}$/)) {return;}
            $scope.urlIframe = (function () {
                if($scope.url.match(/^http/)) {
                    return $scope.url;
                }
                return "http://" + $scope.url;
            })();
        }
    }
);