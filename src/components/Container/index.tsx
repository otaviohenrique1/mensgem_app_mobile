import { View } from 'react-native';
import { styles } from './styles';
import { ReactNode } from 'react';

export interface ContainerProps {
  children: ReactNode;
}

export function Container(props: ContainerProps) {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  );
}
