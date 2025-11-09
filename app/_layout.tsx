import { Stack } from "expo-router";
import "./globals.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="notifications"
        options={{ headerShown: true, title: "Pesan masuk" }}
      />
      <Stack.Screen
        name="premium"
        options={{ headerShown: true, title: "Langganan" }}
      />
      <Stack.Screen
        name="notifications/[id]"
        options={{ headerShown: true, title: "Detail pesan" }}
      />
      <Stack.Screen
        name="challenges/moreLetters"
        options={{ headerShown: true, title: "Daftar Huruf" }}
      />
      <Stack.Screen
        name="challenges/[letter]"
        options={{ headerShown: true, title: "Tantangan" }}
      />
      <Stack.Screen
        name="challenges/[letter]/start"
        options={{ headerShown: true, title: " "}}
      />
      <Stack.Screen
        name="settings/deleteAccount"
        options={{ headerShown: true, title: "Hapus Akun"}}
      />
      <Stack.Screen
        name="settings/privacy"
        options={{ headerShown: false, title: "Hapus Akun"}}
      />
      <Stack.Screen
        name="settings/help"
        options={{ headerShown: true, title: "Bantuan & Dukungan"}}
      />
      <Stack.Screen
        name="settings/profile"
        options={{ headerShown: false, title: "profile"}}
      />
      <Stack.Screen
        name="profile/infoProfil"
        options={{ headerShown: true, title: "Profile"}}
      />
      <Stack.Screen
        name="users/[id]"
        options={{ headerShown: false, title: "user"}}
      />
    </Stack>
  );
}
