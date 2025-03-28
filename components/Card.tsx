import { Shadows } from "@/constants/Shadows";
import { View, ViewProps, ViewStyle } from "react-native";
import ThemedText from "./ThemedText";
import { useThemeColors } from "@/hooks/useThemeColors";

type Props = ViewProps

export function Card({style, ...rest} : Props){
    const color = useThemeColors()
    return <View style = {[style, styles, {backgroundColor : color.grayWhite}]} {...rest}></View>
}

const styles = {
    borderRadius : 8,
    overflow : 'hidden',
    ...Shadows.dp2,
} satisfies ViewStyle