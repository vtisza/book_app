import React, {Component} from 'react';
import {Book} from './book';


export class Shelf extends React.Component {
    render() {
      var rows = [], i = 0, n_books = 24;
      while (++i <= n_books) rows.push(i);

      return (<div style={{"backgroundColor": this.props.color}}>
          <div>{this.props.name}</div>
                {rows.map(function (i) {
          return <Book key={i} index={i} title={"Book "+i} />;
        })}
             </div>);
    }
  }
