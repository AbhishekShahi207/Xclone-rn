import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SignOutButon from '@/components/SignOutButon'

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <SignOutButon/>
    </SafeAreaView>
  )
}

export default HomeScreen