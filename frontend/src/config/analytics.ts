import ReactGA from 'react-ga4';

export const initGA = () => {
  if (process.env.NODE_ENV === 'production') {
    ReactGA.initialize('G-X47HVN7XYN');
  }
};

export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};

export const logEvent = (category: string, action: string) => {
  ReactGA.event({
    category: category,
    action: action,
  });
};