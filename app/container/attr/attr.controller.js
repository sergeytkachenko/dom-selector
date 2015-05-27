'use strict';

import attrCollection from '../../models/attr.collection.js';
import AttrModel from '../../models/attr.model.js';

class AttrCtrl {
    constructor ($scope, $stateParams, $state) {
		this.$scope = $scope;
		this.$scope.$state = $state;
		
		this.$scope.attrList = attrCollection;
		this.$scope.attrList.bind('all', () => {
			this.$scope.attr = this.$scope.attrList.findWhere({id : $stateParams.id}) || new AttrModel;
			this.$scope.attrTypeList = [
				{
					id: 1,
					'title' : 'Аттрибут 1'
				},{
					id: 2,
					'title' : 'Аттрибут 2'
				},{
					id: 3,
					'title' : 'Аттрибут 3'
				}
			];
			// TODO написать директиву для автоматического выбора selected
			this.$scope.selectedOption = this.$scope.attrTypeList[0];
		});

		this.$scope.attrList.fetch({reset : true}); // reset all models if that been created, changed, removed
		this.$scope.save = this.save;
    }

	save () {
		this.attrList.push(this.attr);
		this.attrList.each(function (model) {
			model.save();
		});
		
		this.$state.go("root.attr.list");
	}

	add () {

	}
}

AttrCtrl.$inject = ['$scope', '$stateParams', '$state'];
export default AttrCtrl;
