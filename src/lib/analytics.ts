declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
    dataLayer: any[];
  }
}

export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with real GA ID

export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Business-specific tracking events
export const trackBookingClick = () => {
  trackEvent('click', 'booking', 'booksy_cta');
};

export const trackPhoneClick = () => {
  trackEvent('click', 'contact', 'phone');
};

export const trackEmailClick = () => {
  trackEvent('click', 'contact', 'email');
};

export const trackSocialClick = (platform: string) => {
  trackEvent('click', 'social', platform);
};
