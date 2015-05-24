'use strict';

class AttrCtrl {
    constructor ($scope, $stateParams) {
        this.$scope = $scope;
		this.$scope.attr = {
			'name' : 'Name',
			'alias' : "Alias Name",
			'typeId' : $stateParams.id // id from url
		}

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
    }
}

AttrCtrl.$inject = ['$scope', '$stateParams'];
export default AttrCtrl;
