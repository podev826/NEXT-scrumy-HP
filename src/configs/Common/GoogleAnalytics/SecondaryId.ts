export const GA_ID_SECONDARY =
  process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID_SECONDARY ?? '';

// IDが取得できない場合を想定する
export const existsGaIdSecondary = GA_ID_SECONDARY !== '';
