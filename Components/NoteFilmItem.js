import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { getImageFromApi } from '../API/TMDBApi';

class NoteFilmItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      _displayNote: false
    }
  }

  _displayNote() {
    this.setState({
      displayNote: !this.state.displayNote
    })
  }

  _displayText() {
      if (this.state.displayNote) {
        return (
          <Text style={styles.text}>Note : {this.props.note} / 5</Text>
          )
      }
      else {
        return (
          <Text style={styles.text}>{this.props.film.title}</Text>
        )
      }
  }
  render() {
    const { film, displayDetailForFilm } = this.props;
    return (
      <TouchableOpacity
        style={styles.main_container}
        onPress={() => displayDetailForFilm(film.id)}
        onLongPress={() => this._displayNote()}
        >
        <Image
          style={styles.image}
          source={{uri: getImageFromApi(film.poster_path)}}
        />
        <View style={styles.content_container}>
          {this._displayText()}
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 100,
    flexDirection: 'row'
  },
  image: {
    height: 80,
    width: 80,
    margin: 10,
    borderRadius: 40
  },
  content_container: {
    flex: 1,
    justifyContent: 'center',
    margin: 10
  },
  text: {
    fontSize: 20
  }
})

export default NoteFilmItem;
