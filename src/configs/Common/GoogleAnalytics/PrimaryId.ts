export const GA_ID_PRIMARY =
  process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID_PRIMARY ?? '';

// IDが取得できない場合を想定する
export const existsGaIdPrimary = GA_ID_PRIMARY !== '';
