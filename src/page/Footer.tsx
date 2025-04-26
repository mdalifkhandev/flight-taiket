

const Footer = () => {
    return (

        <footer className="footer sm:footer-horizontal bg-[#00dd90] font-bold px-44 text-base-content p-10">
            <nav>
                <h6 className="footer-title">Need Help</h6>
                <a className="link link-hover">
                    1210 Mirpur,Dhaka
                </a>
                <a className="link link-hover">
                    Thakurgaon, Thakurgaon
                </a>
                <a className="link link-hover">
                    support@flufar.con
                </a>
                <a className="link link-hover">
                    +880 1744 897 897
                </a>
            </nav>
            <nav>
                <h6 className="footer-title">Discover</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Payment Method</a>
                <a className="link link-hover">Term and Condition</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            <form>
                <h6 className="footer-title">Contact US</h6>
                <fieldset className="w-80">
                    <label>Enter your email address</label>
                    <div className="join">
                        <input
                            type="text"
                            placeholder="username@site.com"
                            className="input input-bordered join-item" />
                        <button className="btn btn-primary join-item">Send</button>
                    </div>
                </fieldset>
            </form>
        </footer>

    );
};

export default Footer;