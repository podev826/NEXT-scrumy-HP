declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_ALGOLIA_APPLICATION_ID: string;
    readonly NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY: string;
    readonly ALGOLIA_ADMIN_API_KEY: string;
    readonly SENDGRID_API_KEY: string;
    readonly NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN: string;
    readonly NEXT_PUBLIC_MICROCMS_API_KEY: string;
  }
}
