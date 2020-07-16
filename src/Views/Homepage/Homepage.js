import React, { createRef } from 'react'
import { Component } from 'react';
import '../Homepage/Homepage.scss';
import { 
    gsap,
    TimelineLite, 
    TweenMax, 
    Power3, 
    TweenLite } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin'
class Homepage extends Component {
    constructor(props) {
        super(props)
        this.text_hi = createRef()
        this.text_bio = createRef()
    }
    componentDidMount() {
        gsap.registerPlugin(TextPlugin);
        TweenMax.to(Homepage, 0, { css: { visibility: 'visible' } })
        let tl = new TimelineLite({ delay: 0 });
        let tl2 = new TimelineLite({ delay: 1.3 });
        const hi = this.text_hi.current
        const text = this.text_bio.current
        tl.from(hi.children[0], 1, { y: 1280, ease: Power3.easeIn, color: "white" })
        tl2.to(
            text.children[0], 1,
            { text: "I am Aniket.", ease: "none" }
        )
        tl2.to(
            text.children[0], 4,
            { text: "I build interactive websites that run across platforms & devices.", ease: "none" },
        )

        
    }
    render() {
        return (
            <div className="container">
                <div className="container-inner-content">
                    <div ref={this.text_hi} className="hi-inner-content">
                        <p className="hi-inner">Hey!</p>
                    </div>
                    <div ref={this.text_bio} className="bio-inner-content">
                        <p className="bio-inner">
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Homepage