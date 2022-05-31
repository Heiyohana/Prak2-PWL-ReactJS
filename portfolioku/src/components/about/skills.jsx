import React from 'react';

import './skills.css';
// import education from './education';

const frontendSkills = [
    {
        title: 'Javascript',
        width: '65%',
        percentage: '65%',
    },
    {
        title: 'React JS',
        width: '75%',
        percentage: '75%',
    },
    {
        title: 'Laravel',
        width: '65%',
        percentage: '85%',
    }
]

const designSkill = [
    {
        title: 'Coreldraw',
        width: '95%',
        percentage: '95%',
    },
    {
        title: 'Adobe Illustrator',
        width: '70%',
        percentage: '70%',
    },
    {
        title: 'Photoshop',
        width: '85%',
        percentage: '85%',
    }
]

const skills = () => {
  return <div className='skills__wrapper d-flex gap-3 justify-content-between'>
      <div className='frontend__skill w-50'>
          {
              frontendSkills.map((item, index)=>
                <div className='skill__data'>
                    <div className='skill_title'>
                        <h6>{item.title}</h6>
                        <span>{item.percentage}</span>
                    </div>

                    <div className='skill__bar'>
                        <span className='skill__barpercent'></span>
                    </div>
                </div>
              )
          }
      </div>

      <div className='design__skill w-50'>
          {
              designSkill.map((item,index)=>
                <div className='skill__data'>
                    <div className='skill_title'>
                        <h6>{item.title}</h6>
                        <span>{item.percentage}</span>
                    </div>

                    <div className='skill__bar'>
                        <span className='skill__barpercent'></span>
                    </div>
                </div>
              )
          }
      </div>
  </div>
}

export default skills;