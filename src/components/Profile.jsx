import React from 'react';

import Tile from './Tile';

const Profile = ()=>{
    return(
        <Tile
        title="About Me"
        color="blue"
        align="left"
        >
            <p className="Profile__text Profile-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum suscipit mollitia autem impedit corrupti aperiam, in nam nemo libero animi atque temporibus sint saepe ducimus porro! Illum quam rerum mollitia?
                Illum eligendi ab nesciunt impedit fugiat quos dolorem. Eveniet culpa laboriosam dignissimos sint earum ad dolores porro cum, nulla magni perferendis velit numquam aliquam, inventore quia dolorem, error non eius!
            </p>
        </Tile>
    )
}

export default Profile