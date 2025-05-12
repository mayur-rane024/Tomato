// downloaded npm i framer-motion
// Wrote this code
// Import this and start applting motion div to the components

export const fadeIn=(direction , delay) =>{
    return {
        hidden: {
            y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
            x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                // delay: delay,
                // duration: 0.5,
                // ease: "easeOut",
                type : "tween",
                duration : 1.2 ,
                delay : delay,
                ease : [ 0.25, 0.25 , 0.25 , 0.75 ]
            },

        }
    }
}