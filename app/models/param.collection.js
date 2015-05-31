import ParamModel from '../models/param.model.js';

class ParamCollection extends Backbone.Collection {
	constructor(options) {
		this.model = ParamModel;
		this.localStorage = new Backbone.LocalStorage("collection-param");
		
		super(options);
	}
}

export default ParamCollection;
