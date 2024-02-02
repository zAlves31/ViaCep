import {StatusBar } from 'react-native';

import { useFonts,Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { ContainerApp } from './styles';
import { Header } from './src/components/Header';
import { Home } from './src/components/screens/Home';





export default function App() {
  const [] = useFonts({
    Roboto_500Medium,
    Roboto_700Bold
  })
  return (
    <ContainerApp>
      

      <Header/>

      <Home/>
      
      <StatusBar/>
    </ContainerApp>
  );
}
