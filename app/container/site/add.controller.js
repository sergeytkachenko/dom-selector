'use strict';

import SiteCollection from '../../models/site.collection.js';
import SiteModel from '../../models/site.model.js';

class SiteCtrl {
	constructor ($scope, $stateParams, $state) {
		this.$scope = $scope;
		this.$scope.$state = $state;

		this.$scope.siteList = new SiteCollection;
		this.$scope.siteList.bind('all', () => {
			this.$scope.model = this.$scope.siteList.findWhere({id : $stateParams.id}) || new SiteModel;
		});

		this.$scope.siteList.fetch({reset : true});
		this.$scope.save = this.save;
	}

	save () {
		this.siteList.push(this.model);
		this.siteList.each(function (model) {
			model.save();
		});

		this.$state.go("root.site.list");
	}
}

SiteCtrl.$inject = ['$scope', '$stateParams', '$state'];
export default SiteCtrl;
