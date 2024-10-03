import { useState } from 'react';
import { View } from 'react-native';
import LandingPage from './LandingPage';
import HomeScreen from './HomeScreen';

const App = () => {
  const [isConsentInitialized, setIsConsentInitialized] = useState(false);

  const handleConsentInitialized = () => {
    setIsConsentInitialized(true);
  };

  return (
    <View style={{ flex: 1 }}>
      {!isConsentInitialized ? (
        <LandingPage onConsentInitialized={handleConsentInitialized} />
      ) : (
        <HomeScreen />
      )}
    </View>
  );
};

export default App;
