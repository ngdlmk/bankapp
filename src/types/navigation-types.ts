import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
    CompositeScreenProps,
} from '@react-navigation/native';
import {
    NativeStackNavigationProp,
    NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { routes } from '../constants/routes';

export type TabParamsList = {
    [routes.HOME_TAB]: undefined;
    [routes.FAQS_TAB]: undefined;
    [routes.FEEDBACK_TAB]: undefined;
};

export type AppStackParamList = {
    [routes.ONBOARDING_SCREEN]: undefined;
    [routes.SPLASH_SCREEN]: undefined;
    [routes.INTRO_SCREEN]: undefined;
    [routes.ESIM_INSTALLATION_SCREEN]: undefined;
    [routes.VERIFY_EMAIL_SCREEN]: {email: string} | undefined;
};

export type HomeStackParamList = { HOME_TAB: undefined };
export type FaqsStackParamList = { FAQS_TAB: undefined };
export type FeedbackStackParamList = { FEEDBACK_TAB: undefined };

//use for useNavigation
export type AppNavigationType = NativeStackNavigationProp<AppStackParamList>;

//use for screen props
//---------TABS---------//
export type HomeScreenProps = CompositeScreenProps<
    BottomTabScreenProps<TabParamsList, typeof routes.HOME_TAB>,
    NativeStackScreenProps<HomeStackParamList>
>;
export type FaqScreenNavigationProps = CompositeScreenProps<
    BottomTabScreenProps<TabParamsList, typeof routes.FAQS_TAB>,
    NativeStackScreenProps<FaqsStackParamList>
>;
export type FeedbackScreenNavigationProp = CompositeScreenProps<
    BottomTabScreenProps<TabParamsList, typeof routes.FEEDBACK_TAB>,
    NativeStackScreenProps<FeedbackStackParamList>
>;
//---------TABS---------//

export type OnboaringScreenNavigationProps = NativeStackScreenProps<
    AppStackParamList,
    typeof routes.ONBOARDING_SCREEN
>;
export type SplashScreenNavigationProps = NativeStackScreenProps<
    AppStackParamList,
    typeof routes.SPLASH_SCREEN
>;
export type IntroScreenNavigationProps = NativeStackScreenProps<
    AppStackParamList,
    typeof routes.INTRO_SCREEN
>;
export type EsimInstallationScreenNavigationProps = NativeStackScreenProps<
    AppStackParamList,
    typeof routes.ESIM_INSTALLATION_SCREEN
>;
export type VerifyEmailScreenNavigationProps = NativeStackScreenProps<
    AppStackParamList,
    typeof routes.VERIFY_EMAIL_SCREEN
>;