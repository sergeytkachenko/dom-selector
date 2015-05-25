'use strict';


class FrameCtrl {

	constructor ($scope) {
		this.$scope = $scope;
		this.$scope.go = this.go;

	}

	go () {
		if(!this.url) return;
		this.url = this.url.match(/^http/)? this.url : 'http://'+this.url
		this.frameUrl = this.smartFrame? '/index.php?url=' + this.url : this.url;
		document.querySelector('iframe').src = this.frameUrl;
	}
}

FrameCtrl.$inject = ['$scope'];
export default FrameCtrl;
