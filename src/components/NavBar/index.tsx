import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import ElevationScroll from '../ElevationScroll';

interface NavBarProps {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

const NavBar = (props: NavBarProps) => {
    return (
        <>
            <ElevationScroll {...props}>
                <AppBar>
                    <Toolbar style={{ justifyContent: 'center', backgroundColor: `#7a3fb5`}} >
                        <Typography variant="h6">My Github Application from Software web development 2019-2020</Typography>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar/>
        </>
    );
}

export default NavBar;