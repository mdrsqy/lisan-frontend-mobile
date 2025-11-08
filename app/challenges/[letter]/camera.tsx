import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Alert,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";

const StartChallengeScreen = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const letter = params.letter as string;

  const [permission, requestPermission] = useCameraPermissions();
  const [cameraType, setCameraType] = useState<"front" | "back">("front");
  const [currentStep, setCurrentStep] = useState(1);
  const [isCameraActive, setIsCameraActive] = useState(true);

  const totalSteps = 5;
  const primaryColor = "#6d28d9";
  const instructionColor = "#FFB6C1";

  useEffect(() => {
    if (!permission?.granted) {
      requestPermission();
    }
  }, [permission?.granted, requestPermission]);

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    } else {
      Alert.alert("Selesai", `Sesi Huruf ${letter} Selesai!`);
      router.replace("/(tabs)/tantangan");
    }
  };

  const handleToggleCamera = () => {
    if (permission?.granted) {
      setIsCameraActive((prev) => !prev);
    } else {
      Alert.alert(
        "Izin Diperlukan",
        "Aplikasi tidak dapat membuka kamera tanpa izin."
      );
      requestPermission();
    }
  };

  const handleSwitchCamera = () => {
    setCameraType((prev) => (prev === "back" ? "front" : "back"));
  };

  if (!permission) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-white">
        <Text>Memuat izin kamera...</Text>
      </SafeAreaView>
    );
  }

  if (!permission.granted) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center p-5 bg-white">
        <Text className="text-xl text-center mb-4">
          Akses kamera ditolak. Silakan berikan izin di pengaturan perangkat
          Anda.
        </Text>
        <TouchableOpacity
          onPress={requestPermission}
          className="bg-blue-500 py-3 px-6 rounded-lg"
        >
          <Text className="text-white font-bold">Minta Izin Ulang</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 p-5">
        {/* headerr */}
        <View className="flex-row items-center justify-between mb-8">
          <Text className="text-2xl font-bold" style={{ color: primaryColor }}>
            Tantangan Huruf {letter}
          </Text>
          <Text className="text-lg text-gray-500">
            Soal {currentStep}/{totalSteps}
          </Text>
        </View>

        {/* preview */}
        <View className="w-full rounded-xl mb-4 overflow-hidden relative border-4 border-dashed border-gray-300" style={{height:400}}>
          <CameraView
            style={{ flex: 1 }}
            facing={cameraType}
            active={isCameraActive}
          />

          {/* huruf */}
          <View
            className="absolute top-0 left-0 right-0 p-4"
            style={{ backgroundColor: instructionColor }}
          >
            <Text className="text-6xl font-bold text-white opacity-90 text-center">
              {letter}
            </Text>
          </View>

          {/* overlay instruks
          <View className="absolute items-center bottom-3 left-28">
            <Text className="text-xl text-white font-bold drop-shadow-md">
              Arahkan ke tangan
            </Text>
          </View> */}
        </View>

        {/* instruksi */}
        <View className="py-4 rounded-xl border-t border-b border-gray-200 mb-8">
          <Text className="text-base text-gray-600 text-center">
            Instruksi: Lakukan isyarat untuk huruf {letter}
          </Text>
        </View>

        {/* kontrol */}
        <View className="flex-row justify-around">
          {/* Tutup/Buka Kamera */}
          <TouchableOpacity
            onPress={handleToggleCamera}
            className="p-4 rounded-xl items-center w-1/4"
            style={{
              backgroundColor: isCameraActive ? "#f0f0f0" : primaryColor,
            }}
          >
            <Text className="text-2xl">{isCameraActive ? "🔒" : "🔓"}</Text>
            <Text
              className="text-xs mt-1"
              style={{ color: isCameraActive ? "black" : "white" }}
            >
              {isCameraActive ? "Tutup" : "Buka"}
            </Text>
          </TouchableOpacity>

          {/* switch */}
          <TouchableOpacity
            onPress={handleSwitchCamera}
            className="p-4 rounded-xl items-center w-1/4 bg-gray-100"
            disabled={!isCameraActive}
          >
            <Text className="text-2xl">🔄</Text>
            <Text className="text-xs mt-1">Tukar</Text>
          </TouchableOpacity>

          {/* lanjut / selesai */}
          <TouchableOpacity
            onPress={handleNextStep}
            className="p-4 rounded-xl items-center w-1/4 bg-green-500"
          >
            <Text className="text-2xl">➡️</Text>
            <Text className="text-xs mt-1 text-white">
              {currentStep < totalSteps ? "Lanjut" : "Selesai"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* keluar */}
        <TouchableOpacity
          onPress={() => router.back()}
          className="mt-8 py-3 rounded-xl border border-gray-300"
        >
          <Text className="text-gray-600 text-lg text-center">
            Keluar dari Latihan
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default StartChallengeScreen;
