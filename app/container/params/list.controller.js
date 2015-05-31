'use strict';

import ParamCollection from '../../models/param.collection.js';
import ParamModel from '../../models/param.model.js';

class ParamListCtrl {
	constructor ($scope) {
		this.$scope = $scope;
		this.$scope.remove = this.remove;

		this.$scope.paramList = new ParamCollection;
		this.$scope.paramList.fetch({
			reset: true,
			success : (models) => {

			}
		});
	}

	remove (id) {
		let model = this.paramList.get(id);
		if(!model) return;
		model.destroy()
	}
}

ParamListCtrl.$inject = ['$scope'];
export default ParamListCtrl;
