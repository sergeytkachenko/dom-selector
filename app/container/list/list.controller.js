'use strict';

import attrCollection from '../../models/attr.collection.js';
import AttrModel from '../../models/attr.model.js';

class ListCtrl {
    constructor ($scope) {
		this.$scope = $scope;

		this.$scope.attrList = attrCollection;
		console.log(this.$scope.attrList);
    }
}

ListCtrl.$inject = ['$scope'];
export default ListCtrl;
