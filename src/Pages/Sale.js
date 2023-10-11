import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import "./Sale.css";


const Sale = () => {
  return (
    <div>
         {/* <div style={{background:"grey"}}><h1> SALE PAGE</h1></div> */}
         <Navbar/>
         <div className="lk-lk" style={{fontFamily:"sans-serif",fontSize:"40px",marginBottom:"40px"}}>
        <h1 style={{color:" #6e7051"}}>Sale</h1>
      </div>
      <div className='sale-first' style={{display:"flex",justifyContent:"space-around"}}>
        <div className='sale-f-left'>

        <img src='https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-promo-image-2.jpg'alt='img' style={{width:"574.4px",height:"400px"}}/>
       <div className='sale-txt' style={{position:"relative",top:"-300px",color:"white"}}>
        <h1>Refer A Friend </h1>
        <br/>
        <h1>Get 20% Off</h1>
        <br/>
        <div style={{display:"flex",justifyContent:"center"}}>
        <button className='sbtn' >Learn More</button></div>
        </div> 

        </div>
        <div className='sale-f-right'>
          <img src='https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-promo-image-1.jpg' alt='img' style={{width:"574.4px",height:"400px"}}/>

          <div className='sale-txt' style={{position:"relative",top:"-300px",color:"white"}}>
        <h1>Promotion </h1>
        <br/>
        <h1>Student Discount</h1>
        <br/>
        <div style={{display:"flex",justifyContent:"center"}}>
        <button className='sbtn' >Learn More</button></div>
        </div>
        </div>
        

      </div>
    

    <Footer/>
    </div>
  )
}

export default Sale
