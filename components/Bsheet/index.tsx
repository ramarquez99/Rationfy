import React, { useCallback, useRef, useLayoutEffect, useMemo, useState } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TouchableWithoutFeedback  } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { useNavigation } from 'expo-router';
import { Icon } from '@rneui/base';
import { WinDiag } from '@/constants/Windiag';

const winDiag = WinDiag();

const Bsheet = () => {
  const navigation = useNavigation();
  
  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["20%","40%","50%", "75%"], []);

  const [ show, setShow ] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View>
          <TouchableHighlight 
            onPress={handleExpand}
          >
            <Icon
              name="menu"
              type="material-community"
              size={winDiag * 3}
            />
          </TouchableHighlight>
        </View>
      ),
      headerRight: () => (
        <View
          style={{
          }}
        >
          <TouchableHighlight>
            <Icon
              name="user-circle"
              type="font-awesome-5"
              size={winDiag * 3}
            />
          </TouchableHighlight>
        </View>
      )
    })
  }, [])

  // const handleSheetChange = useCallback((index:any) => {
  //   console.log("handleSheetChange", index);
  // }, []);

  // const handleSnapPress = useCallback((index:any) => {
  //   sheetRef.current?.snapToIndex(index);
  // }, []);

  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
    setShow(false);
  }, []);

  const handleExpand = useCallback(() => {
    sheetRef.current?.expand();
    setShow(true);
  }, []);

  console.log(sheetRef)
  return (
    <>
      {show &&
        <TouchableWithoutFeedback onPress={handleClosePress}>
          <View style={[StyleSheet.absoluteFillObject, {
            backgroundColor: "rgba(1,1,1,0.5)"
          }]} />
        </TouchableWithoutFeedback>
      }
      <BottomSheet
        ref={sheetRef}
        // onChange={handleSnapPress}
        index={-1}
        snapPoints={snapPoints}
        detached={true}
        enablePanDownToClose={false}
        // enableContentPanningGesture={false}
        // enableHandlePanningGesture={true}
        // enableOverDrag={true}
        // backgroundComponent={null} 
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheet>
    </>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Bsheet;