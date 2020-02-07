// src/index.jsx

import * as React from 'react'

const PushNotification = (props) => {
    const { message } = props;
    const { data, text } = message;
    const { _plugin } = data;

    return (
        <span style={
            { 
                color: 'black',
                padding: '5%',
                border: "1px solid black",
                background: "green",
            }
        }>
            {text}
        </span>
    )
}

const pushNotificationPlugin = {
    match: 'push-notification',
    component: PushNotification
}

// create if it does not exist yet
if (!window.cognigyWebchatMessagePlugins) {
    window.cognigyWebchatMessagePlugins = []
}

window.cognigyWebchatMessagePlugins.push(pushNotificationPlugin);