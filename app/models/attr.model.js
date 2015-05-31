class AttrModel extends Backbone.Model {
	getType () {
		let type = this.get('type');
		return type.title;
	}

	isManyCls () {
		if(this.get('isMany')) {
			return 'fa fa-check-circle-o';
		}
		return 'fa fa-circle-o';
	}
}
export default AttrModel;
