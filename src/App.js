import React from 'react';
import './App.css';
import {randoMize} from'./scripts.js';
import {API_KEY,API_URL,APP_ID} from'./configure';




export default class App extends React.Component {
  
    constructor(props) {
      super(props)
      this.state = { 
      suggestionId:'',SuggestionName:'',
      recipeId:'',viewRecipe:'',
      recipe:{recipe:{label:'',image:'',ingredientLines:[],source:'',url:''}}
    }
     this.handleClick = this.handleClick.bind(this);
     this.koll = this.getRecipe.bind(this);
}
  
getRecipe(Id){
      
      let url= API_URL+Id+"?type=public&app_id="+APP_ID+"&app_key="+API_KEY;
      fetch(url)
      .then((response) => response.json()) 
      .then((json) => {
          this.setState({ recipe: json })
        });
 }
 
handleClick(e){
        e.preventDefault();
       //Give me dinnertip!
        if(e.target.id==1){
        let random=randoMize()
        this.setState({ suggestionId: random.Id});
        this.setState({ suggestionName: random.Name});
      }
       
    //view recipe
      if(e.target.id==2){
        this.setState({ viewRecipe: true })
        this.getRecipe(this.state.suggestionId);
      }
    
      //No! new tip  
     if(e.target.id==3){
      this.setState({ viewRecipe: false })
      let random=randoMize()
      this.setState({ suggestionId: random.Id});
      this.setState({ suggestionName: random.Name});
      }
  }

  render() {
  
    const {suggestionName,suggestionId, viewRecipe,recipe} = this.state;
    
    return (
    
    <div className="App">
  
        <div className="container mt-0">
        
        <div className="top mt-1">
        {suggestionName 
        ? <div><img src="waiter.png"/><h1>{suggestionName}</h1></div>
        :null}
       </div>
       
       <div className ="buttonPanel">
          {!suggestionName ?
          <button className="btn btn-primary btn-lg mt-3 shadow-none" id="1" type="button" onClick={(e) =>this.handleClick(e)}  >
          Give me dinnertip!
          </button>
          :
          <button className="btn btn-primary btn-lg me-5 mt-3 shadow-none" id="3" type="button" onClick={(e) =>this.handleClick(e)}  >
          No! new tip
          </button>
          }
      
          {suggestionId ?
          <button className="btn btn-primary btn-lg  mt-3 shadow-none" id="2" type="button" onClick={(e) =>this.handleClick(e)}>
          Yes! Show recipe</button>
          : 
          null}
    </div>                
      
      {viewRecipe ? 
         <div className="card shadow-lg p-3 mb-5 bg-white rounded">
           <div className="card-header"><h3 className="card-title">{this.state.recipe.recipe.label}</h3></div>
              <div className="row g-0">
             
                <div className="col-md-4 mt-2" >
                <img src={this.state.recipe.recipe.image} className="img-fluid rounded-start" alt="..."/>
                <p className="txt mt-1">  Instructions: <a href={recipe.recipe.url} className="link" target="_blank">{recipe.recipe.source}</a></p>
                </div>
          
                <div className="col-md-8">
                    
                    <div className="card-body">
                    <h5>Ingredients: </h5>
                    <div className="list" >
                    <ul className="list-group">
                     {this.state.recipe.recipe.ingredientLines.map((item, index) => (
                    <li className="list-group-item border-0" key={index}>{item} </li>
                    ))}
                    </ul>
                    </div>

               </div>
              
              </div>
          </div>
      </div>
         :null}         
        
      </div>

    </div>
  );
}

}


