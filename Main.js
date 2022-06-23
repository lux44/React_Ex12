// ## RN은 기본적으로 화면전환이 존재하지 않음. 그래서 별도 라이브러리 활용 ###
// React Navigation library [https://reactnavigation.org]

// 1. 기본 필수 라이브러리 추가
//   > https://reactnavigation.org

// 2. 추가 라이브러리 2개 
// npm install react-native-screens react-native-safe-area-context

import React,{Component} from "react";
import {Button} from 'react-native'
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";

// Stack Navigator가 보여줄 스크린(컴포넌트)들 import
import Home from "./screens/Home";
import Second from "./screens/Second";

// 2.2) Stack Navigator 객체 생성해주는 함수 호출
const Stack=createStackNavigator() 

// 1) 가장 먼저 Navigator들을 감싸는 최상위 NavigationContainer 컴포넌트를 배치해야 함.
export default class Main extends Component {
    render(){
        return (
            <NavigationContainer>
                {/* 원하는 화면 전환 방식을 결정하는 Navigator를 배치함 */}
                {/* 전환방식에 따라 여러 종류의 Navigator가 존재함 */}

                {/* 2) Stack Navigator 부터 실습 [제목줄(액션바)이 생기는 네비게이터] */}
                {/* 2.1) Stack Navigator library 적용 */}
                {/* 2.2) Stack 객체 생성하기 */}
                {/* 2.3) Stack Navigator와 Screen들 등록하기 */}
                <Stack.Navigator screenOptions={{
                    headerStyle:{backgroundColor:'indigo'},
                    headerTintColor:'white',
                    headerTitleStyle:{fontWeight:'bold'},
                    headerTitleAlign:'center',
                    // headerRight:()=>{return <Button title='menu'></Button>}
                    // 축약형으로 작성
                    headerRight:()=> <Button title='menu' onPress={()=>alert('click menu')}></Button>
                }}>
                    {/* 네비게이터가 보여줄 스크린들 컴포넌트 등록 */}
                    <Stack.Screen options={{title:'홈'}} name="home" component={Home}></Stack.Screen>
                    <Stack.Screen options={{title:'두 번째', headerShown:true}} name="second" component={Second}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

