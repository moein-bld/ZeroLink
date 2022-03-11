<template>
    <v-container class="pa-0">
        <v-col cols="12" class="ShortenerBox">
            <div class="ShortenerBox__content">
                <h1 class="ShortenerBox__title">کوتاه کننده لینک</h1>
                <p class="ShortenerBox__text">زیرو لینک بهترین کوتاه کننده لینک با امکان شخصی سازی لینک برای مدیریت لینک های خود شروع کنید ما لینک های دیجی کالا کوتاه میکنم</p>
            </div>
            <div class="ShortenerBox__main">
                <v-form class="UrlBox">
                    <div class="UrlBox__icon"><span></span></div>
                    <input type="url" class="UrlBox__field" placeholder="لینک خود را وارد کنید ..." required="" />
                    <v-btn large color="primary" class="px-10 rounded-lg UrlBox__btn">کوتاه کن</v-btn>
                </v-form>
            </div>
        </v-col>
    </v-container>
</template>

<style lang="scss">
.ShortenerBox {
    margin: 40px 0 0;
    padding: 0 200px;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;

    &::before {
        content: '';
        background: url('~/static/creat-short-links-bg.png') no-repeat 52px 0;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100vh;
        top: -80px;
    }

    &__content {
        padding: 0 45px;
    }

    &__title {
        font-size: 48px;
        color: #3c359c;
    }

    &__text {
        font-size: 15px;
        color: #54575f;
        margin-top: 17px;
        line-height: 20px;
    }

    &__main {
        background: #fff;
        border-radius: 15px;
        box-shadow: 16px 40px 54px 5px rgb(229 228 247 / 50%);
        -webkit-box-shadow: 16px 40px 54px 5px rgb(229 228 247 / 50%);
        -moz-box-shadow: 16px 40px 54px 5px rgba(229, 228, 247, 0.5);
        padding: 30px 30px;
        position: relative;
        margin-top: 55px;
    }
}

.UrlBox {
    &__icon {
        width: 52px;
        height: 75px;
        position: absolute;
        top: 31px;
        right: 30px;

        span {
            background: url('~/static/link.svg') no-repeat;
            width: 16px;
            height: 16px;
            transform: rotate(8deg);
            background-size: cover;
            position: absolute;
            left: 23px;
            top: 29px;
            filter: invert(79%) sepia(16%) saturate(287%) hue-rotate(209deg) brightness(96%) contrast(84%);
            display: block;
        }
    }

    &__field {
        border: none;
        height: 75px;
        border-radius: 10px;
        width: 100%;
        background: #f6f5fc;
        color: #7d7c7c;
        font-size: 17px;
        padding: 0 55px 0 180px;
        outline: none;
    }

    &__btn {
        position: absolute;
        top: 44px;
        left: 49px;
    }
}

@media (max-width: 880px) {
    .ShortenerBox {
        padding: 0 !important;

        &::before {
            background-size: contain;
            background-position: 8px 2px;
        }
    }
}

@media (max-width: 578px) {
    .UrlBox {
        &__field {
            padding: 0 58px 0 10px;
        }
        &__btn {
            position: relative;
            top: 0;
            right: 0;
            margin: 25px auto 0 auto;
            display: flex;
            padding-left: 26px;
        }
    }
}
</style>
