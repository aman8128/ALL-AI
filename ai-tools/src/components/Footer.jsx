import './Footer.css';

function Footer() {
    return (
        <footer className="footer bg-dark text-white pt-4">
            <div className="container text-center mb-3">
                <p className="mb-1">&copy; 2025 Your Company. All rights reserved.</p>
                <div>
                    <a href="#" className="text-white me-3 privacy">Privacy Policy</a>
                    <a href="#" className="text-white privacy">Terms of Service</a>
                </div>
            </div>

            <div className="container-fluid bg-dark py-4 border-top border-secondary">
                <div className="row align-items-center text-center text-md-start px-3">
                    {/* Navigation Links */}
                    <div className="col-12 col-md-6 mb-3 mb-md-0 d-flex flex-wrap justify-content-center justify-content-md-start gap-3">
                        <a href="#" className="text-white privacy">Home</a>
                        <a href="#" className="text-white privacy">About</a>
                        <a href="#" className="text-white privacy">Services</a>
                        <a href="#" className="text-white privacy">Contact</a>
                        <a href="#" className="text-white privacy">FAQs</a>
                    </div>

                    {/* Social Media Links */}
                    <div className="col-12 col-md-6 d-flex flex-wrap justify-content-center justify-content-md-end gap-3">
                        <a href="#" className="text-white privacy">
                            <i className="bi bi-facebook me-1"></i> Facebook
                        </a>
                        <a href="#" className="text-white privacy">
                            <i className="bi bi-twitter-x me-1"></i> Twitter
                        </a>
                        <a href="#" className="text-white privacy">
                            <i className="bi bi-linkedin me-1"></i> LinkedIn
                        </a>
                        <a href="#" className="text-white privacy">
                            <i className="bi bi-instagram me-1"></i> Instagram
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
