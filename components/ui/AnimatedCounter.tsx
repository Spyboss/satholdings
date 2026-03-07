"use client";

import CountUp from "react-countup";

interface AnimatedCounterProps {
    end: number;
    suffix?: string;
    prefix?: string;
    duration?: number;
}

export default function AnimatedCounter({
    end,
    suffix = "",
    prefix = "",
    duration = 2.5
}: AnimatedCounterProps) {
    return (
        <CountUp
            end={end}
            suffix={suffix}
            prefix={prefix}
            duration={duration}
            enableScrollSpy
            scrollSpyOnce
        />
    );
}
