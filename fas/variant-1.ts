
// type Duration = "hour" | "hours" | "day" | "days" | "week" | "weeks";
type SingularDuration = 'day' | 'hour' | 'week';
type PluralDuration = `${SingularDuration}s`;
type Duration<N extends number> =
    `${N}` extends '0' | `-${string}`
    ? never
    : `${N}` extends '1'
    ? SingularDuration
    : PluralDuration;

const cacheFor = <T extends number>(factor: T, period: Duration<T>) => {
    return `TODO: return string with ${factor} and ${period}`;
};

cacheFor(-1, 'days');       // 🔥 💯
cacheFor(0, 'hours');       // 🔥 💯
cacheFor(1, 'weeks');       // 🔥 💯

cacheFor(1, 'week');        // 🔥 💯
cacheFor(5, 'hours');       // 🔥 💯
