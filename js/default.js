var app = angular.module( "App", [] );

var DomHelper = {
    getHeader : function (html) {
        var parser = new DOMParser(),
            doc = parser.parseFromString(html, "text/xml");
        console.log(doc);
    }
}


