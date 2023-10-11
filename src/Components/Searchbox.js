import React ,{useContext}from 'react'//useState
// import { AllshoeData } from './AllshoeData'
import SearchIcon from '@mui/icons-material/Search';
import { MyContext } from '../App';

const Searchbox = () => {
   const {searchTerm,setSearchTerm} =useContext(MyContext)
     
  return (
    <div>
    <div className='search-templatecontainer'>
        <div className='search-inputcontainer' style={{display:"flex"}}>
           
            <label ><SearchIcon/></label><input  type='text' placeholder=  ' Search Your Shoe Here' style={{width:"200px"}} value={searchTerm}  onChange={(e)=>{
                setSearchTerm(e.target.value);
            }}/>
        </div>
      
    </div>
    </div>
  )
}

export default Searchbox
