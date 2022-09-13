import axios from 'axios';
const url = 'http://localhost:8080/api/v1/messages';


export const getmessage = () => async (dispatch) => {
    const res = await axios.get(url)
    const data = res.data
    dispatch({ type: 'COMPLETE_MESSAGE', payload: data });
};


const messageReducer = (state = '', action) => {
    switch (action.type) {
      case 'COMPLETE_MESSAGE':
        return action.payload;
      default:
        return state;
    }
  };


  
  export default messageReducer;