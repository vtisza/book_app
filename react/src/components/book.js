import React, {Component} from 'react';

export class Book extends React.Component {
    render() {
      return (<div className="bookStyle">
                {this.props.title} <br /><br />

                <div style={{"text-align": "center"}}>
                  <button  className="btn buttonStylee">
                    <span className="glyphicon glyphicon-thumbs-up"></span>
                  </button>

                 <button  className="btn buttonStylee">
                    <span className="glyphicon glyphicon-question-sign"></span>
                  </button>

                  <button  className="btn buttonStylee">
                    <span className="glyphicon glyphicon-thumbs-down"></span>
                  </button>
                </div>
             </div>);
    }
  }