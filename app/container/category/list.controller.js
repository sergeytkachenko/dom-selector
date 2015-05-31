'use strict';

import CategoryCollection from '../../models/category.collection.js';
import CategoryModel from '../../models/category.model.js';

class CategoryListCtrl {
	constructor ($scope) {
		this.$scope = $scope;

		this.$scope.categoryList = new CategoryCollection;
		this.$scope.categoryList.fetch({
			reset: true,
			success : (models) => {

			}
		});
	}
}

CategoryListCtrl.$inject = ['$scope'];
export default CategoryListCtrl;
