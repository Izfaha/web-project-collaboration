/**
 * Utility functions for API debugging
 */

export const checkApiConnection = async (url: string): Promise<boolean> => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    
    const response = await fetch(url, { 
      method: 'OPTIONS',
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    return response.ok;
  } catch (error) {
    console.error('API connection check failed:', error);
    return false;
  }
};

export const logApiError = (error: unknown, context: string): void => {
  console.group(`API Error in ${context}`);
  
  if (error instanceof Error) {
    console.error('Error message:', error.message);
    console.error('Stack trace:', error.stack);
  } else {
    console.error('Unknown error:', error);
  }
  
  console.groupEnd();
};

export const debugNetworkStatus = async (): Promise<void> => {
  const status = {
    online: navigator.onLine,
    connection: (navigator as any).connection 
      ? {
          type: (navigator as any).connection.effectiveType,
          downlink: (navigator as any).connection.downlink,
          rtt: (navigator as any).connection.rtt
        }
      : 'Not available'
  };
  
  console.log('Network status:', status);
};
