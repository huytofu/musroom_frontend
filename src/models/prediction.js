import $ from 'jquery';

export function getCurrentPrediction(data, callback) {
    let {mushroom_data} = data;
    if(mushroom_data){
        try{
            $.ajax({
                method: "GET",
                url: 'http://localhost:4000/prediction/get-mushroom-edibility-prediction',
                dataType: "json",
                data: data,
                success: callback
            }).done(callback);
        } catch(err){
            console.log('predictionModel.getCurrentPrediction: Error sending request to API');
            console.log(err);
        }
    } else {
        
    }
}

export function getHistoricalPredictions(data, callback) {
    let {num_last} = data;
    if(num_last){
        try{
            $.ajax({
                method: "GET",
                url: 'http://localhost:4000/prediction/get-mushroom-historical-predictions',
                dataType: "json",
                data: data,
                success: callback
            }).done(callback);
        } catch(err){
            console.log('predictionModel.getHistoricalPredictions: Error sending request to API');
            console.log(err);
        }
    } else {
        
    }
}
