import Card from "./components/Card"
import { motion } from "motion/react"
import img1 from "./assets/img1.jpg"
import img2 from "./assets/img2.jpg"
import img3 from "./assets/img3.jpg"
import img4 from "./assets/img4.jpg"
import img5 from "./assets/img5.jpeg"
import img6 from "./assets/img6.jpeg"
import img7 from "./assets/img7.jpg"
import img8 from "./assets/img8.jpg"
import img9 from "./assets/img9.jpg"
import img10 from "./assets/img10.jpeg"

const App = () => {
  return (
    <>
      <div className="border border-neutral-900 h-1/2 w-1/2 ml-28 mt-44 rounded-3xl overflow-hidden absolute z-10 lg:ml-96 lg:mt-60">
        <div className="flex justify-center content-center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdMfJwbO-Mef2Uo7WWvCpMStNLSWaBS0dr5A&s" alt="" className="h-full w-full absolute z-20" />
          <p className="relative z-20 pt-9 pr-9 pl-9 h-full text-xs">Hello There!<br></br>
            After a long time again because of my Stupidity.It's been eons.I know me khup kahi bolto khup hurt karto khupch rude ahe Stone cold.As u know mi khup khota bolto tasch je kahi mean rude asta that's all just a Big fat lie.I really madly Intensly Hystericaly Overwhelmingly Impulsively Obsessively Desperately Unrestrainedly Lunaticly Maniacally Psychotically Psychopathically Chaotically Love you as a friend as ur Bestie.I am really sorry for everything.
            Thank you for your everything.<br></br>Yours Truly<br></br>-- Stone Cold MARU
          </p>
        </div>
      </div>

      <div className="z-0 flex overflow-hidden w-screen h-screen grid-cols-3 relative">
        <div className="h-screen w-1/3 flex flex-col justify-center items-center gap-20 overflow-hidden">
          <motion.div
            className="flex flex-col items-center gap-20"
            initial={{ y: "-100%" }}
            animate={{ y: "100%" }}
            transition={{
              duration: 10, // Duration of one cycle
              repeat: Infinity, // Infinite looping
              ease: "linear", // Smooth linear movement
            }}
          >
            <Card img={img1} />
            <Card img={img2} />
            <Card img={img3} />
          </motion.div>
        </div>

        <div className="h-screen w-1/3 flex flex-col justify-center items-center gap-20 overflow-hidden">
          <motion.div
            className="z-0 flex flex-col items-center gap-20"
            initial={{ y: "100%" }}
            animate={{ y: "-100%" }}
            transition={{
              duration: 10, // Duration of one cycle
              repeat: Infinity, // Infinite looping
              ease: "linear", // Smooth linear movement
            }}
          >
            <Card img={img4} />
            <Card img={img5} />
            <Card img={img6} />
          </motion.div>
        </div>

        <div className=" h-screen w-1/3 flex flex-col justify-center items-center gap-20 overflow-hidden">
          <motion.div
            className="flex flex-col items-center gap-20"
            initial={{ y: "-100%" }}
            animate={{ y: "100%" }}
            transition={{
              duration: 10, // Duration of one cycle
              repeat: Infinity, // Infinite looping
              ease: "linear", // Smooth linear movement
            }}
          >
            <Card img={img7} />
            <Card img={img8} />
            <Card img={img9} />
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default App
