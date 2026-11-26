'use client'

import { useEffect, useMemo, useState } from "react";

// Constants
const MINUTE_IN_MS = 60 * 1000;

// Cache of formatters to avoid creating a new one on every render
const formatterCache = new Map<string, Intl.DateTimeFormat>();

/**
 * Get a cached formatter for the given timezone, or create a new one if it doesn't exist
 * @param timeZone
 * @returns
 */
function getFormatter(timeZone: string): Intl.DateTimeFormat {
    let formatter = formatterCache.get(timeZone);
    if (!formatter) {
        formatter = new Intl.DateTimeFormat('en-US', {
            timeZone,
            day: '2-digit',
            month: 'short',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        });
        formatterCache.set(timeZone, formatter);
    }
    return formatter;
}

/**
 * Component that displays the current time in a specified city with no additional formatting or layout. The parent component is responsible for styling and layout.
 * @param label String city name label to display next to the time
 * @param timezone String IANA timezone name - for all valid strings, see in console with Intl.supportedValuesOf('timeZone');
 * @returns JSX.Element
 */
export const Clock = ({
    label = "Taipei",
    timezone = "Asia/Taipei",
}: {
    label?: string,
    timezone?: string,
}) => {
    // null until mounted, so the server and first client render match
    const [now, setNow] = useState<number | null>(null);

    // Returns a string "[Month(3)] [Day(2)], [Hour(2)]:[Mins(2)] [AM/PM]"
    const timeString = useMemo(
        () => (now === null ? 'Loading...' : getFormatter(timezone).format(new Date(now))),
        [now, timezone],
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
        // Return only the time string, leaving formatting and layout to the parent component
        <span style={{
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            fontVariantNumeric: "tabular-nums"
        }}>
            {label}: {timeString}
        </span>
    )
}