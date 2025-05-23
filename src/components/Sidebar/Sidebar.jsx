    import React from 'react'
    import { useState } from 'react'
    import './Sidebar.css'
    import { assets } from '../../assets/assets'

    const Sidebar = () => {

        const[extended,setExtended]=useState(false)
    return (
        <div className='sidebar'>
            <div className='top'>
                <img onClick={()=>setExtended(prev=>!prev)} className='menu' src={assets.menu_icon} alt="" />
                <div className='new-chat'>
                    <img className='plus' src={assets.plus_icon} alt="" />
                    {extended?<p>New Chat</p>:null}
                </div>
                {extended?
                <div className='recent'>
                    <p className='recent-title'>Recent</p>
                
                <div className='recent-entry'>
                    <img src={assets.message_icon} alt=''/>
                    <p>What is react...</p>
                </div>
                </div>
                :null}
            </div>
            <div className='bottom'>
                <div className='bottom-item'>
                    <img src={assets.history_icon} alt=''/>
                    {extended?<p>Chat History</p>:null}
                </div>
                <div className='bottom-item'>
                    <img src={assets.settings_icon} alt=''/>
                    {extended?<p>Settings</p>:null}
                </div>
                <div className='bottom-item'>
                    <img src={assets.help_icon} alt=''/>
                    {extended?<p>Help</p>:null}
                </div>
            </div>
        </div>
    )
    }

    export default Sidebar