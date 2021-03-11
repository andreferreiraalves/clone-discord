import React from 'react';
import { Container, Separator } from './style';

import ServerButton from '../ServerButton/'

const ServerList: React.FC = () => {
    return (
        <Container>
            <ServerButton isHome />

            <Separator />

            <ServerButton />
            <ServerButton hasNotifications />
            <ServerButton mentions={3} />
            <ServerButton />
            <ServerButton />
            <ServerButton mentions={1} />
            <ServerButton />
            <ServerButton hasNotifications />
        </Container>
    );
};

export default ServerList;