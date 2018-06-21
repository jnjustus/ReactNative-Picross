import React from 'react';
import { AppRegistry, Image,  StyleSheet, Text, View,ScrollView,Dimensions,TextInput,Button,Alert,TouchableHighlight,TouchableOpacity,TouchableNativeFeedback,TouchableWithoutFeedback,FlatList,SectionList,ActivityIndicator,Picker,Slider,Switch,  } from 'react-native';
import { StackNavigator } from 'react-navigation'

var LGuide = [];
var TGuide = [];
var TTest = ["1","2\n1","1\n2","5","2\n1"];
var TestCount = 0;


class CreateInteractPixel extends React.Component{
  constructor(props){
    super(props);
    this.state = {pickedToggle: false};
  }
  render(){
    const boxTrue = this.props.boxTrue;
  const index = this.props.index;

  var setStyle = false;
    if(boxTrue == 1){
      return(
        <TouchableOpacity onPress={() => {this.setState({pickedToggle: true})}}>
          <View key={index} style={[styles.whitePixel,this.state.pickedToggle && styles.blackPixel ]}>
          </View>
        </TouchableOpacity>
      )
    }
    else{
      return(
        <TouchableOpacity onPress={() => Alert.alert('Wrong')}>
          <View key={index} style={styles.whitePixel}>
          </View>
        </TouchableOpacity>
      );
    }
  }
}

function Box(props){
  
  const boxTrue = props.boxTrue;
  const index = props.index;

  var setStyle = false;
  

  if(boxTrue == 1){
    return(
      <TouchableOpacity onPress={() => 
        {
          if(boxTrue == 1){
            setStyle=true;
          } else{
            setStyle=false;
          }
        }
      }>
      <View key={index} style={[styles.whitePixel,setStyle && styles.blackPixel ]}>
      </View>
      </TouchableOpacity>
    )
  }
  else{
    return(
      <TouchableOpacity onPress={() => Alert.alert('Wrong')}>
      <View  key={index} style={styles.whitePixel}>
      </View>
      </TouchableOpacity>
    );
  }
}

function RowKey(props){
  const rowValue = props.rowValue;
  const index = props.index;
  const arraySize = rowValue.length;
  var tempString = '';
  var count = 0;

  for(i=0; i < arraySize; i++){
    if(rowValue[i]==1){
      if(i == (arraySize -1)){
        count++;
        tempString += " " + count.toString();
        count=0;
      }
      else{
        count++;
      }
    }
    else{
      if(count > 0){
        tempString += " " + count.toString();
        count = 0;
      }
      else{
        count = 0;
      }
      count = 0;
    }
  }

  return(
    <Text>{tempString}</Text>
  );
}

function SortCol(props){
  
  const levelData = props.levelData; 
  const arraySize = levelData.length;
  var tempArray = [];
  var tempArrayArray = [
    {row:[]},{row:[]},{row:[]},{row:[]},{row:[]}
  ];


  for (c=0;c<arraySize; c++){
    for(r=0;r<arraySize; r++){
      tempArray.push([levelData[r].row[c]]);
    }
    tempArrayArray[c].row = tempArray;
    tempArray = [];
  }

  return(
   tempArrayArray.map((item,i) => {
            
      return(
        <ColKey colValue={item.row} />
      );
      })
  );
}

function ColKey(props){
  const colValue = props.colValue;
  const index = props.index;
  const arraySize = colValue.length;
  var tempString = '';
  var count = 0;

  for(i=0; i < arraySize; i++){
    if(colValue[i]==1){
      if(i == (arraySize -1)){
        count++;
        if(tempString.length>0){
          tempString += "\n" + count.toString();
        }
        else{
          tempString += count.toString();
        }
        count=0;
      }
      else{
        count++;
      }
    }
    else{
      if(count > 0){
        if(tempString.length>0){
          tempString += "\n" + count.toString();
        }
        else{
          tempString += count.toString();
        }
        count = 0;
      }
      else{
        if(i == (arraySize -1) && tempString.length==0){
          tempString += count.toString();
        }
        count = 0;
      }
      count = 0;
    }
  }

  return(
    console.log(tempString),
    <View style={{height:80,width:50,justifyContent:'flex-end',alignItems:'center',alignSelf:'center',paddingBottom:5}}>
      <Text>{tempString}</Text>
    </View>
  );
}

function Row(props){
  const rowValues = props.rowValues;
  const index = props.index;


return(
  <View style={{height:50,display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center',alignSelf:'center',borderColor:'#000000'}}>
    {rowValues}
    <View style={{height:50,width:50,justifyContent:'center',alignItems:'flex-end',paddingRight:5}}>
        <RowKey rowValue={rowValues} index={index}/>
      </View>
  {rowValues.map((boxValues,index) => {
    return(

      <CreateInteractPixel boxTrue={boxValues} index={index}/>

    );
  })}
  </View>
);
}

function CheckPixel(props){
  const stageData = props.stageData;
  const pixelIndexX = props.pixelIndexX;
  const pixelIndexY = props.pixelIndexY;
  var validPixel = 'false';

  if(stageData[pixelIndexY].row[pixelIndexX] === 1){
    validPixel = true;
  }
  else{
    validPixel = false;
  }

  return(
    validPixel
  );

}

export default class App extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Level ' + navigation.state.params.name,
  })
  constructor(props) {
    super(props);
    this.state = {toggle: false};
  }
  render() {
    const{params} = this.props.navigation.state;
    console.log('chat props:' , this.props);
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View>

        <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
          <Text style={{textAlign:'center'}}>
            This is {params.name}
          </Text>
          <View style={{height:80,display:'flex',flexDirection:'row',flexWrap:'nowrap',justyContent:'center',alignSelf:'center',borderColor:'#000000'}}>
            <View style={{width:50}}>
            </View>
            <SortCol levelData={params.stage}/>
          </View>
          <View style={{height:255,display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center',alignSelf:'center',borderColor:'#000000'}}>
            {params.stage.map((item,i) => {
              
            return(
              <Row rowValues={item.row} index={i}/>
            );
            })}
          </View>
          <View style={{height:50,display:'flex',flexDirection:'row',flexWrap:'nowrap',justyContent:'center',alignSelf:'center'}}>
                <View style={{width:150,display:'flex',flexDirection:'row',flexWrap:'nowrap',justyContent:'center',alignSelf:'center'}}>
                <Image source={require('./img/MissRed.png')} style={{width:50,height:50,justyContent:'center',alignSelf:'center'}}/>
                <Image source={require('./img/MissRed.png')} style={{width:50,height:50,justyContent:'center',alignSelf:'center'}}/>
                <Image source={require('./img/MissRed.png')} style={{width:50,height:50,justyContent:'center',alignSelf:'center'}}/>
                </View>
          </View>
        </View>
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
    aspectRatio: 3/2
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
  
  whitePixel:{height:50,backgroundColor:'#ffffff',width:50,borderWidth:.5},
  blackPixel:{height:50,backgroundColor:'#000000',width:50,borderWidth:.5},
});
