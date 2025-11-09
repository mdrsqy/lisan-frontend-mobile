import LisanBacground from "@/components/LisanBacground";
import GlassAlert from "@/components/GlassAlert";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DeleteAccount = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleDelete = () => {
    setShowAlert(true);
  };

  return (
    <SafeAreaView>
      <LisanBacground />

      <GlassAlert
        visible={showAlert}
        onClose={() => setShowAlert(false)}
        title="Akun Dihapus"
        message="Akun Anda telah berhasil dihapus secara permanen."
      />

      <View className="justify-center items-center m-4">
        <View>
          <Text className="text-center text-base text-gray-700">
            Akun Anda akan dihapus selamanya beserta semua data dan riwayat
            terkait. Tindakan ini tidak bisa dibatalkan.
          </Text>
        </View>

        <TouchableOpacity
          className="bg-red-600 w-full justify-center items-center rounded-xl h-14 mt-7"
          onPress={handleDelete}
        >
          <Text className="text-white font-bold text-xl">Hapus akun</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DeleteAccount;
