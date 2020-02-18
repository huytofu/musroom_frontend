import React from 'react';
// import ReactTable from 'react-table';
// import PropTypes from 'prop-types';
// import { withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { general, api, date, h } from '../../helpers/index';
// import * as ValidationHelper from "../../helpers/validate";
// import { config } from '../../configs/config';
// import {helpers} from '../../helpers';
// import moment from 'moment';
import * as apiHelper from '../helpers/api'
import * as generalHelper from '../helpers/general'
import * as PredictionModel from '../models/prediction';
import * as propertyChoices from '../constants/choices';
import {FormControl, NativeSelect, FormHelperText} from '@material-ui/core'
import { Container, Row, Col } from 'reactstrap'

// const useStyles = makeStyles(theme => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));

class MySelectForm extends React.Component {
    render(){
        let {handleChange, data, options, property, self} = this.props;
        let display_options = options.map(option=>{
            return (<option value={option.value}>{option.text}</option>)
        });
        return(
            <FormControl style={{margin: 5, padding: 5, width: '100%', borderColor: 'black'}}>
                <NativeSelect
                  value={data}
                  onChange={handleChange.bind(self, property)}
                  name={property}
                  inputProps={{ 'aria-label': property }}>
                  {display_options}
                </NativeSelect>
                <FormHelperText>Select value for {property}</FormHelperText>
            </FormControl>
        )
    }
}

class PredictionIndex extends React.Component {

    constructor (props) {
        super(props);
        let validations = {};
        // validations['session_unq_email'] = (email)=>{
        //   if(email) {
        //     if(!ValidationHelper.validateEmail(email)) {
        //         return { error: "Entered email address must be valid." };
        //     }
        //   }
        // };
        this.state = {
            ...this.state,
            validations,
            mushroom_data: {
              'cap-shape': {value: '0'},
              'cap-surface': {value: '0'},
              'cap-color': {value: '0'},
              'odor': {value: '0'},
              'gill-attachment': {value: '0'},
              'gill-spacing': {value: '0'},
              'gill-size': {value: '0'},
              'gill-color': {value: '0'},
              'stalk-shape': {value: '0'},
              'stalk-root': {value: '0'},
              'stalk-surface-above-ring': {value: '0'},
              'stalk-surface-below-ring': {value: '0'},
              'stalk-color-above-ring': {value: '0'},
              'stalk-color-below-ring': {value: '0'},
              'veil-type': {value: '0'},
              'veil-color': {value: '0'},
              'ring-number': {value: '0'},
              'ring-type': {value: '0'},
              'spore-print-color': {value: '0'},
              'population': {value: '0'},
              'habitat': {value: '0'},
            },
            last_num: {value: 1},
            historicalPredictions: [],
            currentPrediction: null
        }
    }
    
    onSubmitPropertiesForPrediction(){
        let {mushroom_data} = this.state;
        PredictionModel.getCurrentPrediction({mushroom_data: mushroom_data}, (response)=>{
            const apiRes = apiHelper.handleApiResponse(response, true);
            this.setState({currentPrediction: apiRes.data.label})
            generalHelper.alert(`Your label is ${apiRes.data.label}`)
        });
    }
    
    onSubmitGetHistoricalPrediction(){
        let {num_last} = this.state;
        PredictionModel.getHistoricalPredictions({last_num: num_last}, (response)=>{
            const apiRes = apiHelper.handleApiResponse(response, true);
            this.setState({historicalPredictions: apiRes.data.predictions})
        });
    }
    
    handleChange(key, e, b, c){
        e.persist();
        let {mushroom_data} = this.state;
        mushroom_data[key] = {value: e.target.value};
        this.setState({mushroom_data: mushroom_data})
    }
    
    render(){
      let selections = [];
      let self = this;
      for(let key in propertyChoices){
          selections.push(
              <Col xs={4} style={{width: '100%'}}>
              <MySelectForm
                  handleChange = {this.handleChange}
                  data={this.state.mushroom_data[key].value}
                  options={propertyChoices[key]}
                  property={key}
                  className="container-fluid text-center"
                  self={self}
              />
              </Col>
          );
      }
      return (
          <Container style={{marginTop: 20}}>
              <h1 className='text-center'>Welcome to Mushroom Edibility Prediction Challenge!</h1>
              <br/>
              <h3 className='text-center'>Please select the musroom's properties</h3>
              <Row style={{margin: 0, backgroundColor: 'beige'}}>
                  {selections}
              </Row>
              <br/>
              <div style={{textAlign:'center'}}>
              <button 
                onClick={this.onSubmitPropertiesForPrediction.bind(self)}
                onSubmit={this.onSubmitPropertiesForPrediction.bind(self)}
                className='btn btn-primary'>
                    <b>Submit</b>
              </button>
              </div>
          </Container>
      )
    }
}

export default PredictionIndex;