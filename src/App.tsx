import React from "react";
import './main.global.css'
import {hot} from 'react-hot-loader/root';
import {Layout} from "./shared/Layout/Layout";

function AppComponent() {
    return (
        <Layout>
            Content
        </Layout>
    );
}

export const App = hot(AppComponent);