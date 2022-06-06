import React, {useRef, forwardRef} from "react";
import useMergeRefs from "hooks/useMergeRefs";
import PropTypes from "prop-types";
import cx from "classnames";

import {
    KEYFRAME, DURATION, TIMING
} from "./MotionDemoConstants"

import classes from "./motionDemo.module.scss";

const MotionDemo = forwardRef(({
                                   className, id, keyframe, duration, timing,
                               }, ref,) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({refs: [ref, componentRef]});

    return (<button ref={mergedRef}
                 className={cx(classes.demo, keyframe, duration, timing,)}
                 id={id}></button>);
});

export default MotionDemo;

MotionDemo.keyframes = KEYFRAME;
MotionDemo.durations = DURATION;
MotionDemo.timings = TIMING;

MotionDemo.propTypes = {
    /**
     * class name to be add to the wrapper
     */
    className: PropTypes.string,
    /**
     * id to be add to the wrapper
     */
    id: PropTypes.string,
    keyframe: PropTypes.oneOf(
        [
            MotionDemo.keyframes.BOUNCE_IN,
            MotionDemo.keyframes.BOUNCE_SMALL,
            MotionDemo.keyframes.BOUNCE_TWICE,
            MotionDemo.keyframes.EXPAND_OUT,
            MotionDemo.keyframes.FADE_IN,
            MotionDemo.keyframes.FADE_IN_EXPAND,
            MotionDemo.keyframes.FADE_IN_OUT,
            MotionDemo.keyframes.FADE_OUT,
            MotionDemo.keyframes.FADE_OUT_COLLAPSE,
            MotionDemo.keyframes.NUDGE,
            MotionDemo.keyframes.SHAKE,
            MotionDemo.keyframes.SLIDE_UP_IN,
            MotionDemo.keyframes.SPIN,
            MotionDemo.keyframes.SPIN_REVERSE,
        ]
    ),
    duration: PropTypes.oneOf(
        [
            MotionDemo.durations.PRODUCTIVE_SHORT,
            MotionDemo.durations.PRODUCTIVE_MEDIUM,
            MotionDemo.durations.PRODUCTIVE_LONG,
            MotionDemo.durations.EXPRESSIVE_SHORT,
            MotionDemo.durations.EXPRESSIVE_LONG,
        ]
    ),
    timing: PropTypes.oneOf(
        [
            MotionDemo.timings.ENTER,
            MotionDemo.timings.EXIT,
            MotionDemo.timings.TRANSITION,
            MotionDemo.timings.EMPHASIZE,
        ]
    ),
};
