/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TERMLY_UUID: string;
  readonly VITE_TERMLY_PRIVACY_ID: string;
  readonly VITE_TERMLY_TERMS_ID: string;
  // add more env variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
