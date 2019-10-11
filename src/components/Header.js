import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Header = (props) => (
	<View style={ styles.container } >
		<Text style={ styles.title } >{ props.title }</Text>
	</View>
);

const styles = StyleSheet.create({
	container: {
		marginTop: 25,
		backgroundColor: '#6ca2f7',
		alignItems: 'center',
		justifyContent: 'center',
	},

	title: {
		fontSize: 50,
		color: '#ffffff'
	}
})

export default Header;