import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import {addProperty} from '../../modules/actions';

import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const mapStateToProps = function(store) {
  console.log(store);
  return {
    properties: store.propertyState
  };
}

class AddPropForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  addProp() {
    var property, url;
    property = {
      name: this.refs.name.getValue(),
      location: this.refs.location.getValue(),
      checkInTime: '3pm',
      checkOutTime: '11am'      
    };
    let {dispatch} = this.props;
    url = '/property/';
    axios.post(url, {name: property.name,
      location: property.location,
      checkInTime: '3pm',
      checkOutTime: '11am'      
    })
    .then(res => {
      dispatch(addProperty(property));  
    })
    .catch(err => {
      console.error('Error saving to DB', err);
      alert('Add property was not successful, please try again');
    });
    this.props.openHandler();

  }

  render() {
    return (
      <div>
        <Dialog
        title='Add your property'
        modal={false}
        open={this.props.open}
        onRequestClose={()=>{this.props.openHandler()}}>
          <TextField
          ref='name'
          hintText='Property Name'
          fullWidth={true}
          /><br />
          <TextField
          ref='location'
          hintText='Location'
          fullWidth={true}
          /><br />
          <RaisedButton
          label='Add'
          primary={true}
          onTouchTap={() => this.addProp()}
          />
        </Dialog>
      </div>
    );
  }
};

export default connect(mapStateToProps)(AddPropForm);