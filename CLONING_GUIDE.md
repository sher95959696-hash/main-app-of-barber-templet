
# 🚀 Step-by-Step Rebranding Guide (Naye Client Ke Liye)

Agar aap kisi naye client ko ye app bech rahe hain, toh ye 6 kaam karein:

### Step 1: Firebase Project Setup
1. [Firebase Console](https://console.firebase.google.com/) pe naya project banayein.
2. **Firestore**: Enable karein aur rules mein `allow read, write: if true;` rakhein.
3. **Web App**: Project settings mein ja kar "Web App" add karein aur config keys copy karein.
4. **Cloud Messaging**: "Web Push certificates" mein VAPID key generate karein.
5. **Keys Update**: `firebase.ts` mein naye project ki keys aur VAPID key paste kar dein.

### Step 2: Branding Update
1. `constants.tsx` kholien.
2. `DEFAULT_BRANDING` mein client ki shop ka naam, logo aur primary color change karein.

### Step 3: Android Build Config
1. `capacitor.config.ts` kholien.
2. `appId` ko unique banayein (e.g., `com.client_name.app`).
3. `appName` mein shop ka naam likhein.

### Step 4: Mobile App Icon (IMPORTANT ⚠️)
1. **File Taiyar Karein**: Client ka logo lein, uska size **1024x1024 pixels** (Square) hona chahiye aur format **PNG**.
2. **Rename Karein**: Image ka naam sirf `icon.png` rakhein.
3. **Upload Karein**: Is `icon.png` file ko apne GitHub repository ke **bilkul bahar (root folder)** mein upload karein (jahan `package.json` file pari hai).
4. GitHub Actions khud isay pakar kar Android icon bana dega.

### Step 5: Cloudinary Setup
1. Admin Panel -> Setup tab mein client ka Cloudinary Cloud Name aur Preset save karein.

### Step 6: Generate APK
1. GitHub pe commit push karein.
2. **Actions** tab mein jayein aur build khatam hone ka intezar karein.
3. "Artifacts" mein se `app-debug-apk` download kar lein.

---
**Tip**: Agar icon change nahi hota, toh purani app phone se delete karke naya APK install karein.
