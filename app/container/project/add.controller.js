'use strict';

import ProjectCollection from '../../models/project.collection.js';
import ProjectModel from '../../models/project.model.js';

class ProjectCtrl {
	constructor ($scope, $stateParams, $state) {
		this.$scope = $scope;
		this.$scope.$state = $state;

		this.$scope.projectList = new ProjectCollection;
		this.$scope.projectList.bind('all', () => {
			this.$scope.model = this.$scope.projectList.findWhere({id : $stateParams.id}) || new ProjectModel;
		});

		this.$scope.projectList.fetch({reset : true}); // reset all models if that been created, changed, removed
		this.$scope.save = this.save;
	}

	save () {
		this.projectList.push(this.model);
		this.projectList.each(function (model) {
			model.save();
		});

		this.$state.go("root.project.list");
	}

}

ProjectCtrl.$inject = ['$scope', '$stateParams', '$state'];
export default ProjectCtrl;
