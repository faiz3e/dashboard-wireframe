import React, { Component } from "react";
import './app.css'
import { Draggable, Droppable } from 'react-drag-and-drop'

class App extends Component {
	state={
		workin:[1, 2,3],
		todo:[1,2],
		review:[1,2],
		done:[1],
		coll:[{"name":"card-element-133815"},{"name":"card-element-133815"},{"name":"card-element-133815"},{"name":"card-element-133815"}]
	}

	onDragEnd(result) {
	console.log("onDragEnd");
	}

  render() {
    return (
	   <div>
	    <div className="container-fluid">
	<div className="row" style={{backgroundColor:"#D7EEFE"}}> 
	<div className="col-md-2" style={{backgroundColor:"#E8E5E4",textAlign:"center"}}>
	<div id="card-569100">
				{this.state.coll.map((item,index)=>
				<Draggable>
				<div class="card1" style={{margin:"5px"}}>
					<div class="card-header">
						 <a class="collapsed card-link" data-toggle="collapse" data-parent="#card-569100" href="#card-element-133815" style={{color:"black"}}>Collapsible Group</a>
					</div>
					<div id="card-element-133815" class="collapse">
						<div class="card-body">
							Anim pariatur cliche...
						</div>
					</div>
				</div>
				</Draggable>
				)}
			</div>
			
	</div>
		<div className="col-md-2" style={{backgroundColor:"#f7deeb"}}>
		todo
		{this.state.todo.map((item,index)=>
			<Draggable>
			<div className="card" style={{cursor:"grab"}}>
				<div style={{marginLeft:"auto"}}>fs
				<img src="img_avatar2.png" alt="Avatar" className="avatar" style={{margin:"5px"}}></img>
				</div>
				<div className="card-body">
					<p className="card-text">
						Card content
					</p>
				</div>
				<div className="card-footer">
					Card footer
				</div>
			</div>
			</Draggable>
		)}
		</div>
		<div className="col-md-2" style={{backgroundColor:"#E9FEE2"}}> 
		workin
		{this.state.workin.map((item,index)=>
			<Draggable>
			<div className="card"  style={{marginTop:"20px",cursor:"grab"}}>
				<div style={{marginLeft:"auto"}}>fs
				<img src="img_avatar2.png" alt="Avatar" className="avatar" style={{margin:"5px"}}></img>
				</div>
				<div className="card-body">
					<p className="card-text">
						Card content
					</p>
				</div>
				<div className="card-footer">
					Card footer
				</div>
			</div>	</Draggable>
		)}
		</div>
		<div className="col-md-2" style={{backgroundColor:"#f7deeb"}}> 
		review
		{this.state.review.map((item,index)=>
			<Draggable  >
			<div className="card"  style={{marginTop:"20px" , cursor:"grab"}}>
				<div style={{marginLeft:"auto"}}>fs
				<img src="img_avatar2.png" alt="Avatar" className="avatar" style={{margin:"5px"}}></img>
				</div>
				<div className="card-body">
					<p className="card-text">
						Card content
					</p>
				</div>
				<div className="card-footer">
					Card footer
				</div>
			</div>	</Draggable>
		)} 
		</div>
		<div className="col-md-2" style={{backgroundColor:"#E9FEE2"}}> 
		done
		{this.state.done.map((item,index)=>
		<Draggable>	<div className="card" >
				<div style={{marginLeft:"auto",cursor:"grab"}}>vp
				<img src="img_avatar2.png" alt="Avatar" className="avatar" style={{margin:"5px"}}></img>
				</div>
				<div className="card-body">
					<p className="card-text">
						Card content
					</p>
				</div>
				<div className="card-footer">
					Card footer
				</div>
			</div></Draggable>
		)}
		</div>
		<div className="col-md-2"  style={{backgroundColor:"#E8E5E4",paddingTop:"100px",textAlign:"center"}}>
		short-cuts
	</div>
	</div>
</div>
     
      </div>


    );
  }
}

export default App;
