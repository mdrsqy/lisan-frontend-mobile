import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const mockFaq = [
  "Bagaimana cara hapus akun?",
  "Bagaimana cara ganti profile?",
  "Bagaimana cara edit informasi akun?",
];

// pertanyaan
const FaqItem = ({ index, question }: { index: number; question: string }) => (
  <TouchableOpacity className="py-4 border-b border-gray-500 px-5">
    <Text className="text-base text-gray-800">
      {index + 1}.{question}
    </Text>
  </TouchableOpacity>
);

// kontak
const ContactButton = ({
  icon,
  title,
  action,
}: {
  icon: string;
  title: string;
  action: () => void;
}) => (
  <TouchableOpacity
    onPress={action}
    className="bg-white p-4 rounded-xl mb-3 border border-gray-300 sha"
  >
    <View className="flex-row items-center">
      <Text className="text-xl mr-3">{icon}</Text>
      <Text className="text-lg font-medium text-gray-800 flex-1">{title}</Text>
    </View>
  </TouchableOpacity>
);

const Help = () => {
  const [activeTab, setActiveTab] = useState<"Bantuan" | "Hubungi Kami">(
    "Bantuan"
  );

  const handleKontak = (type: string) => {
    alert(`Membuka aplikasi ${type}`);
  };

  const BantuanTab = () => (
    <View>
      {mockFaq.map((q, index) => (
        <FaqItem key={index} index={index} question={q} />
      ))}
    </View>
  );

  const HubungiTab = () => (
    <View>
      <ContactButton
        icon="📧"
        title="Email"
        action={() => handleKontak("Email")}
      />
      <ContactButton
        icon="📞"
        title="Telephone"
        action={() => handleKontak("Telephone")}
      />
      <ContactButton
        icon="📷"
        title="Instagram"
        action={() => handleKontak("Instagram")}
      />
      <ContactButton
        icon="📱"
        title="Whatsapp"
        action={() => handleKontak("Whatsapp")}
      />
    </View>
  );

  const primaryColor = "#6d28d9";

  return (
    <SafeAreaView>
      {/* tab */}
      <View className="flex-row border-b border-gray-200">
        {["Bantuan", "Hubungi Kami"].map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab as "Bantuan" | "Hubungi Kami")}
            className="flex-1 pb-2 relative"
          >
            <View className="w-full items-center">
              <Text
                className="text-lg font-semibold"
                style={{ color: activeTab === tab ? primaryColor : "gray" }}
              >
                {tab}
              </Text>
            </View>
            {activeTab === tab && (
              <View
                className="absolute bottom-[-2px] h-0.5 w-full rounded-full"
                style={{ backgroundColor: primaryColor }}
              />
            )}
          </TouchableOpacity>
        ))}
      </View>

      {/* isi */}
      <ScrollView className="m-4">
        {activeTab === "Bantuan" ? <BantuanTab /> : <HubungiTab />}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Help;
