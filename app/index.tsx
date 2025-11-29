import { CharacterList } from '@/components/CharacterList'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Index() {
  return (
    <SafeAreaView style={{flex:1}}>
      <CharacterList />
    </SafeAreaView>
  )
}
