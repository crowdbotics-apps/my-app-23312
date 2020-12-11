import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList184326Navigator from '../features/NotificationList184326/navigator';
import Settings184325Navigator from '../features/Settings184325/navigator';
import Settings184317Navigator from '../features/Settings184317/navigator';
import UserProfile184315Navigator from '../features/UserProfile184315/navigator';
import ArticleList4184293Navigator from '../features/ArticleList4184293/navigator';
import EmailAuth1184291Navigator from '../features/EmailAuth1184291/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList184326: { screen: NotificationList184326Navigator },
Settings184325: { screen: Settings184325Navigator },
Settings184317: { screen: Settings184317Navigator },
UserProfile184315: { screen: UserProfile184315Navigator },
ArticleList4184293: { screen: ArticleList4184293Navigator },
EmailAuth1184291: { screen: EmailAuth1184291Navigator },

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
