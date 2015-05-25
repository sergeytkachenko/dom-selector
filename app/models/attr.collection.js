import AttrModel from '../models/attr.model.js';

class AttrCollection extends Backbone.Collection {
	constructor() {
		super();

		this.model = AttrModel;
		this.localStorage = new Backbone.LocalStorage("collection.attr");
	}
}

let attrCollection = new AttrCollection;
attrCollection.fetch({
	success : () => {
		_.each(attrCollection.models, function (asa) {
			console.log(asa.get('id'), asa.get('name'));
		});

	}
});
//attrCollection.bind('change add remove', attrCollection.saveAll, attrCollection); // saved in event

export default attrCollection;
