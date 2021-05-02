import * as api from '../api';


//Action Creators
export const getReviews = () => async (dispatch) => {

    try{
        const { data } = await api.fetchReviews();

        dispatch({ type: 'FETCH_ALL', payload: data  })
    } catch(error){
        console.log(error);
    }
};

export const createReview = (review) => async (dispatch) => {
    try{
        const { data } = await api.createReview(review);

        dispatch({ type: 'CREATE', payload: data  });
    } catch(error){
        console.log(error);
    }
};

export const updateReview = (id, review) => async (dispatch) => {
    try{
        const {data} = await api.updateReview(id, review);

        dispatch({ type : 'UPDATE', payload : data})
    }
    catch (error) {
        console.log(error);
    }
}