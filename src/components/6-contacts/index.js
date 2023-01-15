import React from 'react';
import './contacts.css';
import {BsGithub, BsLinkedin, BsSpotify, BsDiscord} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'

const Contacts = () => {
    return (
    <div className='contactsContainer' id='contacts'>
        <h2 className='contactsTitle'>As always, feel free to contact!</h2>
        <div className='contactsItemWrapper'>
                <a className='contactsItem' href='https://github.com/jeessh'>
                    <BsGithub/>
                </a>
                <a className='contactsItem' href='https://www.linkedin.com/in/huang-jesse/'>
                    <BsLinkedin/>
                </a>
                <a className='contactsItem2' href='mailto: jesshuang5733@gmail.com'>
                    <MdEmail/>
                </a>
                <a className='contactsItem' href='https://open.spotify.com/user/kanaphos'>
                    <BsSpotify/>
                </a>
        </div>
        <small className='contactsRights'>
            JeessH © {new Date().getFullYear()} All rights reserved.
        </small>
    </div>
    )
}

export default Contacts;