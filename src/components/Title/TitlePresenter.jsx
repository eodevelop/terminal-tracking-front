import React from 'react';
import '../../styles/scss/Title.scss'
import logo from '../../images/tradlinx_logo.png'
import SelectBox from '../SelectBox';

const TitlePresenter = (props) => {
    return (
        <div className='Title'>
            <img className='Img' src={logo}/>
            <div className='Vessel'>
                <p className='Search-Vessel'>선박 검색</p>
                <input className='Search-Text' type='text' placeholder='선박명 입력'></input>
                <button className='Search-Button' >검색</button>
            </div>
            <div className='Port'>
                <p className='Select-Port'>항구 선택</p>
                <SelectBox></SelectBox>
            </div>
        </div>
    );
}

export default TitlePresenter;