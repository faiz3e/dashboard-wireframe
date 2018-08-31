import React, { Component } from "react";

export default class Posts extends Component {
  render() {
    return (
<div>
        <div style={{ textAlign: "center",marginTop:'10rem' }}>
          <div draggable className="draggable">

          <h1>Posts is there</h1>

          </div>
          <div className="droppable" onDragOver={(e)=>{console.log(e);
             <h1>Posts is there</h1>
          }}>


          </div>
        </div>
</div>
    );
  }
}
