import { useRouter } from "expo-router";
import React from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity } from "react-native";

const ForgotPasswordScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white p-8">
      <TouchableOpacity onPress={() => router.back()} className="mb-10">
        <Text className="text-3xl font-light text-gray-700">&lt;</Text>
      </TouchableOpacity>

      <Text className="text-3xl font-bold mb-4">Lupa Password?</Text>
      <Text className="text-base text-gray-600 mb-10">
        Masukkan email Anda, dan kami akan mengirimkan tautan untuk mengatur
        ulang password.
      </Text>

      <TextInput
        placeholder="Email Anda"
        placeholderTextColor="#a1a1a1"
        keyboardType="email-address"
        className="border-b border-gray-300 text-lg py-3 mb-8 text-gray-800"
      />

      <TouchableOpacity
        onPress={() => router.push("/register" as any)}
        className="w-full py-4 rounded-xl shadow-md bg-black"
      >
        <Text className="text-xl font-bold text-white text-center">
          Kirim Link Reset
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default ForgotPasswordScreen;
