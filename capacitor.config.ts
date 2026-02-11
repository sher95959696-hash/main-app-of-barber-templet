
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  // UNIQUE App ID for the client
  appId: 'com.barberpro.elite', 
  
  // Name displayed under the icon
  appName: 'Abrar Hair Salon', 
  
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"]
    }
  }
};

export default config;
