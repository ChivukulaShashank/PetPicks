import '../App.css';
import '../public/css/style.css';
import backslide from '../public/images/backBtn.png';
import frontslide from '../public/images/frontBtn.png';
import trend1 from '../public/images/trending1.png';
import trend2 from '../public/images/trending2.png';
import trend3 from '../public/images/trending3.png';
import trend4 from '../public/images/trending4.png';
function Home() {
  return (
        <div className = "App">
        
    <div className="nav-container" id="navContainer">
        <div className="nav-menu">
            <div className="home">
                <i className="fa-solid fa-house"></i>
            </div>
            <div className="categories">
                <i className="fa-solid fa-paw"></i>
            </div>
            <div className="nav-semicircle">
                <i className="fa-solid fa-plus"></i>
            </div>
            <div className="inbox">
                <i className="fa-regular fa-comments"></i>
            </div>
            <div className="messages">
                <i className="fa-regular fa-message"></i>
            </div>

        </div>
    </div>

    <section className="trending-container">
        <div className="trending-wrapper">
            <div className="trending-slide">
                <img id="slide-1" src={trend1} alt="bg1"/>
                <img id="slide-2" src={trend2} alt="bg2"/>
                <img id="slide-3" src={trend3} alt="bg3"/>
                <img id="slide-4" src={trend4} alt="bg4"/>
            </div>
            <div className="trending-nav">
                <a href="#slide-1"></a>
                <a href="#slide-2"></a>
                <a href="#slide-3"></a>
                <a href="#slide-4"></a>
            </div>
            <img src={backslide} id="backSlide" className="trending-image"/>
            <img src={frontslide} id="frontSlide"/>
        </div>
        <div className="trending-pagination"></div>
    </section>
    <section className="category-container">
        <div className="category-wrap">
            <img src={backslide} id="backBtn"/>
            <div className="category">
                <div>
                    <span><img src={trend2} alt="category2"/></span>
                    <span><img src={trend3} alt="category3"/></span>
                    <span><img src={trend4} alt="category4"/></span>
                </div>
                <div>
                    <span><img src={trend2} alt="category1"/></span>
                    <span><img src={trend1} alt="category2"/></span>
                    <span><img src={trend3} alt="category3"/></span>
                </div>
                <div>
                    <span><img src={trend3} alt="category1"/></span>
                    <span><img src={trend1} alt="category3"/></span>
                    <span><img src={trend2} alt="category4"/></span>
                </div>
            </div>
            <img src={frontslide} id="frontBtn"/>
        </div>   
    </section>
    </div>
  );
}

export default Home;
