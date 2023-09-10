import React, {Component, ReactNode, useCallback} from 'react';
import {Router} from "./src/router/router";

export default class App extends React.Component<any, any> {
    render() {
        return (
            <Router />
        );
    }
}
