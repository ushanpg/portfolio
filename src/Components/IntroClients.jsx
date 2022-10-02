import React,{Component} from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


export class IntroClients extends Component {  
    render()  
    {  
      return (  
        <div className="Intro-clients section">
            <OwlCarousel className="owl-theme" loop margin={10} autoplay={true} items={6} nav>
              <div class="item">
                <img src="/images/fiverr.png" />
              </div>
              <div class="item">
                <img src="/images/upwork.png" />
              </div>
              <div class="item">
                <img src="/images/html.png" />
              </div>
              <div class="item">
                <img src="/images/bootstrap.png" />
              </div>
              <div class="item">
                <img src="/images/react.png" />
              </div>
              <div class="item">
                <img src="/images/node.png" />
              </div>
            </OwlCarousel>
        </div> 
      )
    }
}