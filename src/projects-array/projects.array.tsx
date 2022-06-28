import BG from "../projects-code/background-generator/background-generator";
import Robolist from "../projects-code/robolist/robolist.component";

export const projects = [
    { 
      id: 0,
      name: 'Background-generator',
      src: require('../img/img.gif'),
      project: <BG />,
    },
    { 
      id: 1,
      name: 'Robolist',
      src: require('../img/img.gif'),
      project: <Robolist />,
    },
]