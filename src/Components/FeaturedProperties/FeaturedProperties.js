import "./FeaturedProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="featuredproperties">
      <div className="fpitem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Sakthi Hotel</span>
        <span className="fpCity">Pollachi</span>
        <span className="fpPrice">Starting from 1200Rs</span>
        <div className="fprating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpitem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Thaj Hotel</span>
        <span className="fpCity">Anaimalai</span>
        <span className="fpPrice">Starting from 750Rs</span>
        <div className="fprating">
          <button>9.2</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpitem">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Arul Jothi Hotel</span>
        <span className="fpCity">Uthukuli</span>
        <span className="fpPrice">Starting from 890Rs</span>
        <div className="fprating">
          <button>8.7</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpitem">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Kathar Bhai Hotel</span>
        <span className="fpCity">Pollachi</span>
        <span className="fpPrice">Starting from 450Rs</span>
        <div className="fprating">
          <button>9.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
