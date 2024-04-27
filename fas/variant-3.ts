
type SingularDuration = 'day' | 'hour' | 'week';
type PluralDuration = `${SingularDuration}s`;

type DurationSpecifier<N extends number> =
    `${N}` extends '0' | `-${string}`
    ? never
    : `${N}` extends '1'
        ? `${N} ${SingularDuration}`
        : `${N} ${PluralDuration}`;

const cacheFor = <T extends number>(spec: DurationSpecifier<T>) => {
    return `TODO: return cache string with: ${spec}`;
};

cacheFor('3 hour');         // 🔥 💯
cacheFor('1 hours');        // 🔥 💯            
// The error ^ in VSCode is :
// Argument of type '"1 hours"' is not assignable to parameter of 
// type '"1 day" | "1 hour" | "1 week"'

cacheFor('0 weeks');        // 🔥 💯

cacheFor('1 week');         // 🔥 💯
cacheFor('5 hours');        // 🔥 💯     


let dependentArgs = (
    weightInKg: number,
    heightInMeters: number, 
    bmi = (weightInKg / (heightInMeters * heightInMeters))
) => {
    console.log(weightInKg, heightInMeters, bmi);
};

