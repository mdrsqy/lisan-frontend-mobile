import { BlurView } from "expo-blur";
import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";

const GlassAlert = ({ visible, onClose, title, message }: any) => {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View className="flex-1 items-center justify-center">
        <BlurView
          intensity={60}
          tint="systemChromeMaterialLight"
          style={{
            width: "80%",
            padding: 24,
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          <Text className="text-xl font-bold mb-2 text-center">{title}</Text>
          <Text className="text-base text-gray-700 mb-4 text-center">
            {message}
          </Text>
          <TouchableOpacity
            onPress={onClose}
            className="bg-blue-500 py-2 px-4 rounded-xl self-center"
          >
            <Text className="text-white font-semibold">Tutup</Text>
          </TouchableOpacity>
        </BlurView>
      </View>
    </Modal>
  );
};

export default GlassAlert;
