interface AppConfig {
  appName: string;
  version: string; // "1.6.0"
  debug: boolean;
  port: number;
  database: {
    host: string;
    port: number;
    userName: string;
    password: string;
  };
  features: {
    registration: boolean;
    darkMode: boolean;
  };
}

// const config: AppConfig = {

// }

// we can use tihs by modular system

interface Database {
  host: string;
  port: number;
  userName: string;
  password: string;
}

interface Features {
  registration: boolean;
  darkMode: boolean;
}

type AppConfigUpdated = {
  appName: string;
  version: string; // "1.6.0"
  debug: boolean;
  port: number;
  database: Database;
  features: Features;
};
