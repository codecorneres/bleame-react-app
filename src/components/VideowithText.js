import React from 'react'
import fingerImage from '../images/image/sl-finger.png';
export default function VideowithText() {
  return (
    <section className="pro_vid_img_sec main-section">
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
  )
}
