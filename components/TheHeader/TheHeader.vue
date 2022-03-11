<template>
    <header class="header">
        <v-container fluid class="flex-wrap align-center hidden-sm-and-down" style="display: flex">
            <v-col cols="1">
                <img src="icon.png" />
            </v-col>
            <v-list class="d-flex flex-wrap">
                <v-list-item v-for="(item,i) in items" :key="`head-md-${i}`">{{ item }}</v-list-item>
            </v-list>
            <v-spacer></v-spacer>
            <v-btn large text class="ml-6">ثبت نام</v-btn>
            <v-btn large color="primary" class="px-10 rounded-lg">ورود</v-btn>
        </v-container>
        <v-container fluid class="hidden-md-and-up align-center" style="display: flex">
            <v-icon color="#000" @click.stop="drawer = !drawer" x-large style="z-index: 1">mdi-menu</v-icon>
            <v-navigation-drawer v-model="drawer" absolute right height="100vh">
                <v-list>
                    <v-list-item v-for="(item,i) in items" :key="`head-sm-${i}`">
                        {{ item }}
                        <v-spacer />
                        <v-icon>mdi-chevron-left</v-icon>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
            <v-spacer></v-spacer>
            <v-btn color="primary" class="mx-4">ثبت نام</v-btn>
            <v-btn color="primary">ورود</v-btn>
        </v-container>
    </header>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            items: [
                'چرا ما؟',
                'درباره ما',
                'وبلاگ'
            ]
        };
    },
};
</script>

<style lang="scss">
.header {
    position: relative;
    padding: 10px 14px;

    &:after {
        content: '';
        background: url(~/static/header-circles.png) no-repeat;
        width: 426px;
        height: 382px;
        border-radius: 50%;
        position: absolute;
        right: -180px;
        top: -140px;
    }

    &:before {
        content: '';
        background: url(~/static/header-circles.png) no-repeat;
        width: 426px;
        height: 382px;
        border-radius: 50%;
        position: absolute;
        left: -252px;
        top: -158px;
    }
}
</style>
