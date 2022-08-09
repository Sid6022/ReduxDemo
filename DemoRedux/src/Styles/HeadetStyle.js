import { StyleSheet } from "react-native";
import { colors, fontSizes, font } from "../Utils/Constants/theme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "../Utils/Helper/ResponsiveScreen";



const HeadetStyle = StyleSheet.create({

    mainView:{
        backgroundColor: backgroundColor ? backgroundColor : colors.whiteColor,
        flexDirection: "row",
        height: hp(7),
        backgroundColor:'white',
    }

});


export default HeadetStyle;
