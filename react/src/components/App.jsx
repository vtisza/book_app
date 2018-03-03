import React, {Component} from 'react';
import AutoCompleteControlled from './autocomplete';
import {Shelf} from './shelf';


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
