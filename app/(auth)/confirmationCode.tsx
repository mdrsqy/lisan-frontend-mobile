import { useRouter } from "expo-router";
import React from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const ConfirmationCodeScreen = () => {
  const router = useRouter();
  const primaryPurple = "#6d28d9";

  const CodeInput = () => (
    <View className="flex-row justify-between w-full max-w-sm mb-8">
      {[1, 2, 3, 4, 5].map((i) => (
        <TextInput
          key={i}
          maxLength={1}
          keyboardType="number-pad"
          className="w-12 h-16 text-2xl font-bold text-center border-b-4 border-gray-400 bg-gray-100 rounded-lg text-black"
        />
      ))}
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-white p-8">
      <TouchableOpacity onPress={() => router.back()} className="mb-10">
        <Text className="text-3xl font-light text-gray-700">&lt;</Text>
      </TouchableOpacity>

      <Text className="text-3xl font-bold mb-4">Masukkan kode</Text>
      <Text className="text-base text-gray-600 mb-10">
        Kode aktivasi telah dikirim ke user@example.com (contoh)
      </Text>

      <CodeInput />

      <TouchableOpacity
        onPress={() => router.replace("/(tabs)/" as any)}
        className="w-full py-4 rounded-xl shadow-md mt-6 bg-black max-w-sm"
      >
        <Text className="text-xl font-bold text-white text-center">
          Verifikasi
        </Text>
      </TouchableOpacity>

      <TouchableOpacity className="mt-4">
        <Text
          className="text-sm font-bold text-center"
          style={{ color: primaryPurple }}
        >
          Kirim ulang kode?
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default ConfirmationCodeScreen;
