import { Transport } from "@mitsuki/monitor-sdk-core";
import { onCLS, onFCP, onINP, onLCP, onTTFB } from "web-vitals";

export class Metrics {
	constructor(private transport: Transport) {}

	init() {
		[onCLS, onFCP, onINP, onLCP, onTTFB].forEach(metricFn => {
			metricFn(metric => {
				this.transport.send({
					event_type: "metric",
					type: "web_vitals",
					name: metric.name,
					value: metric.value,
					path: window.location.pathname
				});
			});
		});
	}
}
