'use strict';

import ParamCollection from '../../models/param.collection.js';
import ParamModel from '../../models/param.model.js';

class ParamCtrl {
	constructor ($scope, $stateParams, $state) {
		this.$scope = $scope;
		this.$scope.$state = $state;

		this.$scope.paramList = new ParamCollection;
		this.$scope.paramList.bind('all', () => {
			this.$scope.model = this.$scope.paramList.findWhere({id : $stateParams.id}) || new ParamModel;
		});

		this.$scope.paramList.fetch({reset : true}); // reset all models if that been created, changed, removed
		this.$scope.save = this.save;
	}

	save () {
		this.paramList.push(this.model);
		this.paramList.each(function (model) {
			model.save();
		});

		this.$state.go("root.param.list");
	}

}

ParamCtrl.$inject = ['$scope', '$stateParams', '$state'];
export default ParamCtrl;
