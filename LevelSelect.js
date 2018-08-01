import React from 'react';
import { AppRegistry, Image,  StyleSheet, Text, View,ScrollView,Dimensions,TextInput,Button,Alert,TouchableHighlight,TouchableOpacity,TouchableNativeFeedback,TouchableWithoutFeedback,FlatList,SectionList,ActivityIndicator,Picker,Slider,Switch,  } from 'react-native';
import { StackNavigator } from 'react-navigation'

const puzzles = [
  {name: 'One', 
    format: 
    [
    {row:[0,0,1,1,0]},
    {row:[0,1,1,1,0]},
    {row:[0,0,1,1,0]},
    {row:[0,0,1,1,0]},
    {row:[0,1,1,1,1]},
    ],
    LGuide:["2","3","2","2","4"],
    TGuide:["0","1 1","5","5","1"],
  },
  {name: 'Two', 
    format:
    [
      {row:[0,1,1,1,0]},
      {row:[0,0,0,1,0]},
      {row:[0,1,1,1,0]},
      {row:[0,1,0,0,0]},
      {row:[0,1,1,1,0]},
      ],
    LGuide:["3","2 2","2","2","4"],
    TGuide:["1","2 1","1 2","5","2 1"],
  },
  {name: 'Cat', 
    format:
    [
      {row:[1,0,0,0,1]},
      {row:[1,1,1,1,1]},
      {row:[1,0,1,0,1]},
      {row:[1,1,0,1,1]},
      {row:[0,1,1,1,0]},
      ],
    LGuide:["3","2 2","2","2","4"],
    TGuide:["1","2 1","1 2","5","2 1"],
  },
  {name: 'Fish', 
    format:
    [
      {row:[0,0,1,0,0]},
      {row:[1,0,1,1,0]},
      {row:[1,1,1,1,1]},
      {row:[1,0,1,1,0]},
      {row:[0,0,1,0,0]},
      ],
    LGuide:["3","2 2","2","2","4"],
    TGuide:["1","2 1","1 2","5","2 1"],
  },
  {name: 'Clock', 
  format:
  [
    {row:[1,1,1,1,1]},
    {row:[1,0,1,0,1]},
    {row:[1,0,1,0,1]},
    {row:[1,0,0,1,1]},
    {row:[1,1,1,1,1]},
    ],
  LGuide:["3","2 2","2","2","4"],
  TGuide:["1","2 1","1 2","5","2 1"],
},
{name: 'Crisscross', 
format:
[
  {row:[0,1,0,1,0]},
  {row:[1,1,0,1,1]},
  {row:[0,0,1,0,0]},
  {row:[1,1,0,1,1]},
  {row:[0,1,0,1,0]},
  ],
LGuide:["3","2 2","2","2","4"],
TGuide:["1","2 1","1 2","5","2 1"],
},
{name: 'Bird', 
format:
[
  {row:[0,0,1,1,1]},
  {row:[0,1,0,1,1]},
  {row:[1,1,1,1,1]},
  {row:[0,0,1,1,1]},
  {row:[0,0,1,1,1]},
  ],
LGuide:["3","2 2","2","2","4"],
TGuide:["1","2 1","1 2","5","2 1"],
},
{name: 'Butterfly', 
format:
[
  {row:[0,1,0,1,0]},
  {row:[1,1,0,1,1]},
  {row:[0,1,1,1,0]},
  {row:[1,1,0,1,1]},
  {row:[0,1,0,1,0]},
  ],
LGuide:["3","2 2","2","2","4"],
TGuide:["1","2 1","1 2","5","2 1"],
},
{name: 'Pac', 
format:
[
  {row:[0,1,1,1,0]},
  {row:[1,1,1,1,1]},
  {row:[1,1,0,0,0]},
  {row:[1,1,1,1,1]},
  {row:[0,1,1,1,0]},
  ],
LGuide:["3","2 2","2","2","4"],
TGuide:["1","2 1","1 2","5","2 1"],
},
{name: 'Apple', 
format:
[
  {row:[0,0,1,0,0]},
  {row:[0,1,1,1,0]},
  {row:[1,1,1,1,1]},
  {row:[1,1,1,1,1]},
  {row:[0,1,1,1,0]},
  ],
LGuide:["3","2 2","2","2","4"],
TGuide:["1","2 1","1 2","5","2 1"],
},
];




export default class App extends React.Component {
  static navigationOptions={
    title:'Levels',
  };
  render() {
    
    let name = "level1"
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View>
        <View  style={{height:200, padding:20,alignItems:'center'}}>
          <Image source={require('./img/LevelLogo.png')} style={styles.image} resizeMode='cover'/>
        </View>
      <ScrollView>
        <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
      {puzzles.map((puzzle,i) => {
        return(
          console.log(puzzle),
          console.log(puzzle.format),
          console.log(puzzle.name),
          console.log(toString(puzzle.name)),
          <Button 
          key={i} 
          onPress={() => this.props.navigation.navigate('Level',{name: puzzle.name, stage: puzzle.format, resetPuzzle: 0} )} 
          title={(i+1) +'. '+puzzle.name.toString()}
          />
        );
      })}
              
        </View>
      </ScrollView>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row'
  },
  image:{
    flex:1,
    width: Dimensions.get('window').width,
    aspectRatio: 2/2
  },
  bigBlue:{
    color: 'blue',
    fontWeight:'bold',
    fontSize: 40
  },
  red:{
    color: 'red'
  },
  button1:{
    borderRadius:4,
    backgroundColor:'blue',
    width:100
  },sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
