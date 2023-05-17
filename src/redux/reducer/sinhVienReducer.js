import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  arrSV: [
    { maSV: '1', hoTen: 'Hoàng văn xoạn', sdt: '1213', email: 'vs@gmail.com' },
    { maSV: '2', hoTen: ' văn Soạn', sdt: '0001', email: 'vx@gmail.com' }
  ]
}


const sinhVienReducer = createSlice({
  name: 'sinhVienReducer',
  initialState,//STATE mặc định
  reducers: {// các hàm xử lý action
    addSV: (state, action) => {
      state.arrSV.push(action.payload)

    },
    updateSV:(state ,action)=> {
const {maSV , hoTen ,sdt,email} = action.payload;
const udSV = state.arrSV.findIndex(arrSV => arrSV.maSV == maSV);
if(udSV) {
udSV.hoTen = hoTen;
udSV.sdt = sdt;
udSV.email = email;

}

    },
    deleteSV: (state, action) => {
      const id = action.payload;
      console.log('id', id)
      const idDel = state.arrSV.findIndex(arrSV => arrSV.maSV == id);
      console.log('idDel', idDel);
      if (idDel) {

        return state.arrSV.filter(i => i.id !== id)

      }


      //useState 

    }


    ,//lưu vào local ,k kịp nên để hết ở đây
    saveStorageJSON: (name, data) => {
      const string = JSON.stringify(data);
      localStorage.setItem(name, string);
    },
    getStorageJSON: (name) => {
      if (localStorage.getItem(name)) {
        const data = JSON.parse(localStorage.getItem(name));
        return data;
      }
      return undefined;
    },
    clearStorage: (name) => {
      localStorage.removeItem(name)
    }

  }
});
export const { addSV,updateSV, deleteSV, saveStorageJSON, getStorageJSON, clearStorage } = sinhVienReducer.actions

export default sinhVienReducer.reducer