import { AppBar, Button, Toolbar } from "@mui/material";


const NavBar = () => {

    

    return (
        <div className=" px-64 bg-white">
            
            <AppBar position="static" className="bg-black shadow-none" sx={{backgroundColor:'#ffff',boxShadow:'none'}} >
                <Toolbar className="flex justify-between items-center">
                    {/* Logo */}
                    <div className=" font-bold text-[#31D099] text-2xl"><a href="/">FL<span className="text-gray-600">Y</span>FAR</a> </div>

                    {/* Login & Register Buttons */}
                    <div className="space-x-4">
                        <Button
                            variant="contained"
                            sx={{backgroundColor:'#00dd90',borderRadius:'20px', margin:'0px 10px' , padding:'2px 40px'}}
                            className="normal-case hover:bg-blue-50"
                        >
                            Login
                        </Button>
                        <Button
                            variant="contained"
                            sx={{backgroundColor:'gray',borderRadius:'20px', margin:'0px 10px', padding:'2px 30px'}}
                            className="normal-case text-white"
                        >
                            Register
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;