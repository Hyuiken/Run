import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../assets/constants'

const TabIcon=({icon,color,name,focused})=>{
  return (
    <View>
      <Image
        source={icon}
        resizeMode="contain"
        className="w-6 h-10"
      />
    </View>
  )
}




const TabLayout = () => {
  return (
    <>
      <Tabs>
          <Tabs.Screen 
          name="home"
          options={{
            title:'Home', 
            headerShown:false,
            tabBarIcon:({color,focused}) =>(
              <TabIcon
                icon={icons.homie}
                color={color}
                name="Home"
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen 
          name="info"
          options={{
            title:'Info', 
            headerShown:false,
            tabBarIcon:({color,focused}) =>(
              <TabIcon
                icon={icons.info}
                color={color}
                name="Info"
                focused={focused}
              />
            )
          }}
        />
      <Tabs.Screen 
        name="menu"
        options={{
          title:'Menu', 
          headerShown:false,
          tabBarIcon:({color,focused}) =>(
            <TabIcon
              icon={icons.menu}
              color={color}
              name="Menu"
              focused={focused}
            />
          )
        }}
      />
      <Tabs.Screen 
        name="logout"
        options={{
          title:'Logout', 
          headerShown:false,
          tabBarIcon:({color,focused}) =>(
            <TabIcon
              icon={icons.logout}
              color={color}
              name="Logout"
              focused={focused}
            />
          )
        }}
      />
      </Tabs>
    </>
  )
}







export default TabLayout


const styles = StyleSheet.create({})








// import { View, Text } from 'react-native'
// import React from 'react'

// const TabLayout = () => {
//   return (
//     <View>
//       <Text>TabLayout</Text>
//     </View>
//   )
// }

// export default TabLayout