import React,{useEffect,useState,useRef} from 'react';
import './About.css';

export default function About() {
    const Visiblestyle = {
        marginTop : "0rem",
        opacity: 1,
     }
     const notVisiblestyle = {
        marginTop : "1rem",
        opacity: 0,
     }
     const Option = {
        root: null,
        rootMargin: "100px",
        threshold: 0,
    }

    const myRef = useRef();
    const [aboutVisible,setaboutVisible] = useState();
    // console.log(aboutVisible);
    useEffect(()=>{
        // console.log('myref',myRef.current);
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0];
            setaboutVisible(entry.isIntersecting)
            // console.log(entry);
        },Option)
        observer.observe(myRef.current);
    },[]);
   
  return (
    <div className='About' id='About' ref={myRef} style={aboutVisible ? Visiblestyle : notVisiblestyle}>
        <h1 className='about-greyish-headtext'>About Me</h1>
        <div className='about-split'>
            <div className='about-content-section'>
                <p className='about-para-first'>
                    Hello! My name is Sabir and I enjoy creating things that live on the internet. My interest in web development started back in 2020 when I decided to try creating things on internet — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
                </p>
                <p className='about-para-second'>
                Fast-forward to today, and I’ve had the privilege of creating many website as a hobby. My main focus these days is <span className="about-greenish-highlight">building accessible, inclusive products and digital experiences</span> for <span className="about-greenish-highlight">Users</span>.
                </p>
                <div className='tech-known-sec'>
                    <p className='tech-known-header'>Here are a few technologies I’ve been working with:</p>
                    <div className='tech-split'>
                        <div>
                        <p><span className='tech-greenish-arrow'><i className="fa-solid fa-caret-right"></i></span>HTML</p>
                        <p><span className='tech-greenish-arrow'><i className="fa-solid fa-caret-right"></i></span>CSS</p>
                        <p><span className='tech-greenish-arrow'><i className="fa-solid fa-caret-right"></i></span>JavaScript(ES6+)</p>
                        </div>
                        
                        <div>
                        <p><span className='tech-greenish-arrow'><i className="fa-solid fa-caret-right"></i></span>PHP-MYSQL</p>
                        <p><span className='tech-greenish-arrow'><i className="fa-solid fa-caret-right"></i></span>BOOTSTRAP</p>
                        <p><span className='tech-greenish-arrow'><i className="fa-solid fa-caret-right"></i></span>JQUERY</p>
                        </div>
                        
                    </div>
                        <div className='more-tech'>
                        <p><span className='tech-greenish-arrow'><i className="fa-solid fa-caret-right"></i></span>
                         React (This Profolio website use React)                       
                        </p>
                        </div>
                </div>
                
            </div>
            <div className='about-img-section'>
                <img src='./Img/p.jpg'/>
                
            </div>
            
        </div>
    </div>
  )
}
