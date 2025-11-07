import { Text, View, Image } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

const upgrade = () => {
  return (
    <View className="bg-black flex-1 px-10">
          <View className="flex justify-center items-center flex-1 flex-col gap-5">
            <Image source={icons.star} className="size-10" tintColor="#fff" />
            <Text className="text-gray-500 text-base">Upgrade</Text>
          </View>
        </View>
  )
}

export default upgrade