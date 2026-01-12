import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
    CompositeScreenProps,
    NavigatorScreenParams,
} from '@react-navigation/native';
import {
    NativeStackNavigationProp,
    NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { routes } from '../constants/routes';

export type TabParamsList = {
    [routes.DASHBOARD_TAB]: undefined;
    [routes.HELP_TAB]: undefined;
};

export type AppStackParamList = {
    [routes.SPLASH_SCREEN]: undefined;
    [routes.LOGIN_SCREEN]: undefined;
    [routes.SECURITY_SCREEN]: undefined;
    [routes.TAB_NAVIGATOR]: NavigatorScreenParams<TabParamsList>;
};

export type DashboardStackParamList = { [routes.DASHBOARD_SCREEN]: undefined };
export type HelpStackParamList = { [routes.HELP_SCREEN]: undefined };

//use for useNavigation
export type AppNavigationType = NativeStackNavigationProp<AppStackParamList>;

//use for screen props
//---------TABS---------//
export type DashboardScreenProps = CompositeScreenProps<
    BottomTabScreenProps<TabParamsList, typeof routes.DASHBOARD_TAB>,
    NativeStackScreenProps<DashboardStackParamList>
>;
export type HelpScreenNavigationProps = CompositeScreenProps<
    BottomTabScreenProps<TabParamsList, typeof routes.HELP_TAB>,
    NativeStackScreenProps<HelpStackParamList>
>;
//---------TABS---------//


export type SplashScreenNavigationProps = NativeStackScreenProps<
    AppStackParamList,
    typeof routes.SPLASH_SCREEN
>;
export type LoginScreenNavigationProps = NativeStackScreenProps<
    AppStackParamList,
    typeof routes.LOGIN_SCREEN
>;