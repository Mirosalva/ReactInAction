import React, { Component } from 'react';
const style = {
    container: {
        flex:1,
        display:'flex',
        flexDirection:'column'
    }
};
export default class Container extends Component {
    displayName ='Container';
    render () {
        return (
            <div style={style.container}>
                {this.props.children}
            </div>
        );
    }
}
