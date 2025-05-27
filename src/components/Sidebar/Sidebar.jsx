// src/components/Sidebar/Sidebar.jsx
import React, { useState, useContext } from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';
import { context } from '../../context/Context';

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, PrevPrompts, setRecentPrompt,newChat } = useContext(context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className={`sidebar ${extended ? 'extended' : ''}`}>
      <div className='top'>
        <img
          onClick={() => setExtended(prev => !prev)}
          className='menu'
          src={assets.menu_icon}
          alt="menu"
        />
        <div onClick={()=>newChat()} className='new-chat'>
          <img className='plus' src={assets.plus_icon} alt="plus" />
          {extended && <p>New Chat</p>}
        </div>

        {extended && (
          <div className='recent'>
            <p className='recent-title'>Recent</p>
            {PrevPrompts.map((item, index) => (
              <div
                key={index}
                onClick={() => loadPrompt(item)}
                className='recent-entry'
              >
                <img src={assets.message_icon} alt="message" />
                <p>{item.slice(0, 18)} ...</p>
              </div>
            ))}
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
