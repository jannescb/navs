<script>
export default {
    name: `TransitionExpandDown`,
    functional: true,
    render(createElement, context) {
        const data = {
            props: {
                name: `expand-down`,
            },
            on: {
                enter(element) {
                    element.style.height = `auto`;
                    const { height } = getComputedStyle(element);
                    element.style.height = 0;

                    requestAnimationFrame(() => {
                        element.style.height = height;
                    });
                },
                leave(element) {
                    const { height } = getComputedStyle(element);

                    element.style.height = height;

                    requestAnimationFrame(() => {
                        element.style.height = 0;
                    });
                },
            },
        };
        return createElement(`transition`, data, context.children);
    },
};
</script>

<style>
.expand-down-enter-active,
.expand-down-leave-active {
    transition: all 0.125s cubic-bezier(0.5, 0.33, 0.25, 1);
    overflow: hidden;
}
.expand-down-enter,
.expand-down-leave-to {
    opacity: 0;
    height: 0;
}
</style>
