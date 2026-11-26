'use client'

import { useEffect, useMemo, useState } from "react";

const MINUTE_IN_MS = 60 * 1000;
const DATETIMEFORMAT = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Taipei',
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
});

/**
 * Component that displays the current time in a specified city
 * @param cityLabel String city name label to display next to the time
 * @returns JSX.Element
 */
export const TaipeiClock = ({
    cityLabel = "Taipei",
}: {
    cityLabel?: string,
}) => {
    // null until mounted, so the server and first client render match
    const [now, setNow] = useState<number | null>(null);

    // Returns a string "[Month(3)] [Day(2)], [Hour(2)]:[Mins(2)] [AM/PM]"
    const timeString = useMemo(
        () => (now === null ? '--' : DATETIMEFORMAT.format(new Date(now))),
        [now],
    );

    useEffect(() => {
        // Store the timeout ID so we can clear it on unmount, and to avoid multiple timers running at once
        let timeoutId: ReturnType<typeof setTimeout>;

        // Function to update the time state and set a timeout for the next update
        const tick = () => {
            const current = Date.now();
            const sinceMinuteStart = current % MINUTE_IN_MS;

            // Truncated to the minute, so state only changes when the displayed minute does
            setNow(current - sinceMinuteStart);

            // One timer at a time, aimed at the next minute boundary
            timeoutId = setTimeout(tick, MINUTE_IN_MS - sinceMinuteStart);
        };

        tick();

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div style={{
            // width: "min-content",
            height: "min-content",
            padding: "10px 7px",
            backgroundColor: "#0B0F0C",
            borderRadius: "5px",
            border: "2px solid color-mix(in oklab, #0B0F0C, white 20%)",
            color: "#7DF08A",
            fontSize: "12px",
            fontFamily: "i-sans-serif, system-ui",
        }}>
            {cityLabel}: {timeString}
        </div>
    )
}