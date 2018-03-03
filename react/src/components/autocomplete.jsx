import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from 'grommet/components/Header';
import Box from 'grommet/components/Box';
import Chip from 'material-ui/Chip';
import {Shelf} from './shelf';
import { connect } from 'react-redux';



class AutoCompleteControlled extends Component {
    constructor(props) {
      super(props);
  //     this.state = { recommended:[], searchText:"",      
  //     books:[ {key: 0, label: 'Gárdonyi Géza: Egri csillagok', rating: 5},
  //       {key: 1, label: 'Szerb Antal: Utas és holdvilág', rating: 5}],
  // };
  
      this.styles = {
        chip: {
          margin: 4,
        },
        wrapper: {
          display: 'flex',
          flexWrap: 'wrap',
        },
      };
  
      this.handleUpdateInput = this.handleUpdateInput.bind(this);
    }
  
    handleChipClick = () => {
      return;
    }


    handleUpdateInput = (searchText) => {
      this.setState({
        searchText: searchText,
      });
      var url="http://127.0.0.1:5000/ac="+searchText;
      console.log(url);
      fetch(url,{mode: 'cors'})
                 .then((result)=> {
                 return result.json();})
                 .then((json)=> {
                   console.log(json);
                   this.setState({
                     recommended: json,
                   });
  
                 });
    }
  
    renderChip(data) {
    return (
      <Chip
        key={data.key}
        onRequestDelete={() => this.handleRequestDelete(data.key)}
        style={this.styles.chip}
        onClick={this.handleChipClick(data.key)}
      >
        {data.label}
      </Chip>
    );
  }
  
  handleRequestDelete = (key) => {
    this.chipData = this.state.books;
    const chipToDelete = this.chipData.map((chip) => chip.key).indexOf(key);
    this.chipData.splice(chipToDelete, 1);
    this.setState({books: this.chipData});
     }
  
  handleNewRequest= (chosenRequest,index) => {
    this.setState({books: this.state.books.concat([{key:this.state.books.length,label: chosenRequest}])});
    this.setState({searchText:""});
     }
  
  
    render() {
      return (
    <div>
      <Header float={false}
        fixed={false}
        splash={false}>
        <Box flex={true}
          justify='center'
          direction='row'
          responsive={true}>
        <MuiThemeProvider>
         <AutoComplete
           ref="kereso"
           floatingLabelText="Írd be a könyv nevét"
           onUpdateInput={this.handleUpdateInput}
           onNewRequest={this.handleNewRequest}
           filter={AutoComplete.caseInsensitiveFilter}
           dataSource={this.props.recommended}
           openOnFocus={true}
           fullWidth={true}
         />
        </MuiThemeProvider>
        </Box>
      </Header>
      <MuiThemeProvider>
        <div style={this.styles.wrapper}>
          {this.props.books.map(this.renderChip, this)}
        </div>
      </MuiThemeProvider>
    </div>
          );
        }
      };

const mapStateToProps = state => {
 return {
 books: state.books,
 recommended: state.recommended,
 searchText: state.searchText
 }
}
export default connect(
 mapStateToProps
)(AutoCompleteControlled);
