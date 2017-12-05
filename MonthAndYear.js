import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import moment from 'moment';


const startOfWeek=0;
const endOfWeek=6;

export default class MonthAndYear extends Component{
  constructor(props){
    super(props);
  }

  getDate(dayOfWeek){
    return (moment().startOf('isoweek').add(dayOfWeek+(7*this.props.currentWeek),'day'));
  }

  setWeek(){
    return ("Week " + this.getDate(startOfWeek).format('ww') + " ");
  }

  setMonthAndYear(){
    let returnString = "-";

    if(parseInt(this.getDate(startOfWeek).format('D')) > parseInt(this.getDate(endOfWeek).format('D'))){
      returnString = this.getDate(startOfWeek).format('MMM') + " ";
      if(this.getDate(startOfWeek).format('MMM')=='Dec') returnString += this.getDate(startOfWeek).format('YYYY') + " ";
      returnString += "- " + this.getDate(endOfWeek).format('MMM');
    }
    else returnString = this.getDate(startOfWeek).format('MMM');

    returnString += " " + this.getDate(endOfWeek).format('YYYY')

    return returnString;
  }

  render(){
    return(
      <View>
          <Text style={styles.weekText}>
            {this.setWeek()}
          </Text>
          <Text style={styles.monthAndYearText}>
            {this.setMonthAndYear()}
          </Text>
      </View>

    );
  }
}


const styles = StyleSheet.create({
  weekText: {
    //backgroundColor: 'olive',

    justifyContent: 'center',
    alignSelf: 'flex-start',
    marginLeft: 40,
    marginBottom: -15,

    fontSize: 16,
    fontWeight: 'bold',
    //color: 'darkkhaki',
  },
  monthAndYearText: {
    //backgroundColor: 'pink',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    //alignSelf: 'center',

    marginRight: 40,
    marginBottom: 15,

    fontSize: 16,
    fontWeight: 'bold',
    //color: 'darkkhaki',
  },
});
