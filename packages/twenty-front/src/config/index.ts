export const REACT_APP_SERVER_BASE_URL =
  window._env_?.REACT_APP_SERVER_BASE_URL || window.location.origin;

// Empty when unset so sign-out keeps falling back to the in-app sign-in page.
export const REACT_APP_LANDING_PAGE_URL =
  window._env_?.REACT_APP_LANDING_PAGE_URL || '';
