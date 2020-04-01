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
                 <h2>Company description text</h2>
                 <div class="ui animated fade button" tabindex="0">
                   <div class="visible content">Find out more</div>
                   <div class="hidden content">Click here</div>
                 </div>
               </div>
             );
           }
}

export default FullSegment;
