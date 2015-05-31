import CategoryModel from '../models/category.model.js';

class CategoryCollection extends Backbone.Collection {
	constructor(options) {
		this.model = CategoryModel;
		this.localStorage = new Backbone.LocalStorage("collection-category");
		
		super(options);
	}
}

export default CategoryCollection;
