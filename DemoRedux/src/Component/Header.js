import React, { useState, forwardRef,useImperativeHandle } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { colors, font, fontSizes } from "../Utils/Constants/theme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "../Utils/Helper/ResponsiveScreen";


const Header = (props, ref) => {

        useImperativeHandle(ref, () => ({
            localMethod1 : () => {localMethod1()},
            localMethod2 : (strData) => {localMethod2(strData)}
        }))

        const localMethod1 = () => {
            console.log("Method 1 executed")
          }
    
        const localMethod2 = (aData) => {
            console.log("Method 2 executed",aData)
        }



    return(
        <View style={{backgroundColor:colors.googleButtonColor,
            height:hp(7),
            flexDirection:'row',
            shadowColor: colors.graytext,
            elevation:  40,
            shadowRadius: 25.0,
            shadowOpacity: 0.99,
            shadowOffset: { width: 0, height: hp(1.5) },
            }}>
                <View style={{justifyContent:'center',alignSelf: 'center',}}>
                    <TouchableOpacity onPress={props.onBackClick} style={{marginLeft:hp(1),}}>
                        <Image style={{width:hp(1.8),width:hp(1.8),tintColor: colors.darkGray}}  source={require("../Assets/Images/back.png")} resizeMode={"contain"} />
                    </TouchableOpacity>
                </View>

                <View style={{justifyContent:'center',flex:1,}}>
                  <Text style={{fontSize:hp(3),fontFamily:font.Medium,color:colors.darkGray,alignSelf:'center'}}>{props.headerTitle}</Text>
                  </View>

                  <View style={{justifyContent:'center',alignSelf: 'center',}}>
                    <TouchableOpacity onPress={props.onRightButtonClick} style={{marginRight:hp(1),}}>
                        {props.leftIconType == 1 ?
                        <Image style={{width:wp(7),width:wp(7),tintColor: colors.darkGray}}  source={require("../Assets/Images/carts.png")} resizeMode={"contain"} />
                        : <Image style={{width:wp(7),width:wp(7),tintColor: colors.darkGray}}  source={require("../Assets/Images/setting.png")} resizeMode={"contain"} /> }
                        </TouchableOpacity>
                </View>
        </View>
    )

};

export default forwardRef(Header);
