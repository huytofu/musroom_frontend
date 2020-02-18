import React from 'react';
import * as apiHelper from '../helpers/api'
import * as generalHelper from '../helpers/general'
import * as PredictionModel from '../models/prediction';
import { Container, Row, Col } from 'reactstrap';
import MySelectForm from './MySelectForm';

class HistoricalPredictionsIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          ...this.state,
          num_last: {value: 1},
          historicalPredictions: [],
        }
    }
    
    onSubmitGetHistoricalPredictions(){
        let self = this;
        let {num_last} = this.state;
        PredictionModel.getHistoricalPredictions({num_last: num_last}, (response)=>{
            const apiRes = apiHelper.handleApiResponse(response, true);
            let predictions = apiRes.data.predictions;
            if(predictions){
                self.setState({historicalPredictions: predictions})
                let message_to_show = `Your last ${predictions.length} is/are shown below`;
                if(predictions.length < parseInt(num_last.value)){
                    message_to_show = `You have made fewer than ${num_last.value} predictions. `+message_to_show
                }
                generalHelper.alert(message_to_show);
            }
        });
    }
    
    handleChange(key, e){
        e.persist();
        let {num_last} = this.state;
        num_last = {value: e.target.value};
        this.setState({num_last: num_last})
    }
    
    showHistoricalPredictions(predictions){
        let items = predictions.map(prediction=>{
            return(
                <li type={1}>Type: <b>{prediction[0].toUpperCase()}</b> - Made at timestamp: {prediction[1]}
                    <br/>
                </li>
            )
        })
        return items
    }
    
    render(){
        let self = this;
        let {historicalPredictions} = this.state;
        let num_list = Array.from({length:50},(v,k)=>k+1);
        let choices = num_list.map(num=>{return {text: num.toString(), value: num}});
        return(
          <Container style={{marginTop: 20}}>
              <h1 className='text-center'>Retrieve your last few predictions here!</h1>
              <br/>
              <Row>
                  <h3 className='text-center col-8'>Please select number of last predictions to view</h3>
                  <Col xs={4} style={{width: '100%', backgroundColor: 'beige'}}>
                      <MySelectForm
                          handleChange = {this.handleChange}
                          data={this.state.num_last.value}
                          options={choices}
                          property='num_last'
                          className="container-fluid text-center"
                          self={self}
                      />
                  </Col>
              </Row>
              <br/>
              <div style={{textAlign:'center'}}>
                  <button 
                    onClick={this.onSubmitGetHistoricalPredictions.bind(self)}
                    className='btn btn-primary'>
                        <b>Submit</b>
                  </button>
              </div>
              <br/>
              <ul>
                  {historicalPredictions && this.showHistoricalPredictions(historicalPredictions)}
              </ul>
          </Container>
        )
    }
}

export default HistoricalPredictionsIndex;
