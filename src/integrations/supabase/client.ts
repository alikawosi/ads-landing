/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TERMLY_PRIVACY_ID: string;
  readonly VITE_TERMLY_TERMS_ID: string;
  readonly VITE_TERMLY_UUID: string;
  readonly VITE_DEMO_URL: string;
  readonly VITE_APP_URL: string;
  readonly VITE_YEARLY_SUBSCRIPTION_PRICE_DISCOUNT: string;
  readonly VITE_APP_PRO_PRICE: string;
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;

  // add more env variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
