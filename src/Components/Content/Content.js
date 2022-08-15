import React, { Component } from 'react';
import Biografi from './Biografi';
import Skills from './Skills';
import Riwayat from './Riwayat';
import './Content.css'

export default class Content extends Component {
    render(){
        return (
            <>
                <Biografi />
                <Skills />
                <Riwayat />
            </>
        )
    }
}