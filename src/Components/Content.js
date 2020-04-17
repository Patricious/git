import React from "react";
import clamp from 'lodash-es/clamp'
// import { render } from "react-dom";
import { motion, useAnimation } from "framer-motion";
import { useScroll } from "react-use-gesture";
import { Container } from 'react-bootstrap';


import '../App.scss';


const podcast=[
    "/baked.jpg",
    "/lesser.jpg",
    "/pod.jpg",
    "/son.jpg"
  ]

function Content(){

    const controls = useAnimation();
    const bind = useScroll(event => {
      controls.start({
        transform: `perspective(500px) rotateY(${
          event.scrolling ? clamp(event.delta[0]) : 0
        }deg)`
      });
    });

    

    return(
        <div className="content">
          
     <Container {...bind()}>
{podcast.map(src => (
          <motion.div
            key={src}
            className="card"
            style={{
              backgroundImage: `url(${src})`
            }}
            animate={controls}
          />
        ))}

     

</Container>
        </div>

   

//  {/* <div className="container" {...bind()}>
// //         {podcast.map(src => (
// //           <motion.div
// //             key={src}
// //             className="card"
// //             style={{
// //               backgroundImage: `url(${src})`
// //             }}
// //             animate={controls}
// //           />
// //         ))}
// //       </div> */}
      
    )
}

export default Content;