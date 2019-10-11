import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';

// import Header from '../components/Header';
import PeopleList from '../components/PeopleList';

import axios from 'axios';

export default class PeoplePage extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      peoples: [],
      loading: false,
      error: false,
    };
  }

  componentDidMount(){
    this.setState({loading: true})

    /* Promise */
    axios
      .get("https://randomuser.me/api/?nat=br&results=15")
      .then(response => {
        const { results } = response.data;
        this.setState({
          peoples: results,
          loading: false
        });
      })
      .catch(error => {
        this.setState({
          error: true,
          loading: false
        })
      })
  }

  renderPage(){
    if (this.state.loading)
      return <ActivityIndicator size="large" color="#6ca2f7" />
    else if (this.state.error)
      return <Text style={styles.error}>The people died :( </Text>
    else
      return <PeopleList peoples={this.state.peoples} onPressItem={ pageParams => {
        this.props.navigation.navigate('PeopleDetail', pageParams)
      }} />
  }

  render(){
    return (
      <View style={styles.container}>
        {/* <Header title="People"/> */}

        { this.renderPage() }

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  error: {
    color: '#ff0000',
    alignSelf: 'center',
    fontSize: 40,
  }

});