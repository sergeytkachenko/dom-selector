'use strict';

import attrCollection from '../../models/attr.collection.js';
import AttrModel from '../../models/attr.model.js';

class AttrCtrl {
    constructor ($scope, $stateParams) {
		this.$scope = $scope;

		this.$scope.attrList = attrCollection;
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
		this.$scope.save = this.save;
    }

	save () {
		this.attrList.add(this.attr);
	}

	add () {

	}
}

AttrCtrl.$inject = ['$scope', '$stateParams'];
export default AttrCtrl;
