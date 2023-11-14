import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ultistats.app',
  appName: 'ulti-stats',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
