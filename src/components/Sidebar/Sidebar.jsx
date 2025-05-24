import React, { useState } from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';

const Sidebar = () => {
    const [extended, setExtended] = useState(false);

    return (
        <div className={`sidebar ${extended ? 'extended' : ''}`}>
            <div className='top'>
                <img
                    onClick={() => setExtended(prev => !prev)}
                    className='menu'
                    src={assets.menu_icon}
                    alt="menu"
                />
                <div className='new-chat'>
                    <img className='plus' src={assets.plus_icon} alt="plus" />
                    {extended && <p>New Chat</p>}
                </div>

                {extended && (
                    <div className='recent'>
                        <p className='recent-title'>Recent</p>
                        <div className='recent-entry'>
                            <img src={assets.message_icon} alt="message" />
                            <p>What is react...</p>
                        </div>
                    </div>
                )}
            </div>

            <div className='bottom'>
                <div className='bottom-item'>
                    <img src={assets.history_icon} alt="history" />
                    {extended && <p>Chat History</p>}
                </div>
                <div className='bottom-item'>
                    <img src={assets.settings_icon} alt="settings" />
                    {extended && <p>Settings</p>}
                </div>
                <div className='bottom-item'>
                    <img src={assets.help_icon} alt="help" />
                    {extended && <p>Help</p>}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
