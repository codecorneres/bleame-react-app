import React, { useState } from 'react'
import fingerImage from './images/image/sl-finger.png';
import featured_image from './images/image/featured_image.png';
import thumb_1 from './images/image/thumb_1.png';
import thumb_2 from './images/image/thumb_2.png';
import thumb_3 from './images/image/thumb_3.png';
import shipping from './images/image/shipping.png';
import returns from './images/image/returns.png';
import exchange from './images/image/exchange.png';


const ProductVideoSection = () => {

  const [checkedItem, setCheckedItem] = useState(null);
  const handleCheckboxChange = (event) => {
    const { value } = event.target;
    setCheckedItem(value);
  };

    return (
        <>
        <section className="pro_vid_img_sec">
            <div className="page-width">
                <div className="pro_vid_img_row">
                    <div className="vid_img_box">
                        <video className="b-lazy b-loaded" autoPlay loop muted playsInline controlsList="nodownload" src="https://cdn.shopify.com/videos/c/o/v/201ccb3390864944bda48b9b3c45b498.mp4"></video>
                    </div>
                    <div className="text_box">
                        <h3>The Future Is Hair-Free! 💜</h3>
                        <div className="pro_icon_text">
                            <div className="item">
                                <div className="progress_icn">
                                    <div className="icon_progress" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{'--value': 95}}></div>
                                </div>
                                <div className="text">
                                    Said the appearance of their strawberry legs improved
                                </div>
                            </div>
                            <div className="item">
                                <div className="progress_icn">
                                    <div className="icon_progress" role="progressbar" aria-valuenow="94" aria-valuemin="0" aria-valuemax="100" style={{'--value': 94}}></div>
                                </div>
                                <div className="text">
                                    Noticed a reduction in the appearance of ingrown hairs
                                </div>
                            </div>
                            <div className="item">
                                <div className="progress_icn">
                                    <div className="icon_progress" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{'--value': 90}}></div>
                                </div>
                                <div className="text">
                                    Saw an improvement in the look of skin firmness
                                </div>
                            </div>
                        </div>
                        <div className="b-product-card__benefits-asterisk">
                            <p> * Results according to clinical/consumer studies. For more information refer to each product page.</p>
                        </div>
                        <div className="vid_img_btn">
                            <a className="btn" href="/products/crystal-hair-eraser"><span style={{ backgroundImage: `url(${fingerImage})` }}>Buy It Now</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* -------------- */}
        <section className="page-width section-main-product-padding product--section">
   <div className="product product-inner">
      <div className="grid__item product__media-wrapper">
        <div className='outer-product-images'>
         <ul className="product__media-list grid product-images" role="presentation">
            <li className="product__media-item grid__item slider__slide is-active" data-media-id="" role="presentation">
                <img src={featured_image}></img>
            </li>
            <li className="product__media-item grid__item slider__slide is-active" data-media-id="" role="presentation">
                <img src={thumb_1}></img>
            </li>
            <li className="product__media-item grid__item slider__slide is-active" data-media-id="" role="presentation">
                <img src={thumb_2}></img>
            </li>
            <li className="product__media-item grid__item slider__slide is-active" data-media-id="" role="presentation">
                <img src={thumb_3}></img>
            </li>
         </ul>
         </div>
         <div className='outer-thumbnails-images'>
         <ul className="product__media-list grid thumbnails-images" role="presentation">
            <li className="product__media-item grid__item slider__slide is-active" data-media-id="" role="presentation">
                <img src={featured_image}></img>
            </li>
            <li className="product__media-item grid__item slider__slide is-active" data-media-id="" role="presentation">
                <img src={thumb_1}></img>
            </li>
            <li className="product__media-item grid__item slider__slide is-active" data-media-id="" role="presentation">
                <img src={thumb_2}></img>
            </li>
            <li className="product__media-item grid__item slider__slide is-active" data-media-id="" role="presentation">
                <img src={thumb_3}></img>
            </li>
         </ul>
         </div>  
      </div>
      <div className="product__info-wrapper grid__item">
         <div id="ProductInfo-main-product" className="product__info-container product__info-container--sticky">
            <h1 className="product__title">Crystal Hair Eraser</h1>
            <p className="pro-subtitle"><b>NEW: 🏆 2024 Rated Hair Removal Innovation</b></p>
            <div className="product__description rte">
            <ul>
                <li>💜 Guarantees to remove unwanted hair</li>
                <li>🍑 Gently exfoliates dead skin cells</li>
                <li>✨ Painless and Non-toxic</li>
                <li>🌱 Eco-Friendly and Reusable (lasts approximately 1 year)</li>
            </ul>
            </div>
            <div>
                <div className="kaching-bundles">
                    <div className="kaching-bundles__block-title">BUNDLE & SAVE</div>
                    <div className='kaching-bundles__bars'> 
                        <div className='kaching-bundles__bar'>
                        <label className={`kaching-bundles__bar-container ${checkedItem === "checkbox1" ? 'checked' : ''}`}>
                            <input
                            type="checkbox"
                            value="checkbox1"
                            checked={checkedItem === "checkbox1"}
                            onChange={handleCheckboxChange}
                            />
                            <div className="kaching-bundles__bar-main">
                                <div className="kaching-bundles__bar-radio"></div>
                                <div className="kaching-bundles__bar-content">
                                    <div className="kaching-bundles__bar-content-left">
                                    <div className="kaching-bundles__bar-first-line">
                                        <span className="kaching-bundles__bar-title">1 Pack</span>
                                    </div>
                                    </div>
                                    <div className="kaching-bundles__bar-pricing">
                                    <div className="kaching-bundles__bar-price">$29</div>
                                    <s className="kaching-bundles__bar-full-price">$47</s>
                                    </div>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div className='kaching-bundles__bar'>
                    <label className={`kaching-bundles__bar-container ${checkedItem === "checkbox2" ? 'checked' : ''}`}>
                        <input
                        type="checkbox"
                        value="checkbox2"
                        checked={checkedItem === "checkbox2"}
                        onChange={handleCheckboxChange}
                        />
                        <div className="kaching-bundles__bar-main">
                            <div className="kaching-bundles__bar-radio"></div>
                            <div className="kaching-bundles__bar-content">
                                <div className="kaching-bundles__bar-content-left">
                                <div className="kaching-bundles__bar-first-line">
                                    <span className="kaching-bundles__bar-title">Buy 2 Get 1 FREE</span>
                                </div>
                                <div className="kaching-bundles__bar-subtitle">+FREE Shipping</div>
                                </div>
                                <div className="kaching-bundles__bar-pricing">
                                <div className="kaching-bundles__bar-price">$48</div>
                                <s className="kaching-bundles__bar-full-price">$141</s>
                                </div>
                            </div>
                        </div>
                    </label>
                    </div>
                    <div className='kaching-bundles__bar'>
                    <label className={`kaching-bundles__bar-container ${checkedItem === "checkbox3" ? 'checked' : ''}`}>
                        <input
                        type="checkbox"
                        value="checkbox3"
                        checked={checkedItem === "checkbox3"}
                        onChange={handleCheckboxChange}
                        />
                        <div className="kaching-bundles__bar-main">
                            <div className="kaching-bundles__bar-radio"></div>
                            <div className="kaching-bundles__bar-content">
                                <div className="kaching-bundles__bar-content-left">
                                <div className="kaching-bundles__bar-first-line">
                                    <span className="kaching-bundles__bar-title">Buy 3 Get 2 FREE</span>
                                </div>
                                <div className="kaching-bundles__bar-subtitle">+FREE Shipping</div>
                                </div>
                                <div className="kaching-bundles__bar-pricing">
                                <div className="kaching-bundles__bar-price">$65</div>
                                <s className="kaching-bundles__bar-full-price">$235</s>
                                </div>
                            </div>
                        </div>
                    </label>
                  </div>
                 </div>
                </div>
                <div className="sfrom_text text-center">
                  <p>Free 2~5 Day Shipping from Nevada, USA 🇺🇸</p>
               </div>
               <form method="post" action="/cart/add" id="product-form-main-product" acceptCharset="UTF-8" className="form" encType="multipart/form-data" noValidate="novalidate" dataType="add-to-cart-form">
                  <div className="product-form__buttons custom-atc" data-vid="">
                     <button type="submit" name="add" className="product-form__submit button button--full-width button--primary">
                        <span className='outer-fingerImage'><img className="fingerImage" src={fingerImage}></img></span>
                        Add to Bag
                     </button>
                  </div>
               </form>
            </div>
            <div className="pro-iwt-wrap">
               <div className="innr">
                  <div className="inner-icon"><img loading="lazy" src={shipping}></img></div>
                  <p>Free Shipping</p>
               </div>
               <div className="innr">
                  <div className="inner-icon"><img loading="lazy" src={returns}></img></div>
                  <p>30-Day Returns</p>
               </div>
               <div className="innr">
                  <div className="inner-icon"><img loading="lazy" src={exchange}></img></div>
                  <p>Easy Exchanges</p>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
    </>
    );
};

export default ProductVideoSection;

