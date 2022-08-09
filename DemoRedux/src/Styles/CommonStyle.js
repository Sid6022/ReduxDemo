import { StyleSheet } from "react-native";
import { colors, fontSizes, font } from "../Utils/Constants/theme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "../Utils/Helper/ResponsiveScreen";

const CommonStyles = StyleSheet.create({

    safeArea:{
        flex: 1,
        backgroundColor:colors.appBGColor,
    }

});


export default CommonStyles;
