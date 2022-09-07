// PVを測定する
export const pageview = (GA_ID, path) => {
  window.gtag('config', GA_ID, {
    page_path: path,
  });
};
