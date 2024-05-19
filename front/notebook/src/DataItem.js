
// // DataItem.js
// import React from 'react';

// const DataItem = ({ data }) => {
//   return (
//     <div>
//       <p>{data.message}</p>
//       {/* أو يمكنك استخدام أي ملكية تحمل الرسالة بدلاً من id */}
      
//     </div>
//   );
// };

// export default DataItem;

 // في DataItem.jsx
//  import React from 'react';

//  const DataItem = ({ data }) => {
//    return (
//      <div>
//        {Object.entries(data).map(([key, value]) => (
//          <p key={key}>{`${key}: ${value}`}</p>
//        ))}
//      </div>
//    );
//  };
 
//  export default DataItem;
 

// import React from 'react';

// const DataItem = ({ data }) => {
//   return (
//     <div>
//       {Object.entries(data).map(([key, value]) => (
//         <p >
//           {data}
//         </p>
//       ))}
//     </div>
//   );
// };

// export default DataItem;

import React from 'react';

const DataItem = ({ data }) => {
  return (
    <div>
      {Object.entries(data).map(([key, value]) => (
        <p key={key}>
          {key}: {value}
        </p>
      ))}
    </div>
  );
};

export default DataItem;
