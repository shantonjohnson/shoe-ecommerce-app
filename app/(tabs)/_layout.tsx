import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // Example icon library

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'blue', // Customize active tab color
      }}
    >
      <Tabs.Screen
        name="index" // Corresponds to app/(tabs)/index.tsx
        options={{
          title: 'Home', // Tab label and header title
          tabBarIcon: ({ color, focused }) => ( // Add icons to tabs
            <Ionicons name={focused ? 'home' : 'home-outline'} size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
