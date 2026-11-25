declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

export const META_PIXEL_ID = '687065417333976';

export function trackInitiateCheckout(buttonLocation: string): void {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', 'InitiateCheckout', {
      value: 5.0,
      currency: 'USD',
      content_name: 'RUMBO 2027',
      content_type: 'product',
      button_location: buttonLocation,
    });
  }
}
