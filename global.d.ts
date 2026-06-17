import messages from "./src/translation/en.json";

declare module "next-intl" {
  interface AppConfig {
    // ...
    Messages: typeof messages;
  }
}
