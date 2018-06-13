declare module 'react-native-floating-action' {
  import * as React from 'react';

  interface FloatingActionItem {
    color?: string;
    icon: React.ReactElement<any> | ImageURISource | ImageRequireSource;
    name: string;
    text: string;
    textBackground?: string;
    textColor?: string;
    textElevation?: number;
  }

  interface FloatingActionProps {
    actions?: FloatingActionItem[];
    color?: string;
    distanceToEdge?: number;
    horizontalDistanceToEdge?: number;
    verticalDistanceToEdge?: number;
    visible?: boolean;
    overlayColor?: string;
    position?: 'left' | 'right' | 'center';
    overrideWithAction?: boolean;
    floatingIcon?: any; //todo
    disasbleSpin?: boolean;
    showBackground?: boolean;
    openOnMount?: boolean;
    actionsPaddingTopBottom?: number;
    onPressItem?: (itemName: string) => void;
    onPressMain?: (active: boolean) => void;
  }

  class FloatingAction extends React.Component<FloatingActionProps> {}

  export { FloatingAction, FloatingActionItem };
}
