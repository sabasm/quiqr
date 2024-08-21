import { z } from 'zod';

export const dashboardMetricsSchema = z.object({
  totalUsers: z.number().int().nonnegative(),
  activeSubscriptions: z.number().int().nonnegative(),
  revenue: z.number().nonnegative(),
});

export const validateDashboardMetrics = (data: unknown) => dashboardMetricsSchema.parse(data);


