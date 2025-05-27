import React, { useContext } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { context } from '../../context/Context';

const Main = () => {
    const {
        onSent,
        recentPrompt,
        showResult,
        loading,
        resultData,
        setInput,
        PrevPrompts,
        input
    } = useContext(context);

    return (
        <div className='main'>
            <div className='nav'>
                <p>AskGPT</p>
            </div>
            <div className='main-container'>
                {!showResult ? (
                    <>
                        <div className='greet'>
                            <p>Hey, How can I help you today?</p>
                        </div>
                        <div className='cards'>
                            <div className='card' onClick={() => setInput("Suggest some places to visit in")}>
                                <p>Suggest some places</p>
                                <img src={assets.compass_icon} alt='' />
                            </div>
                            <div className='card' onClick={() => setInput("Summarize the concept of")}>
                                <p>Summarize the concept</p>
                                <img src={assets.bulb_icon} alt='' />
                            </div>
                            <div className='card' onClick={() => setInput("Improve the readability of this code:")}>
                                <p>Improve the readability of code</p>
                                <img src={assets.code_icon} alt='' />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className='result'>
                        <div className='result-title'>
                            <p>{recentPrompt}</p>
                        </div>
                        <div className='result-data'>
                            {loading ? (
                                <div className='loader'>
                                    <br />
                                    <hr className='animated-hr' />
                                    <hr className='animated-hr' />
                                    <hr className='animated-hr' />
                                </div>
                            ) : (
                                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            )}
                        </div>
                    </div>
                )}

                <div className='main-bottom'>
                    <div className='search-box'>
                        <input
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                            type='text'
                            placeholder='Enter a prompt here'
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && input.trim() !== '') {
                                    onSent();
                                }
                            }}
                        />
                        <div>
                            <img
                                src={assets.mic_icon}
                                alt='mic'
                                onClick={() => {
                                    const SpeechRecognition =
                                        window.SpeechRecognition || window.webkitSpeechRecognition;
                                    if (!SpeechRecognition) {
                                        alert('Speech Recognition not supported in this browser.');
                                        return;
                                    }

                                    const recognition = new SpeechRecognition();
                                    recognition.lang = 'en-US';
                                    recognition.interimResults = false;
                                    recognition.maxAlternatives = 1;

                                    recognition.start();

                                    recognition.onresult = (event) => {
                                        const transcript = event.results[0][0].transcript;
                                        setInput(transcript);
                                        onSent(transcript); // Optional auto-send
                                    };

                                    recognition.onerror = (event) => {
                                        console.error('Speech recognition error:', event.error);
                                    };
                                }}
                                style={{ cursor: 'pointer' }}
                            />
                            {input && (
                                <img
                                    onClick={() => onSent()}
                                    src={assets.send_icon}
                                    alt='send'
                                    style={{ cursor: 'pointer' }}
                                />
                            )}
                        </div>
                    </div>
                    <p className='bottom-info'>
                        AskGPT may display inaccurate info, including about people, so double-check its responses.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;
  