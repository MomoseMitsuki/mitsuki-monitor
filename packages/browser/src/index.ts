interface InitOptions {
	dsn: string;
	integrations?: any[];
}

type Transport = BrowserTransport; //| NodeTransport | ImageTransport | XHRTransport | FetchTransport;

class Monitor {
	dsn: string;
	integrations: any[];

	constructor(options: InitOptions) {
		this.dsn = options.dsn;
		this.integrations = options.integrations || [];
	}

	init(transport: Transport) {
		transport.send({});
	}
}

class BrowserTransport {
	constructor(private dsn: string) {}

	send(data: Record<string, unknown>) {}
}

export const init = (options: InitOptions) => {
	console.log("init", options);
	const monitor = new Monitor(options);

	const transport = new BrowserTransport(options.dsn);
	monitor.init(transport);

	// 错误异常采集

	// 性能采集
	return monitor;
};
