import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Line from '../components/Line'


export default class PeopleDetailPage extends React.Component {
	render(){
		const { people } = this.props.navigation.state.params;
		return(
			<View style={styles.container}>

				<Image style={styles.avatar} source={ { uri: people.picture.large } } />
				
				<View style={styles.detailContainer}>
					<Line label='Email' content={people.email}></Line>
					<Line label='City' content={people.location.city}></Line>
					<Line label='State' content={people.location.state}></Line>
					<Line label='Phone' content={people.phone}></Line>
					<Line label='Cell' content={people.cell}></Line>
					<Line label='Nationality' content={people.nat}></Line>
				</View>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 15,
	},

	avatar: {
		aspectRatio: 1,
	},

	detailContainer: {
		backgroundColor: '#e2f9ff',
		marginTop: 20,
		elevation: 1,
	},

});