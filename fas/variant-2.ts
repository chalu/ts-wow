
type SingularDuration = 'day' | 'hour' | 'week';
type PluralDuration = `${SingularDuration}s`;

type CacheConfig<N extends number> =
    `${N}` extends '0' | `-${string}`
    ? never
    : `${N}` extends '1'
        ? { factor: N, period: SingularDuration }
        : { factor: N, period: PluralDuration };

const cacheFor = <T extends number>(config: CacheConfig<T>) => {
    return `TODO: return string with ${config.factor} and ${config.period}`;
};

cacheFor({ factor: -1, period: 'days' });           // 🔥 💯
cacheFor({ factor: 0, period: 'hours' });           // 🔥 💯
cacheFor({ factor: 1, period: 'weeks' });           // 🔥 💯
// The VSCode error here ^ is :
// Type '"weeks"' is not assignable to type 'SingularDuration'. 
// Did you mean '"week"'?

cacheFor({ factor: 1, period: 'week' });            // 🔥 💯
cacheFor({ factor: 5, period: 'hours' });           // 🔥 💯




