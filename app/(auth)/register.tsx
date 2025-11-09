import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const primaryPurple = "#6d28d9";

const AuthInput = ({
  label,
  isSecure = false,
  placeholder,
  keyboardType = "default",
}: {
  label: string;
  isSecure?: boolean;
  placeholder?: string;
  keyboardType?: "default" | "email-address" | "numeric";
}) => (
  <TextInput
    placeholder={placeholder || label}
    placeholderTextColor="#a1a1a1"
    secureTextEntry={isSecure}
    keyboardType={keyboardType}
    className="border-b border-gray-300 text-lg py-3 mb-4 text-gray-800"
  />
);

const RegisterScreen = () => {
  const router = useRouter();
  const params = useLocalSearchParams();

  const initialTab = (params.initialTab as "Daftar" | "Masuk") || "Daftar";
  const [activeTab, setActiveTab] = useState<"Daftar" | "Masuk">(initialTab);

  // daftar
  const RegisterForm = () => (
    <View className="mt-8">
      <AuthInput label="Nama Lengkap" placeholder="Nama Lengkap" />
      <AuthInput
        label="Email"
        placeholder="Email"
        keyboardType="email-address"
      />
      <AuthInput label="Password" placeholder="Password" isSecure={true} />

      <TouchableOpacity
        onPress={() => router.push("/confirmationCode" as any)}
        className="w-full py-4 rounded-xl shadow-md mt-6 bg-black"
      >
        <Text className="text-xl font-bold text-white text-center">Daftar</Text>
      </TouchableOpacity>

      <View className="flex-row justify-center mt-4">
        <Text className="text-sm text-gray-600">Sudah memiliki akun? </Text>
        <TouchableOpacity onPress={() => setActiveTab("Masuk")}>
          <Text className="text-sm font-bold" style={{ color: primaryPurple }}>
            Masuk
          </Text>
        </TouchableOpacity>
      </View>

      <Text className="text-xs text-center text-gray-500 mt-6">
        Dengan membuat akun, Anda setuju dengan Syarat dan Ketentuan kami.
      </Text>
    </View>
  );

  // login
  const LoginForm = () => (
    <View className="mt-8">
      <Text className="text-3xl font-bold text-gray-800 mb-6">
        Halo, Listener 👋
      </Text>

      <AuthInput
        label="Email"
        placeholder="Email"
        keyboardType="email-address"
      />
      <AuthInput label="Password" placeholder="Password" isSecure={true} />

      <TouchableOpacity onPress={() => router.push("/forgotPassword" as any)}>
        <Text
          className="text-sm text-right mb-6"
          style={{ color: primaryPurple }}
        >
          Lupa password?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.replace("/(tabs)/" as any)}
        className="w-full py-4 rounded-xl shadow-md bg-black"
      >
        <Text className="text-xl font-bold text-white text-center">Masuk</Text>
      </TouchableOpacity>

      <View className="flex-row justify-center mt-4">
        <Text className="text-sm text-gray-600">Belum memiliki akun? </Text>
        <TouchableOpacity onPress={() => setActiveTab("Daftar")}>
          <Text className="text-sm font-bold" style={{ color: primaryPurple }}>
            Daftar disini
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-white p-8">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text className="text-4xl font-bold mb-8">Selamat Datang</Text>

        {/* tab */}
        <View className="flex-row border-b border-gray-300 mb-4">
          {["Daftar", "Masuk"].map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab as "Daftar" | "Masuk")}
              className={`flex-1 pb-2 relative mr-2`}
            >
              <Text
                className="text-xl font-bold text-center"
                style={{ color: activeTab === tab ? "black" : "gray" }}
              >
                {tab}
              </Text>
              {activeTab === tab && (
                <View
                  className="absolute bottom-[-2px] h-1 w-full"
                  style={{ backgroundColor: primaryPurple }}
                />
              )}
            </TouchableOpacity>
          ))}
        </View>

        {activeTab === "Daftar" ? <RegisterForm /> : <LoginForm />}
      </ScrollView>
    </SafeAreaView>
  );
};
export default RegisterScreen;
