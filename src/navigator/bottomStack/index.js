// bottomStack.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';
import { ScreenNames } from '../../constants/strings';
import { rfs, rhp, rwp, wp } from '../../constants/dimensions';
import { colors } from '../../constants/colors';
import CardScreen from '../../screens/bottom/cardsScreen';
import HomeScreen from '../../screens/bottom/homeScreen';
import SendScreen from '../../screens/bottom/sendScreen';
import InvestScreen from '../../screens/bottom/investScreen';
import MoreScreen from '../../screens/bottom/moreScreen';
import { images } from '../../assets/images';
import fonts from '../../constants/fonts';



const Tab = createBottomTabNavigator();

const Bottom = () => {
  const TabBarIconWithLabel = ({ focused, iconSource, label }) => {
    return (
      <View style={[
        styles.iconContainer,
        {
          //backgroundColor: focused ? 'rgba(21, 190, 119, 0.5)' : 'transparent',
          width: rwp(65),
          // width: focused ? rwp(30) : rwp(55)
          borderTopColor: focused ? colors.gradientColor2 : undefined,
          // borderTopWidth:3,
          bottom: 4,
          borderRadius: 0,
          borderTopWidth: focused ? 2 : 0,
          // borderTopColor:colors.lightGrey,
          // backgroundColor: colors.white,
          // backgroundColor:"red"
        }
      ]}>
        <Image
          source={iconSource}
          resizeMode="contain"
          style={[
            styles.icon,
            { tintColor: focused ? colors.gradientColor2 : colors.grey }
          ]}
        />
        <Text style={styles.label(focused)}>
          {label}
        </Text>
      </View>
    );
  };





  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: rhp(64),
          animation: 'shift',
          animationEnabled: true,
        },
        tabBarLabel: () => null, // Hide default labels
      }}
    >
      <Tab.Screen
        name={ScreenNames.Home}
        component={HomeScreen}
        options={{
          headerShown: false,
          animationEnabled: true,

          tabBarIcon: ({ focused }) => (
            <TabBarIconWithLabel
              focused={focused}
              iconSource={images.homeOutlinedIcon}
              label="Home"
            // Pass cart count to Home tab
            />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenNames.Send}
        component={SendScreen}
        options={{
          headerShown: false,
          animationEnabled: true,

          tabBarIcon: ({ focused }) => (
            <TabBarIconWithLabel
              focused={focused}
              iconSource={images.sendOutlinedIcon}
              label="Send"

            />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenNames.Invest}
        component={InvestScreen}
        options={{
          headerShown: false,

          animationEnabled: true,
          tabBarIcon: ({ focused }) => (
            <TabBarIconWithLabel
              focused={focused}
              iconSource={images.chartOutlinedIcon}
              label="Invest"
            //cartCount={cartItems.length}
            />
          ),
        }}
      />
      <Tab.Screen


        name={ScreenNames.Cards}
        component={CardScreen}
        options={{
          headerShown: false,
          animationEnabled: true,

          tabBarIcon: ({ focused }) => (
            <TabBarIconWithLabel
              focused={focused}
              iconSource={images.cardOutlinedIcon}
              label="Cards"

            />
          ),
        }}

      />

      <Tab.Screen
        name={ScreenNames.More}
        component={MoreScreen}
        options={{
          headerShown: false,
          animationEnabled: true,

          tabBarIcon: ({ focused }) => (
            <TabBarIconWithLabel
              focused={focused}
              iconSource={images.moreOutlinedIcon}
              label="More"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Bottom;

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    borderRadius: 12,
    paddingTop: rhp(16),
    justifyContent: 'center',
  },
  icon: {
    width: rwp(25),
    height: rhp(25),
  },
  label: (focused) => ({
    color: focused ? colors.gradientColor2 : colors.grey,
    fontWeight: '500',
    fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Medium,
    fontSize: rfs(12),
  }),
});