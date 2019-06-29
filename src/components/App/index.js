/* eslint-disable import/no-unresolved */
// == Import : npm
import React from 'react';
import axios from 'axios';

// == Import : local
import './app.scss';
import resultsData from 'src/data/results';
import SearchBar from 'src/components/SearchBar';
import Results from 'src/components/Results';

// == Composant
class App extends React.Component {
  state = {
    items:[],

  }

  resultatOnSubmit = (result) => {
    console.log(result);
    axios.get('https://api.github.com/search/repositories?q=' + result)
      .then((response) => {
        console.log(response.data);
        this.setState({ items:response.data.items })
      })
      .catch((error) => {
        console.log(error);
      });
    return result;
  }

  render() {
    const { items } = this.state;
    return (
      <div className="app">


        <SearchBar
          resultatOnSubmit={this.resultatOnSubmit}
        />
        <Results
        // array de la reponse requette axios ici !!!!
          items={items}


        />

      </div>
    );
  }
}

// == Export
export default App;
