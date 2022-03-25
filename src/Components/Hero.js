import TypewriterComponent from "typewriter-effect";
import "./Hero.css";


export default function Hero(props) {
  return (
    <div>

      <div className="Hero">
        <span className="hero-greenish1-textsm">Hi, my name is</span>
        <h1 className="hero-grey2thick-textlg" id={props.id}>
          <TypewriterComponent
            options={{
              strings: ["Sabir Shaikh"],
              autoStart: true,
              loop: true,
              delay : 150,
              deleteSpeed : 1,
              
            }}
          />
        </h1>

        <h3 className="hero-light3grey-textlg">I build things for web.</h3>
        <p className="hero-para4">
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible,Modern{" "}
          <span className="hero-para-greenhighlightedtext">human-centered</span>{" "}
          products.
        </p>
        <a className="hero-moreabout-btn" href="#About"><p >Know more about me!</p></a>
        </div>
       
      
    </div>
    
  );
}
