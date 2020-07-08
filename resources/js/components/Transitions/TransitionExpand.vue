<script>
export default {
    name: `TransitionExpand`,
    functional: true,
    render(createElement, context) {
        const data = {
            props: {
                name: `expand`
            },
            on: {
                afterEnter(element) {
                    //element.style.width = `auto`;
                },
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
                }
            }
        };
        return createElement(`transition`, data, context.children);
    }
};
</script>

<style scoped>
* {
    will-change: width;
    transform: translateZ(0);
    backface-visibility: hidden;
    perspective: 1000px;
}
</style>

<style>
.expand-enter-active,
.expand-leave-active {
    transition: width 5.2s ease-in-out;
    overflow: hidden;
}
.expand-enter,
.expand-leave-to {
    width: 0;
}
</style>
