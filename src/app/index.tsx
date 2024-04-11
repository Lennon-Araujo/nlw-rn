import { useState } from 'react'
import { Alert, Image, StatusBar, View } from 'react-native'
import { Link, Redirect } from 'expo-router'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { api } from '@/server/api'

import { colors } from '@/styles/colors'
import { Input } from '@/components/input'
import { Button } from '@/components/button'
import { useBadgeStore } from '@/store/badge-store'

export default function Home() {
  const [accessCode, setAccessCode] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const badgeStore = useBadgeStore()

  async function handleAccessCredential() {
    try {
      if(!accessCode.trim()) {
        return Alert.alert('Credencial', "Informe o código do ingresso")
      }
      setIsLoading(true)

      const { data } = await api.get(`/attendees/${accessCode}/badge`)
      badgeStore.save(data.badge)
      
    } catch (error) {
      console.log(error);
      setIsLoading(false)
      Alert.alert("Ingresso", "Ingresso não encontrado")
    }
  }

  if(badgeStore.data?.checkInURL) {
    return <Redirect href="/ticket" />
  }

  return (
    <View className='flex-1 bg-green-500 items-center justify-center p-8'>
      <StatusBar barStyle="light-content" />
      <Image source={require("@/assets/logo.png")} className='h-16' resizeMode='contain' />

      <View className='w-full mt-12 gap-3'>
        <Input>
          <MaterialCommunityIcons
            name='ticket-confirmation-outline'
            color={colors.green[200]}
            size={20}
          />
          <Input.Field placeholder='Código de acesso' onChangeText={setAccessCode} />
        </Input>

        <Button title='Acessar credencial' isLoading={isLoading} onPress={() => handleAccessCredential()} />

        <Link href='/register' className='text-gray-100 text-base font-bold text-center mt-8'>Ainda não possui ingresso?</Link>
      </View>
    </View>
  )
}