import {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'


const HeaderScreen = () => {
    const navigation = {
        categories: [
            {
                id: 'women',
                name: 'Women',
                featured: [
                    {
                        name: 'New Arrivals',
                        href: '#',
                        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-01.jpg',
                        imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                    },
                    {
                        name: 'Basic Tees',
                        href: '#',
                        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-02.jpg',
                        imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                    },
                ],
                sections: [
                    {
                        id: 'clothing',
                        name: 'Clothing',
                        items: [
                            { name: 'Tops', href: '#' },
                            { name: 'Dresses', href: '#' },
                            { name: 'Pants', href: '#' },
                            { name: 'Denim', href: '#' },

                        ],
                    },
                    {
                        id: 'accessories',
                        name: 'Accessories',
                        items: [
                            { name: 'Watches', href: '#' },
                            { name: 'Wallets', href: '#' },
                            { name: 'Bags', href: '#' },
                            { name: 'Sunglasses', href: '#' },
                            { name: 'Hats', href: '#' },
                            { name: 'Belts', href: '#' },
                        ],
                    },
                    {
                        id: 'brands',
                        name: 'Brands',
                        items: [
                            { name: 'Full Nelson', href: '#' },
                            { name: 'My Way', href: '#' },
                            { name: 'Re-Arranged', href: '#' },
                            { name: 'Counterfeit', href: '#' },
                            { name: 'Significant Other', href: '#' },
                        ],
                    },
                ],
            },
            {
                id: 'men',
                name: 'Men',
                featured: [
                    {
                        name: 'New Arrivals',
                        href: '#',
                        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
                        imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
                    },
                    {
                        name: 'Artwork Tees',
                        href: '#',
                        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-02-image-card-06.jpg',
                        imageAlt:
                            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
                    },
                ],
                sections: [
                    {
                        id: 'clothing',
                        name: 'Clothing',
                        items: [
                            { name: 'Tops', href: '#' },
                            { name: 'Pants', href: '#' },
                            { name: 'Sweaters', href: '#' },
                            { name: 'T-Shirts', href: '#' },
                            { name: 'Jackets', href: '#' },
                            { name: 'Activewear', href: '#' },
                            { name: 'Browse All', href: '#' },
                        ],
                    },
                    {
                        id: 'accessories',
                        name: 'Accessories',
                        items: [
                            { name: 'Watches', href: '#' },
                            { name: 'Wallets', href: '#' },
                            { name: 'Bags', href: '#' },
                            { name: 'Sunglasses', href: '#' },
                            { name: 'Hats', href: '#' },
                            { name: 'Belts', href: '#' },
                        ],
                    },
                    {
                        id: 'brands',
                        name: 'Brands',
                        items: [
                            { name: 'Re-Arranged', href: '#' },
                            { name: 'Counterfeit', href: '#' },
                            { name: 'Full Nelson', href: '#' },
                            { name: 'My Way', href: '#' },
                        ],
                    },
                ],
            },
        ],
        pages: [
            { name: 'Company', href: '#' },
            { name: 'Stores', href: '#' },
        ],
    }
    return (
        <nav aria-label="Top" className="relative z-20 bg-white bg-opacity-90 backdrop-blur-xl backdrop-filter">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center">

                    {/* Logo */}
                    <div className="ml-4 flex lg:ml-0">
                        <a href="#">
                            <span className="sr-only">Your Company</span>
                            <img
                                alt=""
                                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                                className="h-8 w-auto"
                            />
                        </a>
                    </div>
                    <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                        <div className="flex h-full space-x-8">
                            {navigation.categories.map((category) => (
                                <Popover key={category.name} className="flex">
                                    <div className="relative flex">
                                        <PopoverButton className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-[open]:border-indigo-600 data-[open]:text-indigo-600">
                                            {category.name}
                                        </PopoverButton>
                                    </div>
                                    <PopoverPanel
                                        transition
                                        className="group absolute inset-x-0 top-full bg-white text-sm text-gray-500 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                                    >
                                        <div aria-hidden="true" className="absolute inset-0 top-0 mx-auto h-px max-w-7xl px-8">
                                            <div className="h-px w-full bg-transparent transition-colors duration-200 ease-out group-data-[open]:bg-gray-200" />
                                        </div>

                                        <div className="relative">
                                            <div className="mx-auto max-w-7xl px-8">
                                                <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                                        {category.featured.map((item) => (
                                                            <div key={item.name} className="group relative text-base sm:text-sm">
                                                                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                                                    <img
                                                                        alt={item.imageAlt}
                                                                        src={item.imageSrc}
                                                                        className="object-cover object-center"
                                                                    />
                                                                </div>
                                                                <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                                                    <span aria-hidden="true" className="absolute inset-0 z-10" />
                                                                    {item.name}
                                                                </a>
                                                                <p aria-hidden="true" className="mt-1">
                                                                    Shop now
                                                                </p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                                        {category.sections.map((section) => (
                                                            <div key={section.name}>
                                                                <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                                                    {section.name}
                                                                </p>
                                                                <ul
                                                                    role="list"
                                                                    aria-labelledby={`${section.name}-heading`}
                                                                    className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                                >
                                                                    {section.items.map((item) => (
                                                                        <li key={item.name} className="flex">
                                                                            <a href={item.href} className="hover:text-gray-800">
                                                                                {item.name}
                                                                            </a>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </PopoverPanel>
                                </Popover>
                            ))}

                            {navigation.pages.map((page) => (
                                <a
                                    key={page.name}
                                    href={page.href}
                                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                                >
                                    {page.name}
                                </a>
                            ))}
                        </div>
                    </PopoverGroup>

                </div>
            </div>
        </nav>

    )
}


export default HeaderScreen;