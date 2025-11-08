import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

// --- DATA KONSTAN DAN WARNA ---
const initialUserData = {
  name: "First User",
  username: "FirstUser",
  email: "user@example.com",
  password: "••••••••",
};

const gradientStart = "#ff7f50";
const gradientEnd = "#2600FF";

// --- INTERFACE UNTUK INPUT (DIPERLUKAN UNTUK TYPESCRIPT) ---
interface ProfileInputProps {
  label: string;
  value: string;
  fieldName: keyof typeof initialUserData;
  isSecure?: boolean;
  isEditing: boolean;
  onChangeText: (text: string) => void;
}

// --- KOMPONEN INPUT TERPISAH (UNTUK STABILITAS KEYBOARD) ---
const ProfileInput: React.FC<ProfileInputProps> = ({
  label,
  value,
  fieldName,
  isSecure = false,
  isEditing,
  onChangeText,
}) => (
  <View className="mb-4">
    <Text className="text-sm text-gray-500 mb-1">{label}</Text>
    <TextInput
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={isSecure && !isEditing}
      editable={isEditing}
      placeholder={label}
      // Memastikan key unik untuk stabilitas
      key={fieldName} 
      className={`border-b ${
        isEditing ? "border-gray-400" : "border-gray-200"
      } text-lg py-2`}
      style={{ color: isEditing ? "black" : "gray" }}
    />
  </View>
);

// --- KOMPONEN UTAMA ---
const InfoProfil = () => {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(initialUserData);

  const handleSave = () => {
    alert("Data berhasil disimpan!");
    setIsEditing(false);
    // Navigasi kembali ke halaman profil utama setelah menyimpan
    router.push("/settings/profile" as any); 
  };

  const editPress = () => {
    if (isEditing) {
      handleSave();
    } else {
      setIsEditing(true);
    }
  };

  // Handler onChange yang digunakan berulang
  const createChangeHandler = (field: keyof typeof initialUserData) => (text: string) => {
    setUserData(prev => ({ ...prev, [field]: text }));
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 z-10 px-5 pt-4">
        {/* Header (Back dan Title) harusnya ada di sini, tapi dihilangkan karena fokus pada body */}

        <View className="mb-10">
          <ProfileInput 
            label="Nama" 
            value={userData.name} 
            fieldName="name" 
            isEditing={isEditing}
            onChangeText={createChangeHandler('name')}
          />
          <ProfileInput
            label="Username"
            value={userData.username}
            fieldName="username"
            isEditing={isEditing}
            onChangeText={createChangeHandler('username')}
          />
          <ProfileInput
            label="Email"
            value={userData.email}
            fieldName="email"
            isEditing={isEditing}
            onChangeText={createChangeHandler('email')}
          />
          <ProfileInput
            label="Password"
            value={userData.password}
            fieldName="password"
            isSecure={true}
            isEditing={isEditing}
            onChangeText={createChangeHandler('password')}
          />
        </View>

        {/* Tombol Aksi (Edit / Simpan) */}
        <TouchableOpacity
          onPress={editPress}
          className="py-4 rounded-xl shadow-md items-center justify-center"
          style={{ backgroundColor: isEditing ? gradientEnd : gradientStart }}
        >
          <Text className="text-xl font-bold text-white">
            {isEditing ? "Simpan" : "Edit profil"}
          </Text>
        </TouchableOpacity>

        <View className="h-20" />
      </ScrollView>

      {/* Background Visual (Fox Mascot) */}
      <View
        className="absolute bottom-[-100px] right-[-10px] opacity-70"
        style={{
          width: width * 0.9,
          height: height * 0.6,
        }}
      >
        <Image
          source={require("@/assets/images/fox.png")}
          resizeMode="contain"
          className="w-full h-full"
        />
      </View>
    </SafeAreaView>
  );
};

export default InfoProfil;