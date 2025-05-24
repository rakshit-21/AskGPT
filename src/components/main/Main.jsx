import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className='main'>
        <div className='nav'>
            <p>AskGPT</p>
        </div>
        <div className='main-container'>
            <div className='greet'>
                <p>Hey, How can I help you today?</p>
            </div>
            <div className='cards'>
                <div className='card'>
                    <p>Suggest some places</p>
                    <img src={assets.compass_icon} alt=''/>
                </div>
                <div className='card'>
                    <p>Summarize the concept</p>
                    <img src={assets.bulb_icon} alt=''/>
                </div>
                <div className='card'>
                    <p>Improve the readability of code</p>
                    <img src={assets.code_icon} alt=''/>
                </div>
                
            </div>
            <div className='main-bottom'>
                <div className='search-box'>
                    <input type='text' placeholder='Enter a prompt here'/>
                    <div>
                        <img src={assets.mic_icon} alt=''/>
                        <img src={assets.send_icon} alt=''/>
                    </div>
                </div>
                <p className='bottom-info'>
                    AskGPT may display inaccurate info, including about people, so double-check its responses.
                </p>
            </div>
        </div>

    </div>
  )
}

export default Main