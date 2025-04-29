const Footer = () => {
    return (
        <footer className="footer bg-[#00dd90] font-bold px-6 sm:px-16 lg:px-44 text-base-content p-6 sm:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <nav>
                    <h6 className="footer-title text-lg mb-2">Need Help</h6>
                    <a className="link link-hover block">1210 Mirpur, Dhaka</a>
                    <a className="link link-hover block">Thakurgaon, Thakurgaon</a>
                    <a className="link link-hover block">support@flufar.con</a>
                    <a className="link link-hover block">+880 1744 897 897</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-lg mb-2">Discover</h6>
                    <a className="link link-hover block">About us</a>
                    <a className="link link-hover block">Contact</a>
                    <a className="link link-hover block">Jobs</a>
                    <a className="link link-hover block">Payment Method</a>
                    <a className="link link-hover block">Term and Condition</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-lg mb-2">Legal</h6>
                    <a className="link link-hover block">Terms of use</a>
                    <a className="link link-hover block">Privacy policy</a>
                    <a className="link link-hover block">Cookie policy</a>
                </nav>
                <form className="sm:col-span-2 lg:col-span-1">
                    <h6 className="footer-title text-lg mb-2">Contact Us</h6>
                    <fieldset className="w-full sm:w-80">
                        <label className="block mb-2">Enter your email address</label>
                        <div className="join flex">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item flex-grow" />
                            <button className="btn btn-primary join-item">Send</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </footer>
    );
};

export default Footer;