import React from 'react'

const BoxArea = ({handleSetPerson,person,error,handleButton}) => {             
  return (
    <>
          <div className="box-and-purpleBar">
        <div className="purpleBar">
          <p><b>Try it free for 7 days</b> then $20/mo. thereafter</p>
        </div>
        <div className="box">
          <div>
          <input className='inputs' type="text" onChange={(e) => handleSetPerson({firstname:e.target.value})} value={person.firstname} />
          {!error.firstname ? <img  src="./images/icon-error.svg"/> : ""}
          </div>
          <div>
          <input className='inputs' type="text" onChange={(e) => handleSetPerson({lastname:e.target.value})} value={person.lastname}/>
          {!error.lastname ? <img  src="./images/icon-error.svg"/> : ""}
          </div>
          <div>
          <input className='inputs' type="email" onChange={(e) => handleSetPerson({email:e.target.value})} value={person.email}/>
          {!error.email ? <img  src="./images/icon-error.svg"/> : ""}
          </div>
          <div>
          <input className='inputs' type="password" onChange={(e) => handleSetPerson({password:e.target.value})} value={person.password}/>
          {!error.password ? <img src="./images/icon-error.svg"/> : ""}
          </div>
          <button onClick={handleButton}>CLAIM YOUR FREE TRIAL</button>
        </div>
      </div>
    </>
  )
}

export default BoxArea