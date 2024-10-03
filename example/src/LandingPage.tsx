import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CmSdkReactNativeV3 from 'react-native-cm-sdk-react-native-v3';

interface LandingPageProps {
  onConsentInitialized: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onConsentInitialized }) => {
  useEffect(() => {
    const initializeConsent = async () => {
      try {
        console.debug('Trying to set the URL for the CMP.');
        CmSdkReactNativeV3.setUrlConfig({
          id: '09cb5dca91e6b',
          domain: 'delivery.consentmanager.net',
          language: 'EN',
          appName: 'CMDemoAppReactNative',
        });

        CmSdkReactNativeV3.setWebViewConfig({
          position: 'fullScreen',
          backgroundStyle: 'BackgroundStyle.Dimmed',
          cornerRadius: 5,
          respectsSafeArea: true,
          allowsOrientationChanges: true,
        });

        await CmSdkReactNativeV3.checkWithServerAndOpenIfNecessary();
        console.log(
          'CMPManager initialized and open consent layer opened if necessary'
        );
        onConsentInitialized();
      } catch (error) {
        console.error('Error initializing consent:', error);
      }
    };

    initializeConsent();
  }, [onConsentInitialized]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Initializing Consent Manager...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default LandingPage;
