import Control from "sap/ui/core/Control";
import RenderManager from "sap/ui/core/RenderManager";
import type { MetadataOptions } from "sap/ui/core/Element";

/**
 * @namespace com.dhrubajyoti2006.ui5_openai_boilerplate_nodejs.control
 */
export default class Example extends Control {

	static readonly metadata: MetadataOptions = {
		properties: {
		}
	}

	renderer = {
		apiVersion: 2,
		render: (rm: RenderManager, control: Example) => {
			rm.openStart("div", control);
			rm.style("font-size", "2rem");
			rm.style("width", "2rem");
			rm.style("height", "2rem");
			rm.style("display", "inline-block");
			rm.style("color", "blue");
			rm.openEnd();
			rm.text("Example custom control");
			rm.close("div");
		}
	}
}
