import React, {Component} from 'react';
import {AutoCompleteControlled} from './components/autocomplete';
import {Shelf} from './components/shelf';


    class App extends React.Component {
      render() {
        return (
          <div>
            <AutoCompleteControlled />
            <div className= "shelfStyle" >
              <Shelf color="lightgreen" name="Ajánlott"/>
            </div>
          </div>
        )
      }
    }



export default App
