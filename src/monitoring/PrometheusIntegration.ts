import { collectDefaultMetrics, register } from 'prom-client';

export function initPrometheus() {
    collectDefaultMetrics();
}

export async function getMetrics() {
    return await register.metrics();
}


