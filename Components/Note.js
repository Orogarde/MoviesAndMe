import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import NoteFilmItem from './NoteFilmItem';

class Note extends React.Component {

  _displayDetailForFilm = (idFilm) => {
    this.props.navigation.navigate('FilmDetail', {idFilm: idFilm})
  }

  render() {
    return (
      <FlatList
        style={styles.list}
        data={this.props.noteFilms}
        keyExtractor={(item) => item.film.id.toString()}
        renderItem={({item}) => (
          <NoteFilmItem
            film={item.film}
            note={item.note}
            displayDetailForFilm={this._displayDetailForFilm}
          />
        )}
      />
    )
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1
  }
})

const mapStateToProps = state => {
  return {
    noteFilms: state.toggleNote.noteFilms
  }
}

export default connect(mapStateToProps)(Note)
