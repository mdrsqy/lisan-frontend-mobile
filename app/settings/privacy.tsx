import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { height } = Dimensions.get("window");

const Privacy = () => {
  const router = useRouter();
  const scrollViewRef = useRef<ScrollView>(null);
  const [scrollPosition, setScrollPosition] = useState<
    "top" | "middle" | "bottom"
  >("top");

  const handleAgree = () => {
    router.push("/(tabs)/pengaturan");
  };

  const handleScrollToBottom = () => {
    scrollViewRef.current?.scrollTo({ y: height * 0.8, animated: true });
  };

  const handleScrollToTop = () => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  };

  const handleScroll = (event: any) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    const contentHeight = event.nativeEvent.contentSize.height;
    const layoutHeight = event.nativeEvent.layoutMeasurement.height;

    if (scrollY + layoutHeight >= contentHeight - 50) {
      setScrollPosition("bottom");
    } else if (scrollY <= 50) {
      setScrollPosition("top");
    } else {
      setScrollPosition("middle");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* headernya */}
      <View className="px-6 py-4 border-b border-gray-200 items-center">
        <Text className="text-2xl font-bold text-gray-800">
          Ketentuan Layanan
        </Text>
        <Text className="text-sm text-gray-500 mt-1">
          Terakhir diperbarui pada 30/09/2025
        </Text>
      </View>

      <ScrollView
        ref={scrollViewRef}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        className="px-6"
      >
        {/* isi */}
        <View className="mt-6 space-y-6">
          <View>
            <Text className="text-lg font-semibold text-gray-800 mb-2">
              1. Penggunaan Aplikasi
            </Text>
            <Text className="text-base text-gray-700 leading-relaxed">
              Aplikasi LISAN dibuat untuk membantu komunikasi menggunakan bahasa
              isyarat dengan dukungan teknologi kecerdasan buatan. Setiap
              pengguna diharapkan menggunakan aplikasi ini secara bertanggung
              jawab, misalnya untuk berkomunikasi, belajar, atau mendukung
              interaksi sehari-hari. Aplikasi ini tidak boleh dipakai untuk
              hal-hal yang merugikan orang lain, menyalahi aturan, atau
              melanggar hukum yang berlaku.
            </Text>
          </View>

          <View className="mt-6">
            <Text className="text-lg font-semibold text-gray-800 mb-2">
              2. Privasi dan Keamanan Data
            </Text>
            <Text className="text-base text-gray-700 leading-relaxed">
              LISAN menjaga kerahasiaan data yang diberikan pengguna, baik
              berupa informasi akun maupun data interaksi di dalam aplikasi.
              Kami berkomitmen untuk melindungi data tersebut sesuai standar
              keamanan yang berlaku. Meski begitu, pengguna tetap perlu menjaga
              kerahasiaan akun, termasuk kata sandi atau akses perangkat,
              karena segala aktivitas yang terjadi melalui akun tetap menjadi
              tanggung jawab pribadi pengguna.
            </Text>
          </View>

          <View className="mt-6">
            <Text className="text-lg font-semibold text-gray-800 mb-2">
              3. Pembaruan dan Ketersediaan Layanan
            </Text>
            <Text className="text-base text-gray-700 leading-relaxed">
              Untuk memastikan kualitas layanan tetap baik, LISAN akan terus
              melakukan pembaruan fitur, perbaikan sistem, dan peningkatan
              performa aplikasi. Pada kondisi tertentu, layanan bisa saja
              dihentikan sementara, mengalami gangguan teknis, atau diperbarui
              tanpa pemberitahuan sebelumnya. Namun, setiap langkah pembaruan
              dilakukan dengan tujuan agar pengguna mendapatkan pengalaman yang
              lebih baik dan lebih nyaman.
            </Text>
          </View>
        </View>

        {/* spacer */}
        <View className="h-32" />
      </ScrollView>

      {/* tombol */}
      <View className="px-6 pb-6 space-y-4">
        <TouchableOpacity
          onPress={handleAgree}
          className="bg-blue-600 py-4 rounded-xl mb-2"
        >
          <Text className="text-white text-center text-lg font-semibold">
            Setuju & Lanjutkan
          </Text>
        </TouchableOpacity>

        {scrollPosition !== "bottom" && (
          <TouchableOpacity
            onPress={handleScrollToBottom}
            className="border border-gray-300 py-3 rounded-xl mb-2"
          >
            <Text className="text-gray-700 text-center font-medium">
              Geser ke Bawah
            </Text>
          </TouchableOpacity>
        )}

        {scrollPosition === "middle" && (
          <TouchableOpacity
            onPress={handleScrollToTop}
            className="border border-gray-300 py-3 rounded-xl"
          >
            <Text className="text-gray-700 text-center font-medium">
              Geser ke Atas
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Privacy;
