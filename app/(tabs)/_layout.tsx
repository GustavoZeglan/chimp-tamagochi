import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { SQLiteProvider } from 'expo-sqlite';
import { initDatabase } from '@/database/initiDatabase';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <SQLiteProvider databaseName='chimp.db' onInit={initDatabase}>
        <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
            ),
          }}
        />
      </Tabs>
    </SQLiteProvider>
  );
}
