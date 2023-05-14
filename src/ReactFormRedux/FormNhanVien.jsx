import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addSV, deleteSV, saveStorageJSON } from '../redux/reducer/sinhVienReducer';
// import {useParams} from 'react-router-dom'

const FormNhanVien = () => {

    const [maSV, setMa] = useState('');
    const [hoTen, setName] = useState('');
    const [sdt, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const arrSV = useSelector((state) => state.sinhVienReducer.arrSV);
    console.log('arrSV', arrSV)
    const dispatch = useDispatch();


    const handleSubmit = (event) => {
        event.preventDefault();// lỗi này em quên cách debug rồi : hình như nó ngăn render 
        //Cannot read properties of undefined (reading 'preventDefault')
        //TypeError: Cannot read properties of undefined (reading 'preventDefault')
        dispatch(addSV({ maSV, sdt, hoTen, email }))
        //lưu vào local
        saveStorageJSON('arrSinhVien', arrSV);// méo hoạt động

    }
    //phần code nút xoá
    const handleDelete = (maSVDel) => {
        dispatch(deleteSV({ maSV}))
   console.log('maSV',maSV )
    }
    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <h2 className='text-white bg-dark p-3 mt-3'>Thông tin sinh viên</h2>
                <div className="row">
                    <div className="col-6">
                        <div className="form-group">
                            <p>Mã SV</p>
                            <input type='text' name='maSV' className='form-control' id='maSV' placeholder='Nhập mã sinh viên' onInput={e => setMa(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <p>Số điện thoại</p>
                            <input type='number' name='phone' className='form-control' id='sdt' placeholder='Nhập số điện thoại' onInput={e => setPhone(e.target.value)} />
                        </div>
                        <div>
                            <button type='submit' className='btn btn-success mt-3' onClick={() => {
                                handleSubmit();

                            }}>Thêm sinh viên</button>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="form-group">
                            <p>Họ tên</p>
                            <input type='text' name='name' className='form-control' id='hoTen' placeholder='Nhập họ và tên' onInput={e => setName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <p>Email</p>
                            <input type='email' name='email' className='form-control' id='email' placeholder='Nhập email' onInput={e => setEmail(e.target.value)} />
                        </div>
                    </div>
                </div>
            </form>
            {/* chia table thành 1 component khác k có thời gian sửa*/}
            <table className=' mt-4 container'>
                <thead >
                    <tr className='text-white bg-dark ' style={{ height: '50px' }}>
                        <th>Mã SV</th>
                        <th>Họ tên</th>
                        <th>Số điện thoại</th>
                        <th>Email</th>
                        <th className='text-center'><i class="fa fa-cog"></i></th>
                    </tr>
                </thead>
                <tbody>
                    {arrSV.map((obSV, index) => {
                        return <tr key={index}>
                            <td>{obSV.maSV}</td>

                            <td>{obSV.hoTen}</td>
                            <td>{obSV.sdt}</td>
                            <td>{obSV.email}</td>
                            <td className='text-center'>
                                <button className='btn btn-danger me-2'  onClick={() => {
                                    handleDelete();

                                }}>X</button>
                                <button className='btn btn-primary '><i class="fa fa-edit"></i></button>
                            </td>
                        </tr>
                    })}
                </tbody>


            </table>


        </div>

    )
}
export default FormNhanVien