/**
 * Circular Menu
 * Filename: HomePage index.js
 * created on 8 Mar 2020
 * 
 * Purpose: Display's home page i.e landing page of the App.   
 */

 /** 
 * React Imports
 */
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';

/**
 * Custom Component import
 */
import CircularMenu from '../../components/CircularMenu/CircularMenu';

/**
 * Importing colors and styles required for Home Page
 */
import {colorCodes} from './constants';
import  HomeStyles from './styles';

/**
 * Third party library imports
 */
import { RaisedTextButton } from 'react-native-material-buttons';

/**
 * Display's home page i.e landing page of the App. 
 *
 * @class Home
 * @extends {Component}
 */
class Home extends Component {

  /**
   * Constructor Life cycle method
   * @param {*} props 
   */
  constructor(props) {
    super(props);

    //Initial state variables
    this.state = {
      circularMenuPosition: "center",
      menuItemIndex:'',
      menuItems: 0,
    };

    // An array for holding dynamic Menu items
    this.dynamicMenuItems=[];

    //Function calls to set up initial Menu items
    this.addMenuItem();
    this.addMenuItem();
    this.addMenuItem();
  }

  /**
   * Click event action method for Adding a Menu Item
   *
   * @memberof Home
   */
  addMenuItem = () => {

    let colorIndex = 0;
    let itemIndex = 0;
    if (this.dynamicMenuItems.length > 0) {
      itemIndex = this.dynamicMenuItems.length

      // Logic for setting up color index
      if (this.dynamicMenuItems.length < 11 ) {
        if (this.dynamicMenuItems.length === 10) {
          colorIndex = 0;
        } else {
          colorIndex = this.dynamicMenuItems.length;
        }
      } else {
        // menu item is greater than 10
        colorIndex = this.dynamicMenuItems.length % 10;
      }
    } 

    let colorCodeStr = colorCodes[colorIndex];

    this.dynamicMenuItems.push(
      <CircularMenu.Item key={itemIndex} buttonColor={colorCodeStr} onPress={() => this.circularMenuItemTapped(itemIndex)}/>
    );

    // Checks if compononent already mounted, perhaps display menu items
    if (this.isComponentMounted) {
      this.setState({
        menuItems: this.dynamicMenuItems.length
      });
    }
  }

  /**
   * Click event action method for "Removing a Menu Item"
   *
   * @memberof Home
   */
  removeMenuItem = () => {
    this.dynamicMenuItems.pop();
    this.setState({
      menuItems: this.dynamicMenuItems.length
    });
  }

  /**
   * Click event action method for "Setting up the position for Circular Menu"
   *
   * @memberof Home
   */
  setCircularMenuPosition = (value) => {
    this.setState({
      circularMenuPosition: value
    });
  }

  /**
   * Called when a menu item is selected
   *
   * @memberof Home
   */
  circularMenuItemTapped = (itemIndex) => {
    console.log("Menu item tapped at index - ", itemIndex)
    this.setState({
      menuItemIndex: itemIndex 
    });
  }

  /**
   * Renders UI
   *
   * @memberof Home
   */
  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <View style={HomeStyles.containerViewStyle}>
          <View style={{ alignItems: 'center'}}>
            <Text style={HomeStyles.textTitleStyle}>Circular Menu Items</Text>
            <View style={{backgroundColor: 'black', width: '40%', height: 1}}/>
            <RaisedTextButton style={HomeStyles.buttonStyle} title='Add' color='#1de9b6' titleColor='white' onPress={this.addMenuItem}/>
            <RaisedTextButton style={HomeStyles.buttonStyle} title='Remove' color='#ff8a65' titleColor='white' onPress={this.removeMenuItem}/> 
            <Text>Current Menu Items: {this.state.menuItems}</Text>
            <Text>Last selected menu item index: {this.state.menuItemIndex}</Text>
            <Text style={HomeStyles.textTitleStyle}>Set Circular Menu Position</Text>
            <View style={{backgroundColor: 'black', width: '55%', height: 1}}/>
            <RaisedTextButton style={HomeStyles.buttonStyle} title='Top-Left' color='#7e57c2' titleColor='white' onPress={() => this.setCircularMenuPosition('topLeft')}/>
            <RaisedTextButton style={HomeStyles.buttonStyle} title='Top-Center' color='#7e57c2' titleColor='white' onPress={() => this.setCircularMenuPosition('topCenter')}/>
            <RaisedTextButton style={HomeStyles.buttonStyle} title='Top-Right' color='#7e57c2' titleColor='white' onPress={() => this.setCircularMenuPosition('topRight')}/>
            <RaisedTextButton style={HomeStyles.buttonStyle} title='Middle-Left' color='#7e57c2' titleColor='white' onPress={() => this.setCircularMenuPosition('middleLeft')}/>
            <RaisedTextButton style={HomeStyles.buttonStyle} title='Middle-Right' color='#7e57c2' titleColor='white' onPress={() => this.setCircularMenuPosition('middleRight')}/>
            <RaisedTextButton style={HomeStyles.buttonStyle} title='Bottom-Left' color='#7e57c2' titleColor='white' onPress={() => this.setCircularMenuPosition('left')}/>
            <RaisedTextButton style={HomeStyles.buttonStyle} title='Bottom-Center' color='#7e57c2' titleColor='white' onPress={() => this.setCircularMenuPosition('center')}/>
            <RaisedTextButton style={HomeStyles.buttonStyle} title='Bottom-Right' color='#7e57c2' titleColor='white' onPress={() => this.setCircularMenuPosition('right')}/>
          </View>
            {/* Adding Circular Menu Component */}
          <CircularMenu buttonColor="rgba(255,122,47,1)" position={this.state.circularMenuPosition}>
            {this.dynamicMenuItems}
          </CircularMenu>
        </View>
      </SafeAreaView>
    );
  }

  /**
   * Called when component is mounted successfully - life cycle method 
   */
  componentDidMount() {
    this.isComponentMounted = true;
    this.setState({
      menuItems: this.dynamicMenuItems.length
    });
  }
}

export default Home;