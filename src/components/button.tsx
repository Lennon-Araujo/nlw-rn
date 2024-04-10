import { ActivityIndicator, Text, View } from "react-native";
import { TouchableOpacity, TouchableOpacityProps } from "react-native-gesture-handler";


type ButtonProps = TouchableOpacityProps & {
  title: string
  isLoading?: boolean
}

export function Button({ title, isLoading = false, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      disabled={isLoading}
      {...rest}
    >
      <View className="w-full h-14 bg-orange-500 items-center justify-center rounded-lg active:opacity-70">
        {
          isLoading
          ? (<ActivityIndicator className="text-green-500" />)
          : (
            <Text className="text-green-500 text-base font-bold uppercase">
              {title}
            </Text>
          )
        }
      </View>
    </TouchableOpacity>
  )
}