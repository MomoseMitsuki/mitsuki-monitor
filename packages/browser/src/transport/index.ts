export interface Transport {
	send(data: Record<string, unknown>): void;
}

export class BrowserTransport implements Transport {
	constructor(private dsn: string) {}

	send(data: Record<string, unknown>) {
		const payload = { ...data };

		fetch(this.dsn, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(payload)
		}).catch(error => {
			console.error("Failed to send data:", error);
		});
	}
}
