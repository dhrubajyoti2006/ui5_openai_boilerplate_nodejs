import BaseController from "./BaseController";

/**
 * @namespace com.dhrubajyoti2006.ui5_openai_boilerplate_nodejs.controller
 */
export default class App extends BaseController {
	public onInit(): void {
		// apply content density mode to root view
		this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
	}
}
