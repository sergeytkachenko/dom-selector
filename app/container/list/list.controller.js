'use strict';

import attrCollection from '../../models/attr.collection.js';
import AttrModel from '../../models/attr.model.js';

class ListCtrl {
    constructor ($scope) {
		this.$scope = $scope;

		this.$scope.attrList = attrCollection;
		this.$scope.attrList.fetch({
			reset: true,
			success : (models) => {
				
			}
		});
    }
}

ListCtrl.$inject = ['$scope'];
export default ListCtrl;
