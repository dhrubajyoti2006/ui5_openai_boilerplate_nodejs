import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";
import {Constants} from "../utils/Constants";

/**
 * @namespace com.dhrubajyoti2006.ui5_openai_boilerplate_nodejs.controller
 */
export default class Main extends BaseController {
	private onPressCreate() {
		fetch(Constants.apiUrl + "/create", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({})
		})
			.then(response => response.text())
			.then(data => {
				MessageBox.show(data);
				// Handle success, maybe update UI or clear form
			})
			.catch(error => {
				console.error("Error creating message:", error);
				// Handle any errors here, maybe show user feedback
			});
	}

	public onPressList(): void {
		fetch(Constants.apiUrl + "/list")
			.then(response => response.text())
			.then(data => {
				MessageBox.show(data);
				// JSON.parse(data).data
			})
			.catch(error => {
				console.error("Error fetching data:", error);
				// Handle any errors here
			});
	}

	public onPressGet(): void {
		const id = "12345678";
		fetch(Constants.apiUrl + `/get/${id}`)
			.then(response => response.text())
			.then(data => {
				MessageBox.show(data);
				// JSON.parse(data).data
			})
			.catch(error => {
				console.error("Error fetching data:", error);
				// Handle any errors here
			});
	}

	public onPressUpdate(): void {
		fetch(Constants.apiUrl + "/update", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({})
		})
			.then(response => response.text())
			.then(data => {
				MessageBox.show(data);
				// Handle success, maybe update UI or clear form
			})
			.catch(error => {
				console.error("Error creating message:", error);
				// Handle any errors here, maybe show user feedback
			});
	}

	public onPressDelete(): void {
		const id = "12345678";
		fetch(`${Constants.apiUrl}/delete/${id}`, {
			method: "DELETE"
		})
			.then(response => response.text())
			.then(data => {
				MessageBox.show(data);
			})
			.catch(error => {
				console.error("Error deleting data:", error);
				// Handle any errors here
			});
	}
}
