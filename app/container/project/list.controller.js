'use strict';

import ProjectCollection from '../../models/project.collection.js';
import ProjectModel from '../../models/project.model.js';

class ProjectListCtrl {
	constructor ($scope) {
		this.$scope = $scope;
		this.$scope.remove = this.remove;

		this.$scope.projectList = new ProjectCollection;
		this.$scope.projectList.fetch({
			reset: true,
			success : (models) => {

			}
		});
	}

	remove (id) {
		let model = this.projectList.get(id);
		if(!model) return;
		model.destroy()
	}
}

ProjectListCtrl.$inject = ['$scope'];
export default ProjectListCtrl;
