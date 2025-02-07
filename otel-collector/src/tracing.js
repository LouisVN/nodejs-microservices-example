/* tracing.js */

// Require dependencies
const opentelemetry = require("@opentelemetry/sdk-node");
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-grpc');
const { getNodeAutoInstrumentations } = require("@opentelemetry/auto-instrumentations-node");

const sdk = new opentelemetry.NodeSDK({
  // sending traces to console for debugging
  //  traceExporter: new opentelemetry.tracing.ConsoleSpanExporter(),
  traceExporter: new OTLPTraceExporter({}),
  // if you want to set url in code
  //  traceExporter: new OTLPTraceExporter({url: 'http://satellite:8383'}), // For Lightstep microsatellite
  //  traceExporter: new OTLPTraceExporter({url: 'grpc://otel-collector:4317'}), // For Otel Colelctor
  instrumentations: [getNodeAutoInstrumentations()]
});

sdk.start()
