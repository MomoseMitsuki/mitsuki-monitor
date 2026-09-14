// interface InitOptions {
// 	dsn: string;
// 	integrations?: any[];
// }

// type Transport = BrowserTransport; //| NodeTransport | ImageTransport | XHRTransport | FetchTransport;

// class Monitor {
// 	dsn: string;
// 	integrations: any[];

// 	constructor(options: InitOptions) {
// 		this.dsn = options.dsn;
// 		this.integrations = options.integrations || [];
// 	}

// 	init(transport: Transport) {
// 		transport.send({});
// 	}
// }

// class BrowserTransport {
// 	constructor(private dsn: string) {}

// 	send(data: Record<string, unknown>) {}
// }
import { BrowserTransport } from "./transport";
import { Monitor, Integration } from "@mitsuki/monitor-sdk-core";
import { Metrics } from "@mitsuki/monitor-sdk-browser-utils";
import { Errors } from "./tracing/error";

export const init = (options: { dsn: string; integrations: Array<Integration> }) => {
	console.log("init", options);
	const monitor = new Monitor(options);

	const transport = new BrowserTransport(options.dsn);
	monitor.init(transport);

	// 错误异常采集
	new Errors(transport).init();
	// 性能采集
	new Metrics(transport).init();
	return monitor;
};
