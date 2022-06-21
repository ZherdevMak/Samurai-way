import React from 'react';
let initialState = [
    {
        id: 1,
        name: 'Sasha',
        avatar: 'https://www.animeoutline.com/wp-content/uploads/2018/06/anime_cat_drawing.png'
    },
    {
        id: 2,
        name: 'Masha',
        avatar: 'https://www.animeoutline.com/wp-content/uploads/2018/06/anime_cat_drawing.png'
    },
    {
        id: 3,
        name: 'Luba',
        avatar: 'https://www.animeoutline.com/wp-content/uploads/2018/06/anime_cat_drawing.png'
    },
]

const SidebarReduser = (state: any = initialState, action:  any = {}) => {
    return state
};

export default SidebarReduser;