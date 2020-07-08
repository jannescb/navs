<script>
export default {
    name: `TransitionExpandSide`,
    functional: true,
    render(createElement, context) {
        const data = {
            props: {
                name: `expand-side`,
            },
            on: {
                enter(element) {
                    element.style.width = `auto`;
                    const { width } = getComputedStyle(element);
                    element.style.width = 0;

                    requestAnimationFrame(() => {
                        element.style.width = width;
                    });
                },
                leave(element) {
                    const { width } = getComputedStyle(element);

                    element.style.width = width;

                    requestAnimationFrame(() => {
                        element.style.width = 0;
                    });
                },
            },
        };
        return createElement(`transition`, data, context.children);
    },
};
</script>

<style>
.expand-side-enter-active,
.expand-side-leave-active {
    transition: all 0.25s cubic-bezier(0.5, 0.33, 0.25, 1);
    overflow: hidden;
}
.expand-side-enter,
.expand-side-leave-to {
    opacity: 0;
    width: 0;
}
</style>
