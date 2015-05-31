'use strict';

import SiteCollection from '../../models/site.collection.js';
import SiteModel from '../../models/site.model.js';

class SiteListCtrl {
	constructor ($scope) {
		this.$scope = $scope;

		this.$scope.siteList = new SiteCollection;
		this.$scope.siteList.fetch({
			reset: true,
			success : (models) => {

			}
		});
	}
}

SiteListCtrl.$inject = ['$scope'];
export default SiteListCtrl;
