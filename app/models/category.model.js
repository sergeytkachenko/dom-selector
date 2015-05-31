class CategoryModel extends Backbone.Model {
	getProject () {
		let p = this.get('project');
		if(p) return p.name;
		return '';
	}
}
export default CategoryModel;
