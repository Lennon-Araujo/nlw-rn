import { ActivityIndicator, Pressable, Text, PressableProps } from "react-native";

type ButtonProps = PressableProps & {
  title: string
  isLoading?: boolean
}

export function Button({ title, isLoading = false, ...rest }: ButtonProps) {

  function toogleColor() {

  }

  return (
    <Pressable
      disabled={isLoading}
      className="w-full h-14 bg-orange-500 items-center justify-center rounded-lg active:opacity-70"
      {...rest}
    >
      {
        isLoading
        ? (<ActivityIndicator className="text-green-500" />)
        : (
          <Text className="text-green-500 text-base font-bold uppercase">
            {title}
          </Text>
        )
      }
    </Pressable>
  )
}