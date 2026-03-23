import ReactGA from "react-ga4";

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export const initGA = () => {
  if (MEASUREMENT_ID) {
    ReactGA.initialize(MEASUREMENT_ID);
    console.log("Google Analytics initialized");
  } else {
    console.warn("Google Analytics Measurement ID is missing. Analytics will not be initialized.");
  }
};

export const trackPageView = (path: string) => {
  if (MEASUREMENT_ID) {
    ReactGA.send({ hitType: "pageview", page: path });
  }
};

export const trackEvent = (category: string, action: string, label?: string) => {
  if (MEASUREMENT_ID) {
    ReactGA.event({
      category,
      action,
      label,
    });
  }
};
