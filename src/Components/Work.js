import React, { useEffect, useState, useRef } from "react";
import "./Work.css";

export default function Work() {
  const Visiblestyle = {
    marginTop: "0rem",
    opacity: 1,
  };
  const notVisiblestyle = {
    marginTop: "1rem",
    opacity: 0,
  };

  const Option = {
    root: null,
    rootMargin: "100px",
    threshold: 0,
  };
  const myRef = useRef();
  const [workVisible, setworkVisible] = useState();
  // console.log(workVisible);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setworkVisible(entry.isIntersecting);
    }, Option);
    observer.observe(myRef.current);
  }, []);
  
  return (
    <div>
      <div
        className="Work"
        id="Work"
        ref={myRef}
        style={workVisible ? Visiblestyle : notVisiblestyle}
      >
        <h1 className="work-section-header">Some Things I've Built</h1>
        <div className="work-container">
            <div className="work-card">
                <img src="./Img/ytpro1.png" alt="Clone of Youtube"/>
               <h3 className="work-title"><a href="https://sabirshaikh44.github.io/YouTubeClone/" target="_blank" rel="noreferrer noopener">YoutubeClone</a></h3>
                <p className="work-desc">Clone of Youtube Using <span className="work-language-usedgreenish-text">{"{HTML/CSS/JavaScript + YoutubeAPI}"}</span> From Scratch</p>
            </div>
            <div className="work-card">
                <img src="./Img/pro2.png" alt="sabirshaikh44.github.io/Fitness_website"/>
                <h3 className="work-title"><a href="https://sabirshaikh44.github.io/Fitness_website/" target="_blank" rel="noreferrer noopener">FitnessWesbite</a></h3>
                <p className="work-desc">Fitness Website Using<span className="work-language-usedgreenish-text">{"{HTML/CSS/JavaScript}"}</span>From Scratch </p>
            </div>
            <div className="work-card">
                <img src="./Img/pro8.png" alt="Instagramcloneimg"/>
                <h3 className="work-title"><a href="https://instagramclone-reactapp.web.app/" target="_blank" rel="noreferrer noopener">InstagramClone</a></h3>
                <p className="work-desc">Instagram Clone Using <span className="work-language-usedgreenish-text">{"{React_Js + Firebase (for Backend)}"}</span>From Scratch</p>
            </div>
            <div className="work-card">
                <img src="./Img/pro4.jpg" alt="travel-agency"/>
                <h3 className="work-title"><a href="https://sabirshaikh44.github.io/YouTravo---Travel-Agency/" target="_blank" rel="noreferrer noopener">YouTravo </a></h3>
                <p className="work-desc">Travel Agency Using <span className="work-language-usedgreenish-text">{"{HTML/CSS/JavaScript}"}</span>From Scratch</p>
            </div>
            <div className="work-card">
                <img src="./Img/pro5.png" alt="airbnb_clone"/>
                <h3 className="work-title"><a href='https://sabirshaikh44.github.io/challenge_airbnb_clone/' target="_blank" rel="noreferrer noopener">AirbnbClone</a></h3>
                <p className="work-desc">Airbnb Cloned Using <span className="work-language-usedgreenish-text">{"{React_Js}"}</span>From Scratch</p>
            </div>
            <div className="work-card">
                <img src="./Img/pro6.png" alt="news_app"/>
                <h3 className="work-title"><a href="https://sabirshaikh44.github.io/reactnewsweb/" target="_blank" rel="noreferrer noopener">NewsApp</a></h3>
                <p className="work-desc">News reading app Using <span className="work-language-usedgreenish-text">{"{React_Js}"}</span>From Scratch</p>
            </div>
            <div className="work-card">
                <img src="./Img/pro7.png" alt="cryptotracking_app"/>
                <h3 className="work-title"><a href="https://cryptohuntreactapp.netlify.app/" target="_blank" rel="noreferrer noopener">CryptoTracker</a></h3>
                <p className="work-desc">crypto Tracking app Using <span className="work-language-usedgreenish-text">{"{React_Js} + CoinGeecoApi + ChartJs"}</span>From Scratch</p>
            </div>
            
            
        </div>
      </div>
    </div>
  );
}
