import { View, Text } from 'react-native'
import React, { ReactNode } from 'react'
import RBSheet from "react-native-raw-bottom-sheet"
import { Colors } from '@/constants/Colors'

const CreateTodo = ({ bottomSheetRef, children }: {
    bottomSheetRef: any,
    children?: ReactNode
}) => {
    return (
        <RBSheet
            ref={bottomSheetRef}
            height={100}
            openDuration={250}
            closeOnPressBack={true}
            closeOnPressMask={false}
            customStyles={{
                container: {
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    backgroundColor: Colors.secondary[100]
                }
            }}
        >
            <View style={{ paddingHorizontal: 10 }}>
                {children}
            </View>
        </RBSheet>
    )
}

export default CreateTodo