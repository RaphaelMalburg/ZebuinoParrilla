import React from 'react'
import './SubHeading.css';
import { images } from '../../constants';
const SubHeading = ({title}) => (

    <div className='app__knifetext flex__center '>
        <p className='headtext__cormorant'>{title}</p>
        <img src={images.knifeIcon} alt="knife-icon" className='knife__img'/>
    </div>
)

export default SubHeading;


{/*import React from 'react';

import { images } from '../../constants';

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className="p__cormorant">{title}</p>
    <img src={images.spoon} alt="spoon_image" className="spoon__img" />
  </div>
);

export default SubHeading;
*/}