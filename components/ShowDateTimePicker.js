import React, {useState} from 'react';
import {View, Button, Platform, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
 
const ShowDateTimePicker = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
 
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };
 
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
 
  const showDatepicker = () => {
    showMode('date');
  };
 
  const showTimepicker = () => {
    showMode('time');
  };
 
  return (
    <View style={{
      marginTop: 70,
      marginLeft: 10,
      marginRight: 10
    }}>
      <View style={{marginBottom: 20}}>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View>
      <View>
        <Button onPress={showTimepicker} title="Show time picker!" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />

        
      )}
      <Text style={{
        marginTop: 30
      }}>Current Date: {date.toString()}</Text>
    </View>
  );
};

export default ShowDateTimePicker;