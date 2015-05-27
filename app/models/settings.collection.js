
class SettingsCollection extends Backbone.Collection {
	constructor(options) {
		this.model = Backbone.Model;
		this.localStorage = new Backbone.LocalStorage("collection-settings");

		super(options);
	}
}

export default SettingsCollection;
