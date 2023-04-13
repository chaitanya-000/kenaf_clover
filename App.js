import QuickSale from "./src/screens/QuickSale";
import PaymentLogs from "./src/screens/PaymentLogs";
import PaymentDetails_Receipt from "./src/screens/PaymentDetails_Receipt";
import PaymentDetails_Refund from "./src/screens/PaymentDetails_Refund";
import Register from "./src/screens/Register";
import Login from "./src/screens/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigation from "./src/DrawerNavigation";

const Stack = createNativeStackNavigator();

function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={{ headerShown: false }}>
    //     <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="Register" component={Register} />
    //     <Stack.Screen
    //       name="PaymentDetails_Refund"
    //       component={PaymentDetails_Refund}
    //     />
    //     <Stack.Screen
    //       name="PaymentDetails_Receipt"
    //       component={PaymentDetails_Receipt}
    //     />
    //     <Stack.Screen name="PaymentLogs" component={PaymentLogs} />
    //     <Stack.Screen name="QuickSale" component={QuickSale} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <Login />
  );
}

export default App;
