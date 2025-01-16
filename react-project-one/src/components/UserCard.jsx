// import React from 'react'
// import nature from '../assets/nature.jpeg'

// const UserCard = () => {
//   return (
//     <div className='user-container bg-slate-500 p-10 '>
//       <p id='user-name'>ANKITA KOLEY</p>
//       <img id='user-img ' className='w-1/2 h-auto mx-auto rounded-full 'src={nature} alt='ankita'></img>
//       <p id='user-desc' className='mt-4'>Description of Ankita koley</p>
//     </div>
//   )
// }

// export default UserCard

import React from 'react';
import nature from '../assets/nature.jpeg';

const UserCard = (props) => {
  return (
    <div className="user-container bg-slate-500 p-10  border border-gray-300 shadow-lg" style={props.style}>
      <p id="user-name" className="text-lg font-bold text-center">{props.name}</p>
      <img
        id="user-img"
        className="w-1/2 h-auto mx-auto rounded-full border-4  shadow-md"
        src={props.image}
        alt="ankita"
      />
      <p id="user-desc" className="mt-4 text-center text-gray-100">{props.desc}</p>
    </div>
  );
};

export default UserCard;
