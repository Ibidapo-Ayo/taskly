import { View } from 'react-native'
import React, { useContext } from 'react'
import * as Progress from 'react-native-progress';
import { data } from '@/data/todo';
import { calculateCompletedTaskPercentage } from '@/lib/helper';
import { TasklyContext } from '@/context/TodoAppContext';

const ProgressCard = () => {
  const {todos} = useContext(TasklyContext)

  return (
    <View>
      <Progress.Pie progress={calculateCompletedTaskPercentage(todos)} size={100} />
    </View>
  )
}

export default ProgressCard