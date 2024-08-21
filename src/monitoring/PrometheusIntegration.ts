import { collectDefaultMetrics, Registry } from 'prom-client';

export function initPrometheus() {
  const register = new Registry();
  collectDefaultMetrics({ register });
  return register;

}
