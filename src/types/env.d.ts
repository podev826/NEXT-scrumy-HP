declare namespace NodeJS {
  interface ProcessEnv {
    readonly ALGOLIA_APPLICATION_ID: string;
    readonly ALGOLIA_SEARCH_API_KEY: string;
    readonly ALGOLIA_ADMIN_API_KEY: string;
    readonly MICROCMS_SERVICE_DOMAIN: string;
    readonly MICROCMS_API_KEY: string;
  }
}
