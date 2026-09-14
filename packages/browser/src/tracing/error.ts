import { Transport } from "../transport";

export class Errors {
	constructor(private transport: Transport) {}

	init() {
		window.addEventListener("error", event => {
			this.transport.send({
				event_type: "error",
				type: event.error?.name || "Error",
				message: event.error?.message || event.message,
				stack: event.error?.stack || "",
				path: window.location.pathname
			});
		});

		window.addEventListener("unhandledrejection", event => {
			this.transport.send({
				event_type: "error",
				type: "unhandled_rejection",
				message: event.reason?.message || "Unhandled promise rejection",
				stack: event.reason?.stack || "",
				path: window.location.pathname
			});
		});
	}
}
