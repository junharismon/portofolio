import Spotifyy from '../../img/Spotifyy.png';
import JHN from '../../img/jhntimes.png';
import CMS from '../../img/cms.png';

let defaultValue = {
    portofolio: [
        {
            title: "SPOTIFY CLONE",
            tools: "Tools: Vue.js, Node.js, Express.js, JWT, Axios, Nodemailer, Jest, Supertest, Sequelize, Tailwind, Vite",
            img: Spotifyy
        },
        {
            title: "JHN TIMES",
            tools: "Tools: React.js, Redux.js, React-redux, React-router-dom, Redux-Thunk, Axios, Slugify, Tailwind, Vite",
            img: JHN
        },
        {
            title: "JHN CMS",
            tools: "Tools: React.js, Redux.js, React-redux, React-router-dom, Redux-Thunk, ,Node.js, Express.js, JWT, Axios, Sequelize, Tailwind, Vite",
            img: CMS
        }
    ]
}
export function Reducer(state = defaultValue, action) {
    switch (action.type) {
        case 'portofolio/fetchSuccess':
            return { ...state, portofolio: action.payload }
        default:
            return state
    }
}