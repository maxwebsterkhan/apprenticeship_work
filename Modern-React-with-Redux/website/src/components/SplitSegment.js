import React from 'react';

class SplitSegment extends React.Component {
  render() {
    return (
      <div style={{ marginTop: '4em', marginBottom:'4em' }} className="ui vertical stripe segment">
        <div className="ui middle aligned stackable grid container">
          <div className="row">
            <div className="eight wide column">
              <h3 style={{ fontSize: '2em' }} className="ui header">
               Stuff about website
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                commodi voluptatibus magnam quia voluptate sit autem ex corporis
                laudantium nulla officiis modi, beatae expedita dolorum quaerat
                totam cupiditate explicabo minus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit alias nesciunt mollitia repudiandae culpa, sint sed iure vitae quod quaerat vel corrupti, quas magni ea delectus suscipit tenetur at eos?
              </p>
              <h3 style={{ fontSize: '2em' }} className="ui header">
                More stuff about website
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                commodi voluptatibus magnam quia voluptate sit autem ex corporis
                laudantium nulla officiis modi, beatae expedita dolorum quaerat
                totam cupiditate explicabo minus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, commodi dignissimos eligendi rerum deserunt eveniet animi ratione fuga asperiores, id saepe, porro labore. Expedita, voluptate reiciendis possimus modi cum aut!
              </p>
            </div>
            <div className="six wide right floated column">
              <img
                src={require('./image1.jpg')}
                alt=""
                className="ui large rounded image"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SplitSegment;
