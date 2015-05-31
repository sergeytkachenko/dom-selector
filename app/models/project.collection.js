import ProjectModel from '../models/project.model.js';

class ProjectCollection extends Backbone.Collection {
	constructor(options) {
		this.model = ProjectModel;
		this.localStorage = new Backbone.LocalStorage("collection-project");
		
		super(options);
	}
}

export default ProjectCollection;
