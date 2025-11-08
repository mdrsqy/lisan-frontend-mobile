import LisanBacground from "@/components/LisanBacground";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const deleteAccount = () => {
  const handleDelete = () => {
    alert("Akun dihapus");
  };
  return (
    <SafeAreaView>
      <LisanBacground />
      <View className="justify-center items-center m-4">
        <View>
          <Text>
            Akun Anda akan dihapus selamanya beserta semua data dan riwayat
            terkait. Tindakan ini tidak bisa dibatalkan.
          </Text>
        </View>

        <TouchableOpacity
          className="bg-red-600 w-full justify-center items-center rounded-xl h-14 mt-7"
          onPress={handleDelete}
        >
          <View>
            <Text className="text-white font-bold text-xl">Hapus akun</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default deleteAccount;
