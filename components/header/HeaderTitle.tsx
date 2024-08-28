import { useEffect } from 'react';
import { useNavigation } from 'expo-router';
import { View, Text } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

interface HeaderTitleProps {
  navigation: any;
  title?: string;
  c?: boolean;
};

// export const HeaderTitle = ({navigation, title}: HeaderTitleProps) => {
//   navigation.setOptions({
//     title: title || "title",
//   })
// }

const HeaderTitle = ({ navigation, title, c=false}: HeaderTitleProps) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitleAlign: c ? 'center' : 'left',
      title: title || "title",
      headerTitleStyle: { 
        fontWeight: 'bold',
      },
      headerStyle: { 
        backgroundColor: '#fff',
      },
      // headerTintColor: '#000',
      // headerLeft: () => (<View />),
      // headerRight: () => (<View />),
      // headerTitle: () => (<Text>{title}</Text>),
      // headerBackTitle: 'Atrás',
      // headerBackVisible: true,
      // headerShown: true,
      // headerTransparent: false,
      // headerShadowVisible: true,
    })
  }, [navigation, title])

  return null;
};

export default HeaderTitle;