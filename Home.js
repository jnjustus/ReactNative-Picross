import React from 'react';
import { AppRegistry, Image,  StyleSheet, Text, View,ScrollView,Dimensions,TextInput,Button,Alert,TouchableHighlight,TouchableOpacity,TouchableNativeFeedback,TouchableWithoutFeedback,FlatList,SectionList,ActivityIndicator,Picker,Slider,Switch } from 'react-native';
import { StackNavigator } from 'react-navigation'

class Blink1 extends React.Component{
  constructor(props){
    super(props);
    this.state = {displayBlink1: true};
    setInterval(() => {
      this.setState(
        previousState => {
          return{ displayBlink1: !previousState.displayBlink1};
        }
      );
    },1000);
  }
  render(){
    let whatToDisplay = this.state.displayBlink1 ? this.props.text : ' ';
    return(
      <Text>{whatToDisplay}</Text>
    );
  }
}

class Blink2 extends React.Component{
  constructor(props){
    super(props);
    this.state = {displayBlink1: true};
    setInterval(() => {
      this.setState(
        previousState => {
          return{ displayBlink1: !previousState.displayBlink1};
        }
      );
    },200);
  }
  render(){
    let whatToDisplay = this.state.displayBlink1 ? this.props.text : ' ';
    return(
      <Text>{whatToDisplay}</Text>
    );
  }
}

class ExampleProp extends React.Component{
  render(){
    
    
    return(
      <Text>This text is using a prop: {this.props.copy}</Text>

    );
  }
}

class RedBlue extends React.Component{
  render(){
    return(
    <View style={{flex:1}}><Text style={styles.red}>This text will be little red: {this.props.redSmall}</Text>
    <Text style={styles.bigBlue}>This text will be blue large: {this.props.blueLarge}</Text>
    <Text style={[styles.bigBlue,styles.red]}>This text will get blue then red styles: {this.props.blueThenRed}</Text>
    <Text style={[styles.red,styles.bigBlue]}>This text will get red then blue styles: {this.props.redThenBlue}</Text>
    </View>
    );
  }
}

class FixedDimensions extends React.Component{
  render(){
    return(
      <View style={{flex:1,flexDirection:'row',justifyContent:'space-evenly'}}>
      <View style={{width: 20, height:20,backgroundColor:'lightgreen'}}/>
      <View style={{width: 100, height:20,backgroundColor:'green'}}/>
      <View style={{width: 200, height:20,backgroundColor:'darkgreen'}}/>
      </View>
    );
  }
}

class FlexDimensions extends React.Component{
  render(){
    return(
      <View style={{height:800,flex:1,backgroundColor:'black'}}>
      <View style={{flex:1,backgroundColor:'powderblue'}}/>
      <View style={{flex:2,backgroundColor:'skyblue'}}/>
      <View style={{flex:3,backgroundColor:'blue'}}/>
      </View>
    );
  }
}

class InputBox extends React.Component{
  constructor(props){
    super(props);
    this.state = {text:''};
    var number = 0;
  }
  render(){
    return(
      <View>
        <TextInput 
        placeholder="Type here"
        onChangeText={(text) => this.setState({text})} />
         <Text>{this.state.text}</Text>
         <Text>Word Count:</Text>
        <Text>{this.state.text.split(' ').length-1}</Text>
      </View>
    );
  }
}

class Button1 extends React.Component{
 _onPressButton(){
   Alert.alert('you tapped the button!')
 }
 render(){
   return(
     <View style={styles.container}>
       <View style={styles.button1}>
         <Button

         onPress={this._onPressButton}
         title="Press me"
          color='white'
         />
      </View>
    </View>
   );
 }
}

class Button2 extends React.Component{
  _onPressButton(){
    Alert.alert('you tapped button 2')
  }
  _onLongPressButton(){
    Alert.alert('You long pressed 2')
  }
  render(){
    return(
      <View>
        <TouchableHighlight
        onPress={this._onPressButton}
        onLongPress={this._onLongPressButton}>
        <View>
            <Text>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity
        onPress={this._onPressButton}
        onLongPress={this._onLongPressButton}>
        <View>
            <Text>Touchable Opacity</Text>
          </View>
        </TouchableOpacity>
        <TouchableWithoutFeedback
        onPress={this._onPressButton}
        onLongPress={this._onLongPressButton}>
        <View>
            <Text>Touchable no feedback</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

class FlatList1 extends React.Component{
  render(){
    return(
      <View>
      <FlatList
      data={[
        {key:'Devon'},
        {key:'David'},
        {key:'Dathin'},
        {key:'Dannah'},
        {key:'Donald'},
        {key:'Dessica'},
        {key:'Dale'},
        {key:'Dalton'},
        {key:'Dacon'},
        {key:'Deff'},

      ]}
      renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
      </View>
    );
  }
}

class SectionList1 extends React.Component{
  render(){
    return(
      <View>
        <SectionList
        sections={[
          {title: 'D',data:['Devin']},
          {title: 'J',data:['Jackson','James','Jillian','Jimmy','Joel','John']},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

class FetchExample extends React.Component{
  constructor(props){
    super(props);
    this.state = {isLoading:true}
  }
  
  componentDidMount(){
    return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        dataSource: responseJson.movies,
      }, function(){

      });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex:1,padding:20}}>
        <ActivityIndicator/>
        </View>
      )
    }

    return(
    <View style={{flex:1,padding:20}}>
      <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
          keyExtractor={(item, index) => index.toString()}
      />
    </View>
    );
  }
}

class TestPicker extends React.Component{
  constructor(props){
    super(props);
    this.state = {language:"java"}
  }
  render(){
    return(
      <View>
        <Picker
        selectedValue={this.state.language}
        style={{ height: 50, width: 100 }}
        onValueChange={(itemValue, itemIndex)=>this.setState({language: itemValue})}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="C#" value="C#"/>
          <Picker.Item label="React" value="react"/>
        </Picker>
      </View>
    );
  }
}

class TestSlider extends React.Component{
  constructor(props){
    super(props);
    this.state = {slide:0}
  }
  render(){
    return(
      <View>
      <Slider
      style={{margin:20}}
      onValueChange={(value) => this.setState({slide:value})}
      minimumValue = {0}
      maximumValue = {100}
      />
      <Text style={{textAlign:'center'}}>
        {this.state.slide}
        </Text>
        </View>
    );
  }
}

class TestSwitch extends React.Component{
  constructor(props){
    super(props);
    this.state={on:true}
  }
  render(){
    return(
      <View>
        <Switch
        onValueChange={(value) => this.setState({on:value})}
        value={this.state.on}/>
      </View>
    );
  }
}



export default class App extends React.Component {
  static navigationOptions={
    title:'Picross',
  };
  render() {
    
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View>
        <View  style={{height:200, padding:20,alignItems:'center'}}>
          <Image source={require('./img/PicrossLogo.png')} style={styles.image} resizeMode='cover'/>
        </View>
        <Button onPress={() => this.props.navigation.navigate('Levels')} title='Levels'/>
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
