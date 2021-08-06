import React from 'react';
import ImgTV from '../images/tab-tv.png'
import ImgTablet from '../images/tab-tablet.png'
import ImgMacBook from '../images/tab-macbook.png'
import styled from 'styled-components'
import Button from "./Button";

const TabContentTwo = () => {
    return (
        <TabContentContainer>
            <div className="tab-content">
               <div className="tab-top-content">
                   <span>
                       Watch TV shows and movies anytime, anywhere - personalized for you.
                   </span>
                   <Button className="btn">try it now</Button>
               </div>
                <div className="tab-bottom-content">
                    <div>
                        <img src={ImgTV} style={{width: '18.75rem'}}/>
                        <h3>Watch on your TV</h3>
                        <p>Smart Tv`s, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                    </div>
                    <div>
                        <img src={ImgTablet} style={{width: '18.75rem', paddingTop: '0.625rem'}}/>
                        <h3>Watch on your TV</h3>
                        <p>Smart Tv`s, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                    </div>
                    <div>
                        <img src={ImgMacBook} style={{width: '18.75rem', paddingTop: '0.625rem', paddingBottom: '0.625 rem'}}/>
                        <h3>Watch on your TV</h3>
                        <p>Smart Tv`s, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                    </div>

                </div>
            </div>
        </TabContentContainer>
    );
};

export default TabContentTwo;

const TabContentContainer = styled.div`
  background: {
    var(--main-deep-dark);
  } 
  
  img {
    width: 31.875rem;
  }
  .tab-content {
    margin: 0 15%;
  }
  
  .tab-top-content {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    justify-content: center;
    align-items: center;
    padding: 2.5rem 0;
  }
  
  span {
    grid-column: 1 / 8;
  }
  .btn {
    //margin:  0 1.23rem 1.25rem;
    grid-column: 10 / 12;
  }
  .tab-bottom-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    text-align: center;
    margin-top: 2rem;
  }
  h3 {
    margin: 0.5rem 0;
  }
  p {
    color: var(--main-gray)
  }
`