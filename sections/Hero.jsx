'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
      {/* Hero section */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        {/* Title wrapper */}
        <div className="flex justify-center items-center flex-col relative z-10">
          {/* Title animation - sliding in from left with a delay */}
          <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
            Metaverse
          </motion.h1>
          {/* Title animation - sliding in from left with a delay */}
          <motion.div
            variants={textVariant(1.2)}
            className="flex flex-row justify-center items-center"
          >
            <h1 className={styles.heroHeading}>Ma</h1>
            {/* small white rectangle */}
            <div className={styles.heroDText} />
            <h1 className={styles.heroHeading}>Ness</h1>

          </motion.div>
        </div>

        {/* Image wrapper with gradient and stamp */}
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="relative w-full md:-mt-[20px] -mt-[12px]"
          >
            {/* Gradient background */}
            <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
            {/* Image */}
            <img src="/cover.png"
            alt="cover"
            className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
            />

            {/* Stamp button */}
            <a href="#explore">
                <div className='w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-10 relative z-10'>
                    <img src="/stamp.png"
                    alt="stamp"
                    className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain" />
                </div>
            </a>
        </motion.div>
      </motion.div>
    </section>
  );


export default Hero;
