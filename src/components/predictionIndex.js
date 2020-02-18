import React from 'react';
import * as apiHelper from '../helpers/api'
import * as generalHelper from '../helpers/general'
import * as PredictionModel from '../models/prediction';
import * as propertyChoices from '../constants/choices';
import { Container, Row, Col } from 'reactstrap';
import MySelectForm from './MySelectForm';

// const useStyles = makeStyles(theme => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));

class PredictionIndex extends React.Component {
    constructor (props) {
        super(props);
        // validations['session_unq_email'] = (email)=>{
        //   if(email) {
        //     if(!ValidationHelper.validateEmail(email)) {
        //         return { error: "Entered email address must be valid." };
        //     }
        //   }
        // };
        this.state = {
            ...this.state,
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
            currentPrediction: null
        }
    }
    
    onSubmitPropertiesForPrediction(){
        let self = this;
        let {mushroom_data} = this.state;
        PredictionModel.getCurrentPrediction({mushroom_data: mushroom_data}, (response)=>{
            const apiRes = apiHelper.handleApiResponse(response, true);
            let label = apiRes.data.label.replace('\n','');
            if(label){
                self.setState({currentPrediction: label})
                generalHelper.alert(`Your mushroom label is ${label}`)
            }
        });
    }
    
    handleChange(key, e){
        e.persist();
        let {mushroom_data} = this.state;
        mushroom_data[key] = {value: e.target.value};
        this.setState({mushroom_data: mushroom_data})
    }
    
    showPrediction(currentPred){
        switch(currentPred.toLowerCase()){
          case 'edible':
              return(
                  <h2 style={{textAlign: 'center'}}><em>Yay! It is edible!</em></h2>
              )
              break
          default:
              return(
                  <h2 style={{textAlign: 'center'}}><em>Oh no! It is poisonous!</em></h2>
              )
        }
    }
    
    render(){
      let selections = [];
      let self = this;
      let {currentPrediction} = this.state;
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
                    className='btn btn-primary'>
                        <b>Submit</b>
                  </button>
              </div>
              <br/>
              {currentPrediction && this.showPrediction(currentPrediction)}
          </Container>
      )
    }
}

export default PredictionIndex;