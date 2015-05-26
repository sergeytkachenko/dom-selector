'use strict';
import SettingsCollection from '../models/settings.collection.js';

class FrameCtrl {
	// TODO научится получать из метода ссылку на this а не $scope
	constructor ($scope) {
		this.$scope = $scope;
		this.$scope.go = this.go;

		this.$scope.settings = new SettingsCollection;
		this.$scope.settings.fetch({
			reset:true,
			success : () => {
				let url = this.$scope.settings.findWhere({key : 'url'});
				this.go (url.get('val'));
			}
		});
	}

	go (url) {

		let $scope = this.$scope || this;
		$scope.url = url? url : $scope.url;
		if(!$scope.url) return;

		$scope.url = $scope.url.match(/^http/)? $scope.url : 'http://' + $scope.url
		$scope.frameUrl = $scope.smartFrame? '/index.php?url=' + $scope.url : $scope.url;

		document.querySelector('iframe').src = $scope.frameUrl;

		let model = $scope.settings.findWhere({key : 'url'}) || new Backbone.Model;
		model.set({key : 'url', val : $scope.url}).save();
	}

}

FrameCtrl.$inject = ['$scope'];
export default FrameCtrl;
