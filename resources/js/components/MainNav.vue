<template>
    <nav class="bg-gray-200">
        <div class="container mx-auto flex justify-between items-center py-4">
            <div>
                <svg
                    class="fill-current h-12 w-12"
                    viewBox="0 0 240 234"
                    xml:space="preserve"
                >
                    <path
                        d="M42.5 0h155C221 0 240 19 240 42.5v149c0 23.5-19 42.5-42.5 42.5h-155C19 234 0 215 0 191.5v-149C0 19 19 0 42.5 0z"
                        fill="#00005b"
                    />
                    <path
                        fill="#fff"
                        d="M96.4 140H59.2l-7.6 23.6c-.2.9-1 1.5-1.9 1.4H30.9c-1.1 0-1.4-.6-1.1-1.8L62 70.9c.3-1 .6-1.9 1-3.1.4-2.1.6-4.3.6-6.5-.1-.5.3-1 .8-1.1H90.3c.7 0 1.2.3 1.3.8l36.5 102.5c.3 1.1 0 1.6-1 1.6h-20.9c-.7.1-1.4-.4-1.6-1.1l-8.2-24zM65 120.1h25.4c-.6-2.1-1.4-4.6-2.3-7.2-.9-2.7-1.8-5.6-2.7-8.6-1-3.1-1.9-6.1-2.9-9.2-1-3.1-1.9-6-2.7-8.9-.8-2.8-1.5-5.4-2.2-7.8h-.2c-.9 4.3-2 8.6-3.4 12.9-1.5 4.8-3 9.8-4.6 14.8-1.3 5.1-2.9 9.8-4.4 14zM187.4 130.8h-31.7c.4 3.1 1.4 6.2 3.1 8.9 1.8 2.7 4.3 4.8 7.3 6 4 1.7 8.4 2.6 12.8 2.5 3.5-.1 7-.4 10.4-1.1 3.1-.4 6.1-1.2 8.9-2.3.5-.4.8-.2.8.8v15.3c0 .4-.1.8-.2 1.2-.2.3-.4.5-.7.7-3.2 1.4-6.5 2.4-10 3-4.7.9-9.4 1.3-14.2 1.2-7.6 0-14-1.2-19.2-3.5-4.9-2.1-9.2-5.4-12.6-9.5-3.2-3.9-5.5-8.3-6.9-13.1-1.4-4.7-2.1-9.6-2.1-14.6 0-5.4.8-10.7 2.5-15.9 1.6-5 4.1-9.6 7.5-13.7 3.3-4 7.4-7.2 12.1-9.5 4.7-2.3 10.3-3.1 16.7-3.1 5.3-.1 10.6.9 15.5 3.1 4.1 1.8 7.7 4.5 10.5 8 2.6 3.4 4.7 7.2 6 11.4 1.3 4 1.9 8.1 1.9 12.2 0 2.4-.1 4.5-.2 6.4-.2 1.9-.3 3.3-.4 4.2-.1.7-.7 1.3-1.4 1.3-.6 0-1.7.1-3.3.2-1.6.2-3.5.3-5.8.3s-4.7-.4-7.3-.4zm-31.7-14.6h21.1c2.6 0 4.5 0 5.7-.1.8-.1 1.6-.3 2.3-.8v-1c0-1.3-.2-2.5-.6-3.7-1.8-5.6-7.1-9.4-13-9.2-5.5-.3-10.7 2.6-13.3 7.6-1.2 2.3-1.9 4.7-2.2 7.2z"
                    />
                </svg>
            </div>
            <div class="relative">
                <div
                    class="relative p-2 bg-gray-100 rounded-full shadow-lg flex justify-between items-center"
                    @mouseenter="visible = true"
                    @mouseleave="visible = false"
                >
                    <transition-expand-side>
                        <div class="text-blue-900" v-if="visible">
                            <div class="w-10 h-4 mx-2">
                                <div class="relative h-4 inline-block">
                                    <svg
                                        class=" block w-4 h-4 fill-current"
                                        viewBox="-3 -2 24 24"
                                    >
                                        <path
                                            d="M13.666 11.782L13 11.186V6a4 4 0 10-8 0v5.186l-.666.596A6.987 6.987 0 002.29 15h13.42a6.987 6.987 0 00-2.044-3.218zM12 17a3 3 0 01-6 0H0a8.978 8.978 0 013-6.708V6a6 6 0 1112 0v4.292A8.978 8.978 0 0118 17h-6zm-3 1a1 1 0 001-1H8a1 1 0 001 1z"
                                        />
                                    </svg>
                                    <div
                                        class="w-2 h-2 -mt-px -mr-px absolute right-0 top-0 bg-red-600 rounded-full border-gray-200 border-2 "
                                    ></div>
                                </div>
                                <div class="relative inline-block">
                                    <svg
                                        class="block w-4 h-4 fill-current"
                                        viewBox="-2 -2 24 24"
                                    >
                                        <path
                                            d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm0-14a4 4 0 014 4v2a4 4 0 11-8 0V8a4 4 0 014-4zm0 2a2 2 0 00-2 2v2a2 2 0 104 0V8a2 2 0 00-2-2zM5.91 16.876a8.033 8.033 0 01-1.58-1.232 5.57 5.57 0 012.204-1.574 1 1 0 11.733 1.86c-.532.21-.993.538-1.358.946zm8.144.022a3.652 3.652 0 00-1.41-.964 1 1 0 11.712-1.868 5.65 5.65 0 012.284 1.607 8.032 8.032 0 01-1.586 1.225z"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </transition-expand-side>
                    <img
                        class="w-12 h-12 rounded-full"
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80&crop=top"
                        @click="
                            accountNavigationVisible = !accountNavigationVisible
                        "
                    />
                    <div
                        class="w-4 h-4 mr-px mt-px absolute right-0 top-0 bg-red-600 border-gray-200 border-4 rounded-full"
                    ></div>
                </div>
                <transition-expand-down>
                    <div
                        class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg"
                        v-if="accountNavigationVisible"
                    >
                        <div class="rounded-md bg-white shadow-xs">
                            <div
                                class="py-1"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="options-menu"
                            >
                                <a
                                    href="#"
                                    class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                                    role="menuitem"
                                    >Account settings</a
                                >
                                <a
                                    href="#"
                                    class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                                    role="menuitem"
                                    >Support</a
                                >
                                <a
                                    href="#"
                                    class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                                    role="menuitem"
                                    >License</a
                                >
                            </div>
                        </div>
                    </div>
                </transition-expand-down>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'MainNav',
    data() {
        return {
            visible: false,
            accountNavigationVisible: false,
        };
    },
    methods: {
        toggleAccountNavigation() {},
    },
};
</script>
