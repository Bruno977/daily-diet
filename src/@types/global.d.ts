import type { SvgProps as DefaultSvgProps } from 'react-native-svg';
import { RootStackParamList } from '../routes/types';

declare module 'react-native-svg' {
  interface SvgProps extends DefaultSvgProps {
    className?: string;
  }
}
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}