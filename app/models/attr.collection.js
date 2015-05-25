import AttrModel from '../models/attr.model.js';

class AttrCollection extends Backbone.Collection {
	constructor(options) {
		this.model = AttrModel;
		this.localStorage = new Backbone.LocalStorage("collection-attr");
		
		super(options);
	}
}

let attrCollection = new AttrCollection;
attrCollection.bind('add', function () {
	console.log("add");
});
attrCollection.bind('reset', function () {
	console.log("reset", arguments);
});
attrCollection.bind('change:completed',function () {
	console.log("change:completed");
});
attrCollection.bind('filter', function () {
	console.log("filter");
});


//attrCollection.bind('change add remove', attrCollection.saveAll, attrCollection); // saved in event

export default attrCollection;
