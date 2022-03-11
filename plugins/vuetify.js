import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import fa from './fa.js';
Vue.use(Vuetify);

export default ctx => {
    const vuetify = new Vuetify({
        rtl: true,
        theme: {
            dark: localStorage.getItem('dark') === 'true',
            themes: {
                dark: {
                    bg: '#28243d',
                    Blue1: '#9155fd',
                    back: '#30304d',
                    primaryBase: '#9155fd',
                    drwer: '#30304d',
                    main: '#22223d',
                    table: '#2e2e4c',
                    btn: '#fff',
                    primary: '#6b65c4',
                },
                light: {
                    bg: '#b3b9ca',
                    Blue1: '#536dfe',
                    back: '#f6f6f6',
                    primaryBase: '#64B5F6',
                    drwer: '#f3f3f4',
                    main: '#f2f5f8',
                    table: '#fff',
                    btn: '#000',
                    primary: '#6b65c4',
                },
            },
        },
        lang: {
            locales: { fa },
            current: 'fa',
        },
    });
    ctx.app.vuetify = vuetify;
    ctx.$vuetify = vuetify.framework;
};
