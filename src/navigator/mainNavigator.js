import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen012042Navigator from '../features/BlankScreen012042/navigator';
import BlankScreen112041Navigator from '../features/BlankScreen112041/navigator';
import BlankScreen212040Navigator from '../features/BlankScreen212040/navigator';
import CopyOfBlankScreen212039Navigator from '../features/CopyOfBlankScreen212039/navigator';
import BlankScreen412038Navigator from '../features/BlankScreen412038/navigator';
import CopyOfBlankScreen412037Navigator from '../features/CopyOfBlankScreen412037/navigator';
import CopyOfBlankScreen412023Navigator from '../features/CopyOfBlankScreen412023/navigator';
import BlankScreen412020Navigator from '../features/BlankScreen412020/navigator';
import CopyOfBlankScreen212019Navigator from '../features/CopyOfBlankScreen212019/navigator';
import BlankScreen212011Navigator from '../features/BlankScreen212011/navigator';
import BlankScreen112010Navigator from '../features/BlankScreen112010/navigator';
import BlankScreen012009Navigator from '../features/BlankScreen012009/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen012042: { screen: BlankScreen012042Navigator },
BlankScreen112041: { screen: BlankScreen112041Navigator },
BlankScreen212040: { screen: BlankScreen212040Navigator },
CopyOfBlankScreen212039: { screen: CopyOfBlankScreen212039Navigator },
BlankScreen412038: { screen: BlankScreen412038Navigator },
CopyOfBlankScreen412037: { screen: CopyOfBlankScreen412037Navigator },
CopyOfBlankScreen412023: { screen: CopyOfBlankScreen412023Navigator },
BlankScreen412020: { screen: BlankScreen412020Navigator },
CopyOfBlankScreen212019: { screen: CopyOfBlankScreen212019Navigator },
BlankScreen212011: { screen: BlankScreen212011Navigator },
BlankScreen112010: { screen: BlankScreen112010Navigator },
BlankScreen012009: { screen: BlankScreen012009Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
