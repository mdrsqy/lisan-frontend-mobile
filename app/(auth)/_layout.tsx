import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="authIndex" options={{ headerShown: false }} />

      <Stack.Screen name="register" options={{ headerShown: false }} />
      <Stack.Screen name="confirmationCode" options={{ headerShown: false }} />
      <Stack.Screen name="forgotPassword" options={{ headerShown: false }} />
      <Stack.Screen name="resetPassword" options={{ headerShown: false }} />
    </Stack>
  );
}
