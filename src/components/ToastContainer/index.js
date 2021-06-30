import React from 'react';
import Toast from '../Toast';

export default function ToastContainer() {

    return (
        <div style={{
            width: '300px',
            position: 'fixed',
            right: '30px',
            top: '0',
            padding: '10px',
            boxSizing: 'border-box',
            display: 'flex',
            flexFlow: 'column nowrap',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Toast />
            <Toast />
            <Toast />
            <Toast />
        </div>
    );
}