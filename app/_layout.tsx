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
    </Stack>
  );
}
