import React from 'react';

class AddNinja extends React.Component {
    
    state = {
        name : null,
        age : null,
        belt : null
    }

    handleChange = (e) => {

        //Grab the id element from target object 
        console.log(e.target.id);

        this.setState ({

            //Update the property of state 
            [e.target.id] : e.target.value
            
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render(){
        return (<div>
                <form onSubmit={this.handleSubmit}>
                    Name : <input type="text" id = "name" onChange ={this.handleChange} />
                    Age : <input type="text" id = "age" onChange ={this.handleChange}/>
                    Belt : <input type="text" id = "belt" onChange ={this.handleChange}/>
                    
                    <button>Submit</button>

                </form>
            </div>)
    }
}
export default AddNinja