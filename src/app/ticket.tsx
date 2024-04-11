import { ScrollView, StatusBar, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { Credential } from "@/components/credential";
import { Header } from "@/components/header";
import { colors } from "@/styles/colors";
import { Button } from "@/components/button";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Ticket() {
  return (
    <View className="flex-1 bg-green-500">
      <StatusBar barStyle="light-content" />
      <Header title='Minha credencial' />

      <ScrollView
        className="-mt-28 -z-10"
        contentContainerClassName="px-8 pb-8"
        showsVerticalScrollIndicator={false}
      >
        <Credential />

        <FontAwesome
          name="angle-double-down"
          size={24}
          color={colors.gray[300]}
          className="self-center my-6"
        />

        <Text className="text-white font-bold text-2xl mt-4">
          Compartilhar credencial
        </Text>

        <Text className="text-white font-regular text-base mt-1 mb-6">
          Mostre ao mundo que você vai participar do Unite Summit
        </Text>

        <Button title="Compartilhar" />

        <TouchableOpacity activeOpacity={0.7}>
          <View className="mt-10">
            <Text className="text-base text-white font-bold text-center">Remover Ingresso</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}