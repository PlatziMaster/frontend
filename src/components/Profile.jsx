import { Typography, Box } from '@material-ui/core';
import React from 'react';

import EditLocationIcon from '@material-ui/icons/EditLocation';
import WallpaperIcon from '@material-ui/icons/Wallpaper';
import BuildIcon from '@material-ui/icons/Build';

import { purple } from '@material-ui/core/colors';

function Profile({ data }) {
  return( 
    <div>
      <Box my={5} fontWeight="fontWeightLight">
        {data.Profile}
      </Box>
      <Box m={2} display="flex" justifyContent="space-around">
        <EditLocationIcon style={{ color: purple[800] }}></EditLocationIcon>
        <WallpaperIcon style={{ color: purple[800] }}></WallpaperIcon>
        <BuildIcon style={{ color: purple[800] }}></BuildIcon>
      </Box>
    </div>
  )
}; 

export default Profile; 