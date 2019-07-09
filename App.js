import React from 'react';
import { View, Switch, StyleSheet, Text } from 'react-native';

export default class App extends React.Component{
  state = {
    switchValue: false,
    tempValue: 'C',//default
  };

  _handleToggleSwitch = () =>{
    this.setState(state => ({
      switchValue: !state.switchValue,
    }));

    if(this.state.switchValue){
      this.setState({tempValue: 'C'})
    }else{
      this.setState({tempValue: 'F'})
    }
  
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>Show temperature in: {this.state.tempValue}</Text>
        <Switch
          onValueChange={this._handleToggleSwitch}
          value={this.state.switchValue}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});