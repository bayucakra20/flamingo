/*::

declare class Config extends Object{
  VERSION: string;
  DEBUG: boolean;
  DEFAULT_MIME: string;
  NATIVE_AUTO_ORIENT: boolean;
  ALLOW_READ_REDIRECT: boolean;
  ROUTES: RouteConfig;
  SUPPORTED: SupportedConfig;
  READER: ReaderConfig;
  PORT: number;
  PREPROCESSOR: PreprocessorConfig;
  ACCESS: AccessConfig;
  CRYPTO: CryptoConfig;
  ENCODE_PAYLOAD: (plaintext: string) => Promise<string>;
  DECODE_PAYLOAD: (ciphertext: string) => Promise<string>;
}

declare type RouteConfig = {
  INDEX: boolean;
  PROFILE_CONVERT_IMAGE: boolean;
  PROFILE_CONVERT_VIDEO: boolean;
}

declare type SupportedConfig = {
  FFMPEG?: boolean;
  GM: { WEBP: boolean };
}

declare type ReaderConfig = {
  REQUEST: { TIMEOUT: number }
}

declare type PreprocessorConfig = {
  VIDEO: { KILL_TIMEOUT: number };
}

declare type AccessConfig = {
  FILE: { READ: Array<string>, WRITE: Array<string> };
  HTTPS: { ENABLED: boolean, READ: Array<UrlParse>, WRITE: Array<UrlParse>};
}

declare type CryptoConfig = {
  ENABLED: boolean;
  KEY: Buffer;
  IV: Buffer;
  CIPHER: string;
}

*/
