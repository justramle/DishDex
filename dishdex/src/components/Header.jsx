// create hero section 
export const Header = () => {
    return(
        <nav id="header" className="bg-color text-color">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-content-between mt-0 py-2">
                <div className="logo-wrapper pl-4 flex items-center">
                    <img src={"/"} alt="logo" />
                </div>
                <div className="nav-menu-wrapper flex items-center justify-betwwen space-x-10">
                    <div>Home</div>
                    <div>Menu</div>
                    <div>About Us</div>
                    <div>Account</div>
                </div>
                <div className="flex items-center justify-center space-x-4">
                    {/* //link component of react router dom */}
                    <div>Log In</div>
                    <div>Sign In</div>
                </div>
            </div>
        </nav>
    )
}