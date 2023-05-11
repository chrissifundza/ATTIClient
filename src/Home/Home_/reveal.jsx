import React, { useEffect, useRef } from "react";
import { motion, useAnimation} from "framer-motion";
import { useInView } from "react-hook-inview";


export  function Reveal ({children, width = "fit-content"}){ 
    const [ref, isVisible] = useInView({
        threshold: 1,
      })
    
const mainControls = useAnimation()
const slideControls = useAnimation()
    useEffect(()=>{
console.log(isVisible)
if(isVisible) {
    mainControls.start("visible")
    slideControls.start("visible")
}
    },[isVisible])
return(

    <div ref={ref} style={{position:"relative",width,overflow:"hidden"}}>

        <motion.div
        variants={{
            hidden:{opacity:0,y:75},
            visible:{opacity:1,y:0}
        }}
        initial="hidden"
        animate={mainControls}
        transition={{duration:0.7, delay:0.4}}
        >{children}</motion.div>

        {/* <motion.div 
        
        variants={{
            hidden:{left:0,opacity:0},
            visible:{opacity:1,left:"100%"},
        }}
        initial="hidden"
        animate={slideControls}
        transition={{duration:0.5,ease:"easeIn"}}
        style={{
            position:"absolute",
            top:4,
            bottom:4,
            left:0,
            right:0,
            background:"#151d70",
            zIndex:20
        }}
        /> */}

        

    </div>
)
}