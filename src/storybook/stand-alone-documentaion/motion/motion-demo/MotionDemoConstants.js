import classes from "./motionDemo.module.scss";

export const KEYFRAME = Object.freeze({
    BOUNCE_IN: classes.motionBounceIn,
    BOUNCE_SMALL: classes.motionBounceSmall,
    BOUNCE_TWICE: classes.motionBounceTwice,
    EXPAND_OUT: classes.motionExpandOut,
    FADE_IN: classes.motionFadeIn,
    FADE_IN_EXPAND: classes.motionFadeInExpand,
    FADE_IN_OUT: classes.motionFadeInOut,
    FADE_OUT: classes.motionFadeOut,
    FADE_OUT_COLLAPSE: classes.motionFadeOutCollapse,
    NUDGE: classes.motionNudge,
    SHAKE: classes.motionShake,
    SLIDE_UP_IN: classes.motionSlideUpIn,
    SPIN: classes.motionSpin,
    SPIN_REVERSE: classes.motionSpinReverse,
})

export const DURATION = Object.freeze({
    PRODUCTIVE_SHORT: classes.motionProductiveShort,
    PRODUCTIVE_MEDIUM: classes.motionProductiveMedium,
    PRODUCTIVE_LONG: classes.motionProductiveLong,
    EXPRESSIVE_SHORT: classes.motionExpressiveShort,
    EXPRESSIVE_LONG: classes.motionExpressiveLong,
})

export const TIMING = Object.freeze({
    ENTER: classes.motionIimingEnter,
    EXIT: classes.motionIimingExit,
    TRANSITION: classes.motionTimingTransition,
    EMPHASIZE: classes.motionTimingEmphasize,
})
