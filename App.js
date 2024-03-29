import QuickSale from "./src/screens/QuickSale";
import PaymentLogs from "./src/screens/PaymentLogs";
import PaymentDetails_Receipt from "./src/screens/PaymentDetails_Receipt";
import PaymentDetails_Refund from "./src/screens/PaymentDetails_Refund";
import Register from "./src/screens/Register";
import Login from "./src/screens/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigation from "./src/DrawerNavigation";
import { useEffect } from "react";
import { useStore } from "zustand";
import useAuthStore from "./src/store";
import BankDetails from "./src/screens/BankDetails";
import ProfileUpdate from "./src/screens/ProfileUpdate";
import Refund from "./src/screens/Refund";
import Receipt from "./src/screens/Receipt";
import SamplePageForTesting from "./src/screens/SamplePageForTesting";

const Stack = createNativeStackNavigator();

function App() {
  const hasToken = useStore(useAuthStore, (state) => state.hasToken);
  const getToken = useStore(useAuthStore, (state) => state.getToken);

  useEffect(() => {
    getToken();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {hasToken ? (
          <>
            <Stack.Screen
              name="DrawerNavigation"
              component={DrawerNavigation}
            />
            <Stack.Screen
              name="PaymentDetails_Refund"
              component={PaymentDetails_Refund}
            />
            <Stack.Screen
              name="PaymentDetails_Receipt"
              component={PaymentDetails_Receipt}
            />
            <Stack.Screen name="PaymentLogs" component={PaymentLogs} />
            <Stack.Screen name="QuickSale" component={QuickSale} />
            <Stack.Screen name="Refund" component={Refund} />
            <Stack.Screen name="BankDetails" component={BankDetails} />
            <Stack.Screen name="ProfileUpdate" component={ProfileUpdate} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
