import React from 'react';

class FullSegment extends React.Component {
  render() {
             return (
               <div
                 style={{ paddingBottom: '100px' }}
                 className="ui text container"
               >
                 <h1
                   style={{ paddingTop: '120px', fontSize: '4em' }}
                   className="ui inverted header"
                 >
                   Company Name
                 </h1>
                 <h2 style={{ paddingBottom: '20px' }}>
                   Company description text
                 </h2>
                 <div className="ui animated fade button" tabIndex="0">
                   <div className="visible content">Find out more</div>
                   <div className="hidden content">Click here</div>
                 </div>
               </div>
             );
           }
}

export default FullSegment;
