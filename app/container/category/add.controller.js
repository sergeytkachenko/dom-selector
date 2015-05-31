'use strict';

import ProjectCollection from '../../models/project.collection.js';
import CategoryCollection from '../../models/category.collection.js';
import CategoryModel from '../../models/category.model.js';

class CategoryCtrl {
	constructor ($scope, $stateParams, $state) {
		this.$scope = $scope;
		this.$scope.$state = $state;

		this.$scope.categoryList = new CategoryCollection;
		this.$scope.categoryList.bind('all', () => {
			this.$scope.model = this.$scope.categoryList.findWhere({id : $stateParams.id}) || new CategoryModel;
			let project = this.$scope.projectList.findWhere(this.$scope.model.get('project'));
			if(project) {
				// TODO написать директиву для автоматического выбора
				this.$scope.model.attributes.project = this.$scope.projectList.models[0];
			}
		});

		this.$scope.projectList = new ProjectCollection;
		this.$scope.projectList.fetch({
			reset : true,
			success : () => {
				this.$scope.categoryList.fetch({reset : true});
			}
		});

		this.$scope.save = this.save;
	}

	save () {
		this.categoryList.push(this.model);
		this.categoryList.each(function (model) {
			console.log(model);
			model.save();
		});

		this.$state.go("root.category.list");
	}
}

CategoryCtrl.$inject = ['$scope', '$stateParams', '$state'];
export default CategoryCtrl;
