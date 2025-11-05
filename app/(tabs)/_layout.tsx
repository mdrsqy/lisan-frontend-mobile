import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";

const TabIcon = ({ focused, icon, title }: any) => {
  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className="flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden"
      >
        <Image source={icon} tintColor="#151312" className="size-5" />
        <Text className="text-secondary text-base font-semibold ml-2">
          {title}
        </Text>
      </ImageBackground>
    );
  }

  return (
    <View className="size-full justify-center items-center mt-4 rounded-full">
      <Image source={icon} tintColor="#a8b5db" className="size-5" />
    </View>
  );
};

const _layout = () => {
  return (
    <Tabs
    screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
        },
        tabBarStyle: {
            backgroundColor: '#0f0d23',
            borderRadius: 50,
            marginHorizontal: 20,
            marginBottom: 36,
            height: 52,
            position:'absolute',
            overflow: 'hidden',
            borderWidth: 0,
            borderColor: '#0f0d23',

        }
    }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} title="Beranda" />
          ),
        }}
      />
      <Tabs.Screen
        name="tantangan"
        options={{
          title: "Tantangan",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.tantangan} title="Tantangan" />
          ),
        }}
      />
      <Tabs.Screen
        name="teman"
        options={{
          title: "Teman",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.teman} title="Teman" />
          ),
        }}
      />
      <Tabs.Screen
        name="pengaturan"
        options={{
          title: "Pengaturan",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.pengaturan} title="Pengaturan" />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
