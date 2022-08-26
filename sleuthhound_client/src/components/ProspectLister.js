import React from 'react'
import { useSelector } from 'react-redux'
import {FacebookShareButton, FacebookIcon} from "react-share";

import Button from './Button'
import ClientFormHooks from './ClientFormHooks'

const ProspectLister = () => {

    const prospects = useSelector(state => state.prospects)
    
    return (
        <div>
            {prospects.map(prospect => 
                    prospect.photos[0] !== undefined  ? 
                        <div class="flex-container prospect-lister"> 
                            <img id="prospect-image" key={prospect.id} src={prospect.photos[0].medium} alt={prospect.name}/> 
                            <h3>{prospect.name}</h3>
                            <a href={prospect.url}>View on Petfinder</a> <br/>

                            <ClientFormHooks
                                age={prospect.age} 
                                gender={prospect.gender} 
                                pic={prospect.photos[0].large} 
                                url={prospect.url} 
                                type={prospect.species} 
                                prospectfinder_id={prospect.id}
                                name={prospect.name}
                                />

                            <FacebookShareButton
                                className="facebook"
                                url={prospect.url}
                                quote={"Sleuthhound - become a pet detective"}
                                hashtag="#sleuthhound">
                                <FacebookIcon size={20} />
                            </FacebookShareButton>

                        </div> : null)}
        </div>
    );  
};

export default ProspectLister;
