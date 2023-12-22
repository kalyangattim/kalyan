
import './App.css';
import { useState } from 'react';

import fig4 from './images/fig4.png';
import fig5 from './images/fig5.png';
import fig3 from './images/fig3.png';
import fig8 from './images/fig8.png';
import fig01 from './images/fig01.png';
import fig02 from './images/fig02.png';
import fig03 from './images/fig03.png';
import fig04 from './images/fig04.png';
import fig05 from './images/fig05.png';
import fig06 from './images/fig06.png';// Tell webpack this JS file uses this image
import fig7 from './images/fig7.png';


function App() {
  const [selectedImage,setSelectedImage] = useState(fig01)
  const [value, setvalue] = useState('');
  const onChange = (event) => {
    setvalue(event.target.value);
  }
  const onSearch= (searchTerm) =>{
    console.log('search' , searchTerm);

  }

  
  return (
    <div>
    <div className="container-fluid">
      <h1 style={{paddingLeft:"100px",color:"blue"}} >Ioninks</h1>
      <div className="navbar">
        <div className="text1">
      <h4 style={{paddingLeft:"50px"}}>Expore marketplace</h4>
      </div>
      <div className="text2">
      <h4 style={{paddingLeft:"50px"}}>Explore Resource</h4>
      </div>
      <div className="text3">
      <h4 style={{paddingLeft:"30px"}}>About</h4>
      </div>
      </div>
      <div className="search">
        <input type="text" value={value} onChange={onChange} style={{ width:"200px",height:"50px"}} />
        <button onClick={()=> onSearch(value)} style={{height:"55px",width:"70px"}}> search</button>


      </div>
      
      <button style={{marginLeft:"30px",width:"100px",height:"50px",background:"blue"}}>register</button>
      

    </div>
    <div>
    <h1 style={{marginLeft:"100px"}}>NortWellFornt (New Update!)</h1>
    <div>
      <p style={{marginLeft:"100px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim <br/>
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
    </div>
    <div>
    <img  src={fig01} alt="fig01" style={{width:"50px",height:"60px",marginLeft:"100px"}} onClick={()=>(setSelectedImage(fig01))}/>;
    
    </div>
    <div>
    <img src={fig02} alt="fig02" style={{width:"50px",height:"60px",marginLeft:"100px"}} onClick={()=>(setSelectedImage(fig02))} />;
    </div>
    <div>
    <img src={fig03} alt="fig03" style={{width:"50px",height:"60px",marginLeft:"100px"}} onClick={()=>(setSelectedImage(fig03))} />;
    </div>
    <div>
    <img src={fig04} alt="fig04" style={{width:"50px",height:"60px",marginLeft:"100px"}}  onClick={()=>(setSelectedImage(fig04))}/>;
    
    </div>
    <div>
    <img src={fig05} alt="fig05" style={{width:"50px",height:"60px",marginLeft:"100px"}} onClick={()=>(setSelectedImage(fig05))}/>;
    </div>
    <div>
    <img src={fig06} alt="fig06" style={{width:"50px",height:"60px",marginLeft:"100px"}} onClick={()=>(setSelectedImage(fig06))} />;
    </div>
    <img src={selectedImage} alt="selectedImage" style={{marginLeft:"200px",marginTop:"-400px",width:"500px"}}></img>
    
    
    <p style={{marginLeft:"100px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis<br/> nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis<br/> aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla<br/> pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia<br/> deserunt mollit anim id est laborum.</p>
    <div className='nav'>
      
        <h5>price</h5>
          <p style={{marginLeft:"200px",marginTop:"-30px"}}>$18.00USD</p>
          <div className="accordion-button">
        <button style={{width:"300px",marginTop:"-500px",paddingBottom:"20px"}}>Add To Cart</button>
        </div>
        <div>
        <button style={{width:"300px",background:"blue",paddingBottom:"20px"}}>Buy Now</button>
        </div>
        <label>
          <div>
          <p>key points </p>
          <p style={{marginLeft:"250px",marginTop:"-40px",paddingBottom:"20px"}}>details</p>
          </div>
          <div>
            <p>
              Last update
            </p>
            <p style={{marginLeft:"250px",marginTop:"-40px",paddingBottom:"20px"}} >23-01-2023</p>
          
          </div>
          <div>
            <p>published</p>
            <p style={{marginLeft:"250px",marginTop:"-40px",paddingBottom:"20px"}}>23-01-2023</p>
          </div>
          <div>
           <p> documentation</p>
           <p style={{marginLeft:"250px",marginTop:"-40px"}}>included</p>
          </div>
          <div>
            <p>layout</p>
            <p style={{marginLeft:"250px",marginTop:"-40px", marginBottom:"130px",paddingBottom:"20px"}}>Responsive</p>
          </div>

        </label>
        
      
    </div>
    </div>
  
    <h4 style={{marginLeft:"100px",marginBottom:"40px"}}>Main Fearture</h4>
    <div className="ul">
    <div>
      <ul>
        <li> 4+Home Pages</li>
        <li>2+ Header layout</li>
        <li>Dark and White version are available</li>
        <li>8 different color mode</li>
        <li>6 valid html file are available</li>
        <li>W3c Vadild HTML File</li>
        <li>100% Responsive Layout</li>
        <li>Bootstrap $ FrameWork</li>
        <li>use css preprocessor</li>
        <li>Easy to customize</li>
        <li>cross Browser compatibility</li>
        <li>Free Google Fronts</li>
        

      </ul>
      
    </div>
    <div>
    <ul>
        <li>Working PHP Contact From</li>
        <li>Mailchimp Function</li>
        <li>Clean and modern Design</li>
        <li>Custom Animation</li>
        <li>creative and unique layout</li>
        <li>seo friendiy code</li>
        <li>cross browser compatibility</li>
        <li>Well documentation</li>
        <li>24/7 Friendly Customer support</li>
        <li>more version coming soon</li>
      </ul>
    </div>
    </div>
    <h4 style={{marginLeft:"100px"}}>Browse Trendy Assets</h4>
    <button style={{marginLeft:"1050px",paddingTop:"-100px",color:"blue"}}>See All</button>
    <div className="main">
      <div className="box">
    <img src={fig3} alt="fig3" style={{ width:"250px"}}/>;
    </div>
    <div className="box">
    <img src={fig4} alt="fig4" style={{ width:"250px"}} />;
    </div>
    <div className="box">
    <img src={fig5} alt="fig5" style={{ width:"250px",height:"3 00px"}}/>;
    </div>
    <div className="box">
    <img src={fig7} alt="fig7" style={{ width:"250px",height:"300px"}}/>;
    </div>

    </div>
    <h4 style={{marginLeft:"100px"}}>Discover Contributors</h4>
    <button style={{marginLeft:"1050px",color:"blue"}}>See All</button>
    <div>
    <img src={fig8} alt="fig8" style={{marginLeft:"100px",width:"1050px"}} />;
    </div>
    <footer style={{display:"flex"}}>
      <h3 style={{marginLeft:"100px" }}>Logo Space</h3>
      <div>
      <p style={{marginTop:"50px"}}> Lorem ipsum dolor sit amet consectetur<br/>adipiscing elit sed do eiusmod tempor inciddunt<br/>ut labore et dolore magna aiqua.</p>
      </div>
      <div> 
        <ul style={{marginRight:"100px"}}>
          <h3 className="h1"> company</h3>
          <li>About us</li>
          <li>meet the team</li>
          <li>news & media</li>
          <li>our project</li>
          <li>contact us</li>
        </ul>
      </div>
      <div>
        <ul style={{marginRight:"100px"}}>
          <h3 className="h1">service</h3>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
          
          
          
          
          
        </ul>
      </div>
      <div>
        <ul style={{marginRight:"100px"}}>
          <h3 className="h1">Support</h3>
          <li>term & conditions</li>
          <li>shipping policy</li>
          <li>Delivery</li>
          <li>return</li>
        </ul>
      </div>
      <div>
        
      </div>

    </footer>
    

    
    
    
    
    </div>
    
    
   
  );
}

export default App;
