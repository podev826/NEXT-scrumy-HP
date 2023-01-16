declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_ALGOLIA_APPLICATION_ID: string;
    readonly NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY: string;
    readonly ALGOLIA_ADMIN_API_KEY: string;
    readonly SENDGRID_API_KEY: string;
    readonly SENDGRID_FROM_EMAIL_ADDRESS: string;
    readonly SENDGRID_TEMPLATE_ID: string;
    readonly NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN1: string;
    readonly NEXT_PUBLIC_MICROCMS_API_KEY1: string;
    readonly NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN2: string;
    readonly NEXT_PUBLIC_MICROCMS_API_KEY2: string;
    readonly SLACK_WEBHOOK_URL: string;
    readonly NEXT_PUBLIC_GOOGLE_ANALYTICS_ID_PRIMARY: string;
    readonly NEXT_PUBLIC_GOOGLE_ANALYTICS_ID_SECONDARY: string;
  }
}
