/**
 * 1. Отправить head страницы в свой head, но предварительно запомнить, что-бы потом можно было удалить
 * 2. Переобразовать все относительные ссылки на абсолютные
 * 3. Изолировать свои классы и скрипты
 * 4. css стили искомого сайта оборачивать в less и переобразовывать на лету
 *
 * разберать header и body нужно на сервере
 *
 **/

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