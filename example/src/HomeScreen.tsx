import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import CmSdkReactNativeV3 from 'react-native-cm-sdk-react-native-v3';

const HomeScreen: React.FC = () => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 2000);
  };

  const buttons = [
    {
      title: 'Has User Choice?',
      onPress: () => {
        const { hasUserChoice } = CmSdkReactNativeV3.hasUserChoice();
        showToast(`Has User Choice: ${hasUserChoice}`);
      },
    },
    {
      title: 'Get CMP String',
      onPress: () => {
        const { cmpInfo } = CmSdkReactNativeV3.exportCMPInfo();
        showToast(`CMP String: ${cmpInfo}`);
      },
    },
    {
      title: 'Get All Purposes',
      onPress: () => {
        const purposes = CmSdkReactNativeV3.getAllPurposesIDs();
        showToast(`All Purposes: ${purposes.join(', ')}`);
      },
    },
    {
      title: 'Has Purpose ID c53?',
      onPress: () => {
        const { hasPurposeConsent } =
          CmSdkReactNativeV3.hasPurposeConsent('c53');
        showToast(`Has Purpose: ${hasPurposeConsent}`);
      },
    },
    {
      title: 'Get Enabled Purposes',
      onPress: () => {
        const purposes = CmSdkReactNativeV3.getEnabledPurposesIDs();
        showToast(`Enabled Purposes: ${purposes.join(', ')}`);
      },
    },
    {
      title: 'Get Disabled Purposes',
      onPress: () => {
        const purposes = CmSdkReactNativeV3.getDisabledPurposesIDs();
        showToast(`Disabled Purposes: ${purposes.join(', ')}`);
      },
    },
    {
      title: 'Enable Purposes c52 and c53',
      onPress: async () => {
        try {
          await CmSdkReactNativeV3.acceptPurposes(['c52', 'c53'], true);
          showToast('Purposes enabled');
        } catch (error) {
          showToast(`Error: ${error}`);
        }
      },
    },
    {
      title: 'Disable Purposes c52 and c53',
      onPress: async () => {
        try {
          await CmSdkReactNativeV3.rejectPurposes(['c52', 'c53'], true);
          showToast('Purposes disabled');
        } catch (error) {
          showToast(`Error: ${error}`);
        }
      },
    },
    {
      title: 'Get All Vendors',
      onPress: () => {
        const vendors = CmSdkReactNativeV3.getAllVendorsIDs();
        showToast(`All Vendors: ${vendors.join(', ')}`);
      },
    },
    {
      title: 'Has Vendor ID s2789?',
      onPress: () => {
        const { hasVendorConsent } =
          CmSdkReactNativeV3.hasVendorConsent('s2789');
        showToast(`Has Vendor: ${hasVendorConsent}`);
      },
    },
    {
      title: 'Get Enabled Vendors',
      onPress: () => {
        const vendors = CmSdkReactNativeV3.getEnabledVendorsIDs();
        showToast(`Enabled Vendors: ${vendors.join(', ')}`);
      },
    },
    {
      title: 'Get Disabled Vendors',
      onPress: () => {
        const vendors = CmSdkReactNativeV3.getDisabledVendorsIDs();
        showToast(`Disabled Vendors: ${vendors.join(', ')}`);
      },
    },
    {
      title: 'Enable Vendors s2790 and s2791',
      onPress: async () => {
        try {
          await CmSdkReactNativeV3.acceptVendors(['s2790', 's2791']);
          showToast('Vendors Enabled');
        } catch (error) {
          showToast(`Error: ${error}`);
        }
      },
    },
    {
      title: 'Disable Vendors s2790 and s2791',
      onPress: async () => {
        try {
          await CmSdkReactNativeV3.rejectVendors(['s2790', 's2791']);
          showToast('Vendors Disabled');
        } catch (error) {
          showToast(`Error: ${error}`);
        }
      },
    },
    {
      title: 'Reject All',
      onPress: async () => {
        try {
          await CmSdkReactNativeV3.rejectAll();
          showToast('All consents rejected');
        } catch (error) {
          showToast(`Error: ${error}`);
        }
      },
    },
    {
      title: 'Accept All',
      onPress: async () => {
        try {
          await CmSdkReactNativeV3.acceptAll();
          showToast('All consents accepted');
        } catch (error) {
          showToast(`Error: ${error}`);
        }
      },
    },
    {
      title: 'Check and Open Consent Layer',
      onPress: async () => {
        try {
          await CmSdkReactNativeV3.checkWithServerAndOpenIfNecessary();
          showToast('Check and Open Consent Layer operation done successfully');
        } catch (error) {
          showToast(`Error: ${error}`);
        }
      },
    },
    {
      title: 'Check Consent Required',
      onPress: async () => {
        try {
          const needsConsent =
            await CmSdkReactNativeV3.checkIfConsentIsRequired();
          showToast(`Needs Consent: ${needsConsent}`);
        } catch (error) {
          showToast(`Error: ${error}`);
        }
      },
    },
    {
      title: 'Open Consent Layer',
      onPress: async () => {
        try {
          await CmSdkReactNativeV3.openConsentLayer();
          showToast('Consent Layer opened successfully');
        } catch (error) {
          showToast(`Error: ${error}`);
        }
      },
    },
    {
      title: 'Import CMP String',
      onPress: async () => {
        try {
          await CmSdkReactNativeV3.importCMPInfo(
            'Q1FERkg3QVFERkg3QUFmR01CSVRCQkVnQUFBQUFBQUFBQWlnQUFBQUFBQUEjXzUxXzUyXzUzXzU0XzU1XzU2XyNfczI3ODlfczI3OTBfczI3OTFfczI2OTdfczk3MV9VXyMxLS0tIw'
          );
          showToast('New consent string imported successfully');
        } catch (error) {
          showToast(`Error: ${error}`);
        }
      },
    },
    {
      title: 'Reset all CMP Info',
      onPress: async () => {
        try {
          await CmSdkReactNativeV3.resetConsentManagementData();
          showToast('All consents reset');
        } catch (error) {
          showToast(`Error: ${error}`);
        }
      },
    },
    {
      title: 'Request ATT Authorization',
      onPress: async () => {
        try {
          const status = await CmSdkReactNativeV3.requestATTAuthorization();
          showToast(`ATT Status: ${status}`);
        } catch (error) {
          showToast(`Error: ${error}`);
        }
      },
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>CM React Native DemoApp</Text>
        {buttons.map((button, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={button.onPress}
          >
            <Text style={styles.buttonText}>{button.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      {toastMessage && (
        <View style={styles.toast}>
          <Text style={styles.toastText}>{toastMessage}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContent: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  toast: {
    position: 'absolute',
    bottom: 50,
    left: 20,
    right: 20,
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 10,
    borderRadius: 5,
  },
  toastText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default HomeScreen;
