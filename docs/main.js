class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
    <nav>
        <div class="max-w-screen-xxl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" class="flex items-center space-x-3 md:w-48">
                <img src="img/logo-black.png.svg" class="h-10" alt="Logo" />
            </a>
            <div class="flex md:order-2 space-x-3 md:space-x-5">
                <div class=" flex-col hidden md:flex">
                    <span class="uppercase text-gray-500">Hotline</span>
                    <a href="tel:00 1900 8188" class="text-sm font-bold hover:underline">00 1900 8188</a>
                </div>
                <button type="button"
                    class="text-white bg-black hover:bg-green-500 font-medium rounded-lg text-sm px-4 py-2 text-center hidden sm:block">Get
                    started</button>
                <button data-collapse-toggle="navbar-cta" type="button"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-cta" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                <ul
                    class="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0 ">
                    <li>
                        <a href="index.html"
                            class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500">Home</a>
                    </li>
                    <li>
                        <a href="about.html"
                            class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500">About</a>
                    </li>
                    <li>
                        <a href="custom.html"
                            class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500">Custom</a>
                    </li>
                    <li>
                        <a href="services.html"
                            class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500">Services</a>
                    </li>
                    <li>
                        <a href="pricing.html"
                            class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500">Pricing</a>
                    </li>
                    <li>
                        <a href="faqs.html"
                            class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500">FAQs</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>`
    }
}

class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="bg-gray-100 py-10">
        <div class="max-w-screen-xl flex flex-col sm:flex-row gap-16 items-start justify-between mx-auto sm:p-10 p-12 mt-8 md:mt-0">
            <ul class="flex flex-col gap-3">
                <li><img src="img/logo-black.png.svg" alt="logo"></li>
                <li class="text-gray-400">hello@teespace.io</li>
                <li><a href="tel:00 1900 8188" class="text-sm font-bold hover:underline">00 1900 8188</a></li>
                <li class="text-gray-400">3665 Paseo Place, Suite 0960San Diego</li>
            </ul>
            <div class="flex lg:gap-40 gap-20">
                <ul class="flex flex-col gap-3">
                    <li class="font-bold">Information</li>
                    <li><a href="index.html" class="text-gray-400">Home</a></li>
                    <li><a href="about.html" class="text-gray-400">About</a></li>
                    <li><a href="custom.html" class="text-gray-400">Custom</a></li>
                </ul>
                <ul class="flex flex-col gap-3">
                    <li class="font-bold">Useful links</li>
                    <li><a href="services.html" class="text-gray-400">Services</a></li>
                    <li><a href="pricing.html" class="text-gray-400">Pricing</a></li>
                    <li><a href="faqs.html" class="text-gray-400">FAQs</a></li>
                </ul>
            </div>
            <ul class="flex flex-col gap-3 w-64">
                <li class="font-bold">Newsletter</li>
                <li class="text-gray-400 ">Get the latest news, events & more delivered
                    to your inbox.</li>
            </ul>
        </div>
    </footer>`
    }
}

customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)