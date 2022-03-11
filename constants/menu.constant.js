export default Object.freeze([
    {
        title: 'پیشخوان',
        icon: 'dashboard.png',
        route: '/dashboard/home',
        role: ['admin', 'manager', 'operator'],
    },
    {
        title: 'هواپیما',
        icon: 'plane.png',
        route: '/dashboard/plane',
        role: ['admin', 'manager', 'marketer', 'operator'],
        child: [
            {
                title: 'پرواز ها',
                route: '/dashboard/plane/airplane',
                role: ['admin', 'manager', 'operator', 'marketer'],
            },
            {
                title: 'ایرلاین ها',
                route: '/dashboard/plane/airline',
                role: ['manager'],
            },
            {
                title: 'فرودگاه ها',
                route: '/dashboard/plane/airport',
                role: ['manager'],
            },
            {
                title: 'رزرو بلیط',
                route: '/dashboard/plane/booking',
                role: ['admin', 'manager', 'operator', 'marketer'],
            },
        ],
    },
    {
        title: 'قطار',
        icon: 'train.png',
        route: '/dashboard/train',
        role: ['admin', 'manager', 'operator', 'marketer'],
        child: [
            {
                title: 'قطار ها',
                route: '/dashboard/train/list',
                role: ['admin', 'manager', 'operator', 'marketer'],
            },
            {
                title: 'ایستگاه های قطار',
                route: '/dashboard/train/station',
                role: ['manager'],
            },
            {
                title: 'شرکت های ریلی',
                route: '/dashboard/train/rail',
                role: ['manager'],
            },
            {
                title: 'رزرو بلیط',
                route: '/dashboard/train/booking',
                role: ['admin', 'manager', 'operator', 'marketer'],
            },
        ],
    },
    {
        title: 'هتل',
        icon: 'hotel.png',
        route: '/dashboard/hotel',
        role: ['admin', 'manager', 'operator', 'marketer'],
        child: [
            {
                title: 'هتل ها',
                route: '/dashboard/hotel/list',
                role: ['admin', 'manager', 'operator'],
            },
            {
                title: 'رک رزرو',
                route: '/dashboard/hotel/capacity',
                role: ['admin', 'manager', 'operator'],
            },
            {
                title: 'قیمت گذاری هتل',
                route: '/dashboard/hotel/pricing',
                role: ['admin', 'manager', 'operator'],
            },
            {
                title: 'لیست رزرو ها',
                route: '/dashboard/hotel/booking',
                role: ['admin', 'manager', 'operator', 'marketer'],
            },
            {
                title: 'لیست شهر ها',
                route: '/dashboard/hotel/city',
                role: ['manager'],
            },
        ],
    },
    {
        title: 'بوم گردی',
        icon: 'tourism.png',
        route: '/dashboard/boom',
        role: ['admin', 'manager', 'operator', 'marketer'],
        child: [
            {
                title: 'بوم گردی ها',
                route: '/dashboard/boom/list',
                role: ['admin', 'manager', 'operator'],
            },
            {
                title: 'رک رزرو',
                route: '/dashboard/boom/capacity',
                role: ['admin', 'manager', 'operator'],
            },
            {
                title: 'قیمت گذاری بوم گردی',
                route: '/dashboard/boom/pricing',
                role: ['admin', 'manager', 'operator'],
            },
            {
                title: 'لیست رزرو ها',
                route: '/dashboard/boom/booking',
                role: ['admin', 'manager', 'operator', 'marketer'],
            },
            {
                title: 'لیست شهر ها',
                route: '/dashboard/boom/city',
                role: ['manager'],
            },
        ],
    },
    {
        title: 'تور',
        icon: 'tourism.png',
        route: '/dashboard/tour',
        role: ['admin', 'manager', 'operator', 'marketer'],
        child: [
            {
                title: 'تور ها',
                route: '/dashboard/tour/list',
                role: ['admin', 'manager', 'operator'],
            },
            {
                title: 'ساخت تور',
                route: '/dashboard/tour/create',
                role: ['admin', 'manager', 'operator'],
            },
        ],
    },
    {
        title: 'درخواست های ادمین',
        icon: 'tourism.png',
        route: '/dashboard/host/admin',
        role: ['admin', 'manager'],
    },
    {
        title: 'فضای کاری',
        icon: 'tourism.png',
        route: '/dashboard/namespace',
        role: ['admin', 'manager'],
    },
    {
        title: 'زیر مجموعه ها',
        icon: 'tourism.png',
        route: '/dashboard/user',
        role: ['admin', 'manager'],
    },
    {
        title: 'تراکنش ها',
        icon: 'tourism.png',
        route: '/dashboard/wallet',
        role: ['manager'],
    },
    {
        title: 'ارور ها',
        icon: 'tourism.png',
        route: '/dashboard/payment',
        role: ['manager'],
    },
    {
        title: 'درخواست ادمین',
        icon: 'tourism.png',
        route: '/dashboard/host/user',
        role: ['user'],
    },
    {
        title: 'خروج',
        icon: 'logout.png',
        route: '/logout',
        role: ['user', 'admin', 'manager', 'operator', 'marketer'],
    },
]);
