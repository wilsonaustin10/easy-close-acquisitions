const rateStore = new Map<string, { count: number; resetTime: number }>();

export async function rateLimit(ip: string) {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute window
  const maxRequests = 10; // 10 requests per minute

  const userRateData = rateStore.get(ip);

  if (!userRateData || now > userRateData.resetTime) {
    rateStore.set(ip, {
      count: 1,
      resetTime: now + windowMs
    });
    return { success: true };
  }

  if (userRateData.count >= maxRequests) {
    const retryAfter = Math.ceil((userRateData.resetTime - now) / 1000);
    return { success: false, retryAfter };
  }

  userRateData.count++;
  return { success: true };
}