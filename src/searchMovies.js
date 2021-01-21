//import { useState } from "react";
import React ,{ useState } from "react";
import moment from 'moment';



export default function SearchMovies()
{
     
       const [query , setQuery] = useState('');
        const [movies , setMovies] = useState([]);

        const searchMovies = async (e) =>{

            console.log("submitting!!!!!");



            if ( query === null || query === "") {
              const  nameError = "Please enter Movie name";
                document.getElementById("name_error").innerHTML = nameError;
                
               
            }
        
         
    
            e.preventDefault();
            
            const url = `https://api.themoviedb.org/3/search/movie?api_key=f5e1c6cfaaffaa15609b258c009ecf3c&language=en-US&query=${query}&include_adult=false`;
            
              try{
                        const res= await fetch(url);
                        const data = await res.json();
                      //  console.log(data.results);
                            setMovies(data.results);  

             }
              catch(err){

               // const  nameError = "Please enter Movie name";
                //document.getElementById("name_error").innerHTML = nameError;
                  alert("Enter Movie Name");
                  window.location.reload();
                

              } 

              
                    
                    
 

              
                    

    }


   
        
    
       
        return(
                
            <>
                    <form className="form" onSubmit={searchMovies} >
                        <label className="label" htmlFor="query">Movie Name</label>
                        <input className="input" name="query" type="text" placeholder="Dhoom" 
                        
                        value={query} onChange={(e) => setQuery(e.target.value)} 
                        
                        />
                        <button className="button" type="submit">Search!</button>
                        <span class="error"><p id="name_error"></p></span>
                    </form>  
              
                <div className="card-list"> 
                        {
                            
                        
                           movies.map(movie => (
                              
                           
                             
                                <div className="card" key={movie.id}>
                                        <div className="card--content1">
                                                <img className="card--image"
                                                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}` }
                                                    
                                                    alt={movie.title + 'poster'}
                                                    
                                                    />
                                            </div>
                                            
                                        <div className="card--content2">
                                            <h3 className="card--title">{movie.title}</h3>
                                            <p><small>RELEASE DATE: {moment(movie.release_date).format('MMMM Do YYYY')}</small></p>
                                            <p><small>Rating: {movie.vote_average}</small></p>
                                            <p className="card--desc">{movie.overview}</p>

                                        </div>    

                                </div>  
                               
                        ))}  
                    
                    
                    
                    </div>

                
            </>
        )

     


}  