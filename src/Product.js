import React from 'react'
import featured_image from './images/image/featured_image.png';
import thumb_1 from './images/image/thumb_1.png';
import thumb_2 from './images/image/thumb_2.png';
import thumb_3 from './images/image/thumb_3.png';
import shipping from './images/image/shipping.png';
import returns from './images/image/returns.png';
import exchange from './images/image/exchange.png';
export default function Product() {
  return (
    <div>
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
                    <p><strong>If you’re tired of razor cuts, painful waxing or expensive lasers — our hair eraser is for you!</strong></p>
                    <p>💜 Guarantees to remove unwanted hair 🍑 Gently exfoliates dead skin cell ✨ Painless and Non-toxic 🌱 Eco-Friendly and Reusable </p>
                    </div>
                    <div>
                    <div className="sfrom_text text-center">
                        <p>Free 2~5 Day Shipping from Nevada, USA 🇺🇸</p>
                    </div>

                    

                    <form method="post" action="/cart/add" id="product-form-main-product" acceptCharset="UTF-8" className="form" encType="multipart/form-data" noValidate="novalidate" dataType="add-to-cart-form">
                        <div className="product-form__buttons custom-atc" data-vid="">
                            <button type="submit" name="add" className="product-form__submit button button--full-width button--primary">
                                <span>Add to Bag</span>
                                <div className="loading-overlay__spinner hidden">
                                </div>
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
    </div>
  )
}
