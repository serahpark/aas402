import imuur2 from './images/imuur2.jpg'
import './styling/About.css'

const About = () => {
    return (
        <div className='about-container'>
            <div className="about-block">
                <div className="about-text">
                    <p><i>Particle Horizon</i> is a web project that I created as my final project for AAS 402: Marxist Feminisms (Fall 2024) at Williams College, taught by Professor
                    Kelly Chung. It is deeply inspired by Danh Vō’s <i>I M U U R 2</i> (2013) and Joshua Chambers-Letson’s discussion of Vō’s artwork in After the Party (2018).
                    </p>
                    <br />
                    Traditional Marxism erases the mother’s reproductive labor in favor of the white male proletariat whose labor produces commodities. In Particle Horizon,
                    I aim to place mothering at the forefront in this display of ordinary objects by utilizing the objects to demonstrate the sensuousness of a mother-child
                    relationship. <i>Particle Horizon</i> also aims to bring attention to relationships to all of the other people whose labor facilitated the mother-child relation.
                    As a digital archive, <i>Particle Horizon</i> sustains the infinite layers of intimacies contained within ordinary objects. Through recognizing and making visible/
                    audible these disappeared relationships, I hope to cultivate a perspective to the material world that considers the history and traces of an object.
                    <br />
                    <a href='https://github.com/serahpark/particle-horizon' target="_blank">View the code here!</a>
                </div>
                <div className='image'>
                    <a href='https://walkerart.org/collections/artworks/i-m-u-u-r-2' target="_blank"><img src={imuur2} href='' /></a>
                    <p>Danh Vō, <i>I M U U R 2</i>, 2013. (Walker Art Center)</p>
                </div>
            </div>
        </div>
    )

}

export default About