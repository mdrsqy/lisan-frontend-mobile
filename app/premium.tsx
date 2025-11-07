import { images } from "@/constants/images";
import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

const premium = () => {
  const primaryColor = "#6d28d9";

  // mockup
  const PremiumData = {
    price: "Rp56.000",
    billingCycle: "/bln",
    features: [
      "Tanpa iklan",
      "Life tidak terbatas",
      "Koreksi kesalahan live-translation",
    ],
  };

  const buyPress = () => {
    alert("Maaf fitur belum tersedia 🙏");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1" style={{ backgroundColor: "#f34f6" }}>
        {/* konten */}
        <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
          {/* card */}
          <View
            className="m-5 p-6 rounded-2xl shadow-xl overflow-hidden"
            style={{ backgroundColor: primaryColor, minHeight: height * 0.4 }}
          >
            {/* harga dan siklus */}
            <View className="mb-8">
              <Text className="text-3xl font-extrabold text-white">
                Premium
              </Text>
              <View className="flex-row items-baseline mt-1">
                <Text className="text-4xl font-extrabold text-white">
                  {PremiumData.price}
                </Text>
                <Text className="text-xl font-medium text-white/80 mt-5">
                  {PremiumData.billingCycle}
                </Text>
              </View>
            </View>

            {/* fitur */}
            <View className="space-y-4 mb-10">
              {PremiumData.features.map((feature, index) => (
                <View key={index} className="flex-row items-center">
                  <Text className="text-white text-xl mr-3">✅</Text>
                  <Text className="text-xl text-white font-medium">
                    {feature}
                  </Text>
                </View>
              ))}
            </View>

            {/* catatan */}
            <Text className="text-sm text-white/70 mb-5">
              *Harga termasuk pajak
            </Text>

            {/* button */}
            <TouchableOpacity
              onPress={buyPress}
              className="bg-white py-4 rounded-xl shadow-lg"
            >
              <Text
                className="text-xl font-bold text-center"
                style={{ color: primaryColor }}
              >
                Beli
              </Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
          {/* fox */}
          <View
            className="absolute bottom-[-100px] right-[-10px] opacity-70"
            style={{
              width: width * 0.9,
              height: height * 0.6,
            }}
          >
            <Image
              source={images.fox}
              resizeMode="contain"
              className="w-full h-full"
            />
          </View>
      </View>
    </SafeAreaView>
  );
};

export default premium;
