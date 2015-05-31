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
					'title' : 'Text'
				},{
					id: 2,
					'title' : 'Image'
				},{
					id: 3,
					'title' : 'Integer'
				},{
					id: 4,
					'title' : 'Double'
				},{
					id: 5,
					'title' : 'Boolean'
				},{
					id: 6,
					'title' : 'Date'
				}
			];

			// TODO написать директиву для автоматического выбора selected
			let type = _.findWhere(this.$scope.attrTypeList, this.$scope.attr.attributes.type);
			this.$scope.attr.attributes.type = this.$scope.attrTypeList[type.id-1];
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
