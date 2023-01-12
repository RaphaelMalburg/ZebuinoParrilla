import React from 'react'
import './SubHeading.css';
import { images } from '../../constants';
const SubHeading = ({title}) => (

    <div className='app__knifetext flex__center '>
        <p className='headtext__cormorant'>{title}</p>
        <div className='knife__img'/>
    </div>
)

export default SubHeading;
