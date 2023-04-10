import { createStore } from "redux";

// action creator
export const bookingAction = (value) => {
    return {
      type: "booking",
      payload: value,
    };
  };
  
  export const deleteBookingAction = (id) => {
    return {
      type: "deleteBooking",
      payload: id,
    };
  };
  
  //init state
  const initialState = {
    userInfo: [],
  };
  
  //Reducer
  const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
      case "booking":
        return {
          ...state,
          userInfo: [...state.userInfo, action.payload],
        };
  
      case "deleteBooking":
        return {
          ...state,
          userInfo: [...state.userInfo.filter((item) => item.id !== action.payload)],
        };
  
      default:
        return state;
    }
  };
  
  //create store
  export const store = createStore(bookingReducer);
  