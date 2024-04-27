type WorkStyle = 'remote' | 'onsite';

type Handler = () => void;
type HandlerFactory<WS extends WorkStyle> = (style: WS) => Handler;

type Behaviour = {
    [k in WorkStyle]: HandlerFactory<k>;
};

const getOnsiteStyleHandler: HandlerFactory<"onsite"> = (style) => {
    return (): void => {
        // use style from JS closure
        console.log(style);
    }
};

const getRemoteStyleHandler: HandlerFactory<"remote"> = (style) => {
    return () => {
        // use style from JS closure
        console.log(style);
    }
};

const myBahaviours: Behaviour = {
    onsite: getOnsiteStyleHandler,
    remote: getRemoteStyleHandler
};

const myOtherBahaviours: Behaviour = {
    onsite: getOnsiteStyleHandler,
    remote: getOnsiteStyleHandler            // 🔥 💯
};
