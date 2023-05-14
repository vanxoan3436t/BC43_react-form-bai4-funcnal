import { configureStore } from '@reduxjs/toolkit';
import sinhVienReducer from './reducer/sinhVienReducer';


export const stote = configureStore({
    reducer: {
        sinhVienReducer:sinhVienReducer

        // sinhVienReducer: (state = {
        //     maSV: '',
        //     sdt: '',
        //     hoTen: '',
        //     email: ''
        // }, action) => {
        //     switch (action.type) {
        //         case 'CHANGE_INFO': {
        //             return {...state, [action.payload.id]:action.payload.value}
        //         //     let { id, value } = action.payload;
        //         //    return state[id] = value;
        //         }
        //     }
        //     //immutable :tính bất biến
        //     return state;
        // }

      
    }

});
