import React from 'react';
import preloader from "../../assets/images/loader.gif";

const Preloader = () => {
    return (
        <div>
            <img src={preloader} alt={'preloader'}/>
        </div>
    );
};

export default Preloader;