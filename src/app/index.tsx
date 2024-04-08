import { Image, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { Input } from '@/components/input'
import { colors } from '@/styles/colors'
import { Button } from '@/components/button'

export default function Home() {
  return (
    <View className='flex-1 bg-green-500 items-center justify-center p-8'>
      <Image source={require("@/assets/logo.png")} className='h-16' resizeMode='contain' />

      <View className='w-full mt-12 gap-3'>
        <Input>
          <MaterialCommunityIcons
            name='ticket-confirmation-outline'
            color={colors.green[200]}
            size={20}
          />
          <Input.Field placeholder='Código de acesso' />
        </Input>

        <Button title='Acessar credencial' />
      </View>
    </View>
  )
}