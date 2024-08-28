import { Dimensions } from "react-native";

export const WinDiag = () => {
    const { width: winWidth, height: winHeight } = Dimensions.get('window');
    const winDiag = (Math.sqrt((winWidth * winWidth) + (winHeight * winHeight))) / 100.00;
    return winDiag;
};