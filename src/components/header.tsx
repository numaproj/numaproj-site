import React, { useState } from 'react'
import Logo from '../assets/logo.svg'

interface topMenuItemsProps {
    name: string
    href: string
    target?: '_self' | '_blank' | '_top'
    rel?: string
}

const topMenuItems: topMenuItemsProps[] = [
    {
        name: "Numaflow",
        href: "https://numaflow.numaproj.io/",
        target: "_blank",
        rel: "noopener noreferrer",
    },
    {
        name: "Numalogic",
        href: "https://numalogic.numaproj.io/",
        target: "_blank",
        rel: "noopener noreferrer",
    },
    {
        name: "Blog",
        href: "https://blog.numaproj.io/",
        target: "_blank",
        rel: "noopener noreferrer",
    },
];


export const Header = () => {

    const [menuOpened, setMenuOpened] = useState<boolean>(false)

    return (
        <header className="sticky -top-1 left-0 z-50 py-3 lg:px-8 px-2 w-full lg:py-5">
            <div className="flex items-center">
            {/*<Logo />*/}
                <nav className={`${menuOpened ? "!right-[-1.3em] top-[-1.3em]" : ""} absolute z-999 -right-full lg:top-0 w-4/6 h-screen pt-14 bg-gray-dark bg-blend-darken overflow-y-scroll transition-right duration-300 in-expo shadow-2xl lg:items-center lg:ml-auto lg:flex lg:space-x-8 lg:relative lg:right-auto lg:top-auto lg:w-auto lg:h-auto lg:pt-0 lg:bg-none lg:bg-opacity-0 lg:overflow-y-visible lg:shadow-none`}>
                    <ul className="px-5 text-lg lg:flex lg:h-auto lg:space-x-6 lg:space-y-0 lg:text-lg">
                        {topMenuItems.map((item) => (
                            <li
                                key={item.name}
                                className="border-b border-gray-light border-opacity-30 py-3 lg:py-0 lg:border-none"
                            >
                                <a
                                    className="font-medium text-dark lg:text-gray-light hover:text-primary"
                                    href={item.href}
                                    target={item.target}
                                    rel={item.rel}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-center space-x-8 lg:space-x-4 w-full py-8 lg:py-0">
                        <a
                            href="https://github.com/numaproj"
                            aria-label="github"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Follow us on GitHub"
                            className="inline-block text-dark lg:text-white"
                        >
                            <svg
                                className="w-auto h-8 lg:h-6"
                                width="31"
                                height="32"
                                viewBox="0 0 31 32"
                                fill="none"
                            >
                                <path
                                    d="M10.3687 24.8375C10.3687 24.9625 10.225 25.0625 10.0437 25.0625C9.8375 25.0813 9.69375 24.9813 9.69375 24.8375C9.69375 24.7125 9.8375 24.6125 10.0188 24.6125C10.2063 24.5938 10.3687 24.6938 10.3687 24.8375ZM8.425 24.5563C8.38125 24.6813 8.50625 24.825 8.69375 24.8625C8.85625 24.925 9.04375 24.8625 9.08125 24.7375C9.11875 24.6125 9 24.4688 8.8125 24.4125C8.65 24.3688 8.46875 24.4313 8.425 24.5563ZM11.1875 24.45C11.0062 24.4938 10.8812 24.6125 10.9 24.7563C10.9187 24.8813 11.0813 24.9625 11.2688 24.9188C11.45 24.875 11.575 24.7563 11.5562 24.6313C11.5375 24.5125 11.3688 24.4313 11.1875 24.45ZM15.3 0.5C6.63125 0.5 0 7.08125 0 15.75C0 22.6813 4.3625 28.6125 10.5938 30.7C11.3938 30.8438 11.675 30.35 11.675 29.9438C11.675 29.5563 11.6562 27.4188 11.6562 26.1063C11.6562 26.1063 7.28125 27.0438 6.3625 24.2438C6.3625 24.2438 5.65 22.425 4.625 21.9563C4.625 21.9563 3.19375 20.975 4.725 20.9938C4.725 20.9938 6.28125 21.1188 7.1375 22.6063C8.50625 25.0188 10.8 24.325 11.6938 23.9125C11.8375 22.9125 12.2438 22.2188 12.6938 21.8063C9.2 21.4188 5.675 20.9125 5.675 14.9C5.675 13.1813 6.15 12.3188 7.15 11.2188C6.9875 10.8125 6.45625 9.1375 7.3125 6.975C8.61875 6.56875 11.625 8.6625 11.625 8.6625C12.875 8.3125 14.2188 8.13125 15.55 8.13125C16.8813 8.13125 18.225 8.3125 19.475 8.6625C19.475 8.6625 22.4813 6.5625 23.7875 6.975C24.6438 9.14375 24.1125 10.8125 23.95 11.2188C24.95 12.325 25.5625 13.1875 25.5625 14.9C25.5625 20.9313 21.8813 21.4125 18.3875 21.8063C18.9625 22.3 19.45 23.2375 19.45 24.7063C19.45 26.8125 19.4312 29.4188 19.4312 29.9313C19.4312 30.3375 19.7188 30.8313 20.5125 30.6875C26.7625 28.6125 31 22.6813 31 15.75C31 7.08125 23.9688 0.5 15.3 0.5ZM6.075 22.0563C5.99375 22.1188 6.0125 22.2625 6.11875 22.3813C6.21875 22.4813 6.3625 22.525 6.44375 22.4438C6.525 22.3813 6.50625 22.2375 6.4 22.1188C6.3 22.0188 6.15625 21.975 6.075 22.0563ZM5.4 21.55C5.35625 21.6313 5.41875 21.7313 5.54375 21.7938C5.64375 21.8563 5.76875 21.8375 5.8125 21.75C5.85625 21.6688 5.79375 21.5688 5.66875 21.5063C5.54375 21.4688 5.44375 21.4875 5.4 21.55ZM7.425 23.775C7.325 23.8563 7.3625 24.0438 7.50625 24.1625C7.65 24.3063 7.83125 24.325 7.9125 24.225C7.99375 24.1438 7.95625 23.9563 7.83125 23.8375C7.69375 23.6938 7.50625 23.675 7.425 23.775ZM6.7125 22.8563C6.6125 22.9188 6.6125 23.0813 6.7125 23.225C6.8125 23.3688 6.98125 23.4313 7.0625 23.3688C7.1625 23.2875 7.1625 23.125 7.0625 22.9813C6.975 22.8375 6.8125 22.775 6.7125 22.8563Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </a>
                        <a
                            className="inline-block text-dark lg:text-white"
                            href="https://numaproj.slack.com/join/shared_invite/zt-19svuv47m-YKHhsQ~~KK9mBv1E7pNzfg#/shared-invite/email"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                                className="w-auto h-8 lg:h-6"
                                width="60"
                                height="60"
                                viewBox="0 0 60 60"
                                fill="none"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M21.9545 0C18.6444 0.00244648 15.9655 2.68869 15.9679 5.99878C15.9655 9.30887 18.6468 11.9951 21.9569 11.9976H27.9459V6.00122C27.9484 2.69113 25.267 0.00489297 21.9545 0C21.9569 0 21.9569 0 21.9545 0V0ZM21.9545 16H5.98872C2.67863 16.0025 -0.00271446 18.6887 -0.000267972 21.9988C-0.00516094 25.3089 2.67618 27.9951 5.98628 28H21.9545C25.2646 27.9976 27.9459 25.3113 27.9435 22.0012C27.9459 18.6887 25.2646 16.0025 21.9545 16Z"
                                    fill="currentColor"
                                ></path>
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M59.8802 21.9988C59.8826 18.6887 57.2013 16.0025 53.8912 16C50.5811 16.0025 47.8997 18.6887 47.9022 21.9988V28H53.8912C57.2013 27.9976 59.8826 25.3113 59.8802 21.9988ZM43.9119 21.9988V5.99878C43.9144 2.69113 41.2355 0.00489297 37.9254 0C34.6153 0.00244648 31.934 2.68869 31.9364 5.99878V21.9988C31.9315 25.3089 34.6129 27.9951 37.923 28C41.233 27.9976 43.9144 25.3113 43.9119 21.9988Z"
                                    fill="currentColor"
                                ></path>
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M37.9229 60C41.233 59.9976 43.9144 57.3113 43.9119 54.0012C43.9144 50.6912 41.233 48.0049 37.9229 48.0025H31.9339V54.0012C31.9315 57.3089 34.6128 59.9951 37.9229 60ZM37.9229 43.9976H53.8911C57.2012 43.9951 59.8826 41.3089 59.8801 37.9988C59.885 34.6887 57.2037 32.0025 53.8936 31.9976H37.9254C34.6153 32 31.9339 34.6862 31.9364 37.9963C31.9339 41.3089 34.6128 43.9951 37.9229 43.9976Z"
                                    fill="currentColor"
                                ></path>
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M1.67281e-06 37.9988C-0.00244481 41.3089 2.6789 43.9951 5.98899 43.9976C9.29908 43.9951 11.9804 41.3089 11.978 37.9988V32H5.98899C2.6789 32.0024 -0.00244481 34.6887 1.67281e-06 37.9988ZM15.9682 37.9988V53.9988C15.9633 57.3089 18.6447 59.9951 21.9547 60C25.2648 59.9975 27.9462 57.3113 27.9437 54.0012V38.0037C27.9486 34.6936 25.2673 32.0073 21.9572 32.0024C18.6447 32.0024 15.9658 34.6887 15.9682 37.9988C15.9682 38.0012 15.9682 37.9988 15.9682 37.9988Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </a>
                    </div>
                </nav>
                <div
                    onClick={()=>{setMenuOpened(!menuOpened)}}
                    className={`${menuOpened ? "open" : ""} burger burger-squeeze appearance-none relative ml-auto text-gray-light lg:hidden z-[999]`}
                    aria-expanded={menuOpened}
                    aria-label="Close navigation"
                >
                    <div className="burger-lines"></div>
                </div>
            </div>
        </header>
    )
}