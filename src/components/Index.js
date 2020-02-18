import React from 'react';
import Header from './Header';
import PredictionIndex from './PredictionIndex';
import HistoricalPredictionsIndex from './HistoricalPredictionsIndex';
import * as apiHelper from '../helpers/api'
import history from '../helpers/history'
import {toast} from 'react-toastify';
toast.configure()

class Index extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        ...this.state,
        history,
        currentPage: 'Edibility Prediction'
      };
  }
  isAuthenticated (perm) {
      if (this.refs.isLoggedIn) {
          this.setState({isLoggedIn: perm});
      }
  }
  onNavLinkChange(ev){
      ev.persist()
      let pageName = ev.target.text;
      this.setState({currentPage: pageName})
  }
  render(){
    let pageName = this.state.currentPage;
    let componentsDisplayed = [<Header onNavLinkChange={this.onNavLinkChange.bind(this)}/>];
    switch(pageName){
      case 'Edibility Prediction':
          componentsDisplayed.push(<PredictionIndex/>)
          this.state.history.replace('/edibility-prediction')
          break;
      case 'Historical Predictions':
          componentsDisplayed.push(<HistoricalPredictionsIndex/>)
          this.state.history.replace('/historical-predictions')
          break;
      default:
    }
    return(
      componentsDisplayed                           
    )
  }
}

export default Index;
