import {
    PopoverGroup,
} from '@headlessui/react'
import { ShoppingBagIcon} from '@heroicons/react/24/outline'



const HeaderScreen = () => {
    const navigation = {
        pages: [
            { name: 'Home', href: '/' },
            { name: 'Products', href: 'product' },
            { name: 'Stores', href: 'cart' },
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

                    <div className="ml-4 flow-root lg:ml-6">
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      aria-hidden="true"
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>

                </div>
            </div>
        </nav>

    )
}


export default HeaderScreen;