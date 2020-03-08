/**
 * Circular Menu
 * Filename: HomePage styles.js
 * created on 8 Mar 2020
 * 
 * Purpose: To manage all styles for the Home Page.   
 */

 /** 
 * React Imports
 */
import {StyleSheet} from 'react-native';

/**
 *  A styles object for homepage
 */
const HomeStyles = StyleSheet.create({
    containerViewStyle: {
        flex:1, 
        backgroundColor: '#ffffff', 
        justifyContent: 'center',
      }, 
      textTitleStyle: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
      },
      buttonStyle: {
        width:'40%', 
        margin: 5,
      }
})

export default HomeStyles;