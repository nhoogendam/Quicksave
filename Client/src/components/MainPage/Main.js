import React from 'react';
import igdb from 'igdb-api-node';
import { Grid } from '@material-ui/core';

const Main = () => {

    const clientId = "j3fn4nat3fpkq0261oe1m3f88atz08";
    const secret = "p29kkhrmqi7nnjzrzbvptrbdoj80be";

    const client = igdb(clientId, secret);

    return (
        <Grid container alignItems = "stretch">
            
        </Grid>
    );
};

export default Main;