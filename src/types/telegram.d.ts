// src/types/telegram.d.ts
declare global {
  interface Window {
    Telegram: {
      WebApp: TelegramWebApp;
    };
  }

  interface TelegramWebApp {
    initData: string;
    initDataUnsafe: {
      user?: {
        id: number;
        first_name: string;
        last_name?: string;
        username?: string;
        language_code?: string;
        is_premium?: boolean;
      };
      auth_date?: number;
      hash?: string;
      query_id?: string;
    };
    version: string;
    platform: string;
    colorScheme: "light" | "dark";
    themeParams: {
      bg_color: string;
      text_color: string;
      hint_color: string;
      link_color: string;
      button_color: string;
      button_text_color: string;
    };
    isExpanded: boolean;
    isClosingConfirmationEnabled: boolean;
    viewportHeight: number;
    viewportStableHeight: number;
    MainButton: {
      text: string;
      color: string;
      textColor: string;
      isVisible: boolean;
      isProgressVisible: boolean;
      isActive: boolean;
      setText: (text: string) => void;
      onClick: (cb: () => void) => void;
      show: () => void;
      hide: () => void;
    };
    expand: () => void;
    ready: () => void;
  }
}

export {};
