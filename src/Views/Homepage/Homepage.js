import React, { createRef } from 'react'
import { Component } from 'react';
import '../Homepage/Homepage.scss';
import {
    gsap,
    TimelineLite,
    TweenMax,
    Power3,
} from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Ring from '../../images/ring.png'
class Homepage extends Component {
    constructor(props) {
        super(props)
        this.trigger = createRef()
        this.text_hi = createRef()
        this.text_bio = createRef()
        this.quote = createRef()
    }
    componentDidMount() {
        gsap.registerPlugin(TextPlugin);
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(Homepage, 0, { css: { visibility: 'visible' } })

        const hi = this.text_hi.current
        const text = this.text_bio.current
        const quote = this.quote.current

        gsap.from(hi.children[0], 1, { y: 1280, ease: Power3.easeOut, opacity: 0 })

        gsap.to(text.children[0], 1, { text: "I am Aniket.", ease: "none" },)
        gsap.to(text.children[0], 4, { text: "I build interactive websites that run across platforms & devices.", ease: "none", delay: 1.4 })


        ScrollTrigger.create({
            trigger: quote.children[0],
            start: "top center",
            end: "+=500",
            animation: gsap.to(
                quote.children[0],
                1,
                { width: 0, ease: Power3.easeOut }
            )
        });

        ScrollTrigger.create({
            trigger: quote.children[0],
            start: "top center",
            end: "+=500",
            animation: gsap.from(
                quote.children[1],
                1,
                {
                    zIndex: -100,
                    x: 50,
                    ease: Power3.easeOut
                }
            )
        });
        ScrollTrigger.create({
            trigger: quote.children[0],
            start: "top center",
            end: "+=500",
            animation: gsap.from(
                quote.children[2],
                1,
                { zIndex: -100, x: -50, ease: Power3.easeOut }
            )
        });

    }
    render() {
        return (
            <div className="container">
                <div className="loading-screen">
                    <div className="loading-ring1">
                        <img src={Ring} alt="ring1" />
                    </div>
                    <div className="loading-ring2">
                        <img src={Ring} alt="ring2" />
                    </div>
                </div>
                <div className="container-inner-content">
                    <div ref={this.text_hi} className="hi-inner-content">
                        <p className="hi-inner">Hey!</p>
                    </div>
                    <div ref={this.text_bio} className="bio-inner-content">
                        <p className="bio-inner" />
                    </div>
                </div>
                <div className="container-inner-quote">
                    <div className="quote-inner-content" ref={this.quote}>
                        <div className="quote-inner-cover"></div>
                        <p className="quote-inner">"rage! rage!</p>
                        <p className="quote-inner" id="against" >against the dying light"</p>
                    </div>
                </div>
                <div ref={this.trigger}>
                </div>
            </div>

        )
    }
}
export default Homepage