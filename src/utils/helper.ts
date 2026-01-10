import App from 'expo-application';
import Constants from 'expo-constants';
import DeviceInfo from 'expo-device';

export const getDeviceInfo = async () => {
    const userAgent = await Constants.getWebViewUserAgentAsync();
    const deviceInfo = {
        brand: DeviceInfo.brand, // e.g., "Apple"
        model: DeviceInfo.modelName, // e.g., "iPhone 6"
        osName: DeviceInfo.osName, // e.g., "iOS"
        osVersion: DeviceInfo.osVersion, // e.g., "12.4"
        appVersion: App.nativeApplicationVersion, // e.g., "1.0.0"
        buildNumber: App.nativeBuildVersion, // e.g., "100"
        uniqueId: App.applicationId, // unique device ID
        manufacturer: DeviceInfo.manufacturer, // e.g., "Apple"
        isEmulator: DeviceInfo.isDevice, // true or false
        deviceType: DeviceInfo.deviceType, // true or false
        userAgent
    };

    return deviceInfo;
};