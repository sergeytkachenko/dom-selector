import SiteModel from '../models/site.model.js';

class SiteCollection extends Backbone.Collection {
	constructor(options) {
		this.model = SiteModel;
		this.localStorage = new Backbone.LocalStorage("collection-site");
		
		super(options);
	}
}

export default SiteCollection;
