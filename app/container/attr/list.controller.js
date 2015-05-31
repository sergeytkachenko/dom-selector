'use strict';

import attrCollection from '../../models/attr.collection.js';
import AttrModel from '../../models/attr.model.js';

class AttrListCtrl {
    constructor ($scope) {
		this.$scope = $scope;
		this.$scope.remove = this.remove;

		this.$scope.attrList = attrCollection;
		this.$scope.attrList.fetch({
			reset: true,
			success : (models) => {
				
			}
		});
    }

	remove (id) {
		let model = this.attrList.get(id);
		if(!model) return;
		model.destroy()
	}
}

AttrListCtrl.$inject = ['$scope'];
export default AttrListCtrl;
