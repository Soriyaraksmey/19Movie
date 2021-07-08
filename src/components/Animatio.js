export const titleAnim = {
    hidden: { x: -500 },
    show: {
        x: 0,
        transition: { duration: 0.75, ease: "easeOut" },
    },
};
export const titleAnim1 = {
    hidden: { x: 500 },
    show: {
        x: 0,
        transition: { duration: 0.75, ease: "easeOut" },
    },
};
export const fade = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { ease: "easeOut", duration: 1.5 },
    },
};
export const ScaledAnim = {
    hidden: { scale: 0.5, opacity: 0 },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            ease: "easeOut",
            duration: 0.2,
        },
    },
};
