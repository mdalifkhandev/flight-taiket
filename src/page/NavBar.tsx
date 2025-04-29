import { AppBar, Button, Toolbar, IconButton, Drawer, List,  ListItemText, ListItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";

const NavBar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const isMobile = useMediaQuery("(max-width:768px)");

    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
    };

    return (
        <div className="bg-white mx-64">
            <AppBar position="static" className="shadow-none" sx={{ backgroundColor: "#ffff", boxShadow: "none" }}>
                <Toolbar className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="font-bold text-[#31D099] text-2xl">
                        <a href="/">FL<span className="text-gray-600">Y</span>FAR</a>
                    </div>

                    {/* Desktop Menu */}
                    {!isMobile && (
                        <div className="space-x-4">
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "#00dd90",
                                    borderRadius: "20px",
                                    margin: "0px 10px",
                                    padding: "2px 40px",
                                }}
                                className="normal-case hover:bg-blue-50"
                            >
                                Login
                            </Button>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "gray",
                                    borderRadius: "20px",
                                    margin: "0px 10px",
                                    padding: "2px 30px",
                                }}
                                className="normal-case text-white"
                            >
                                Register
                            </Button>
                        </div>
                    )}

                    {/* Mobile Menu */}
                    {isMobile && (
                        <>
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                onClick={toggleDrawer(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Drawer
                                anchor="right"
                                open={drawerOpen}
                                onClose={toggleDrawer(false)}
                            >
                                <List>
                                    <ListItem component="button">
                                        <ListItemText primary="Login" />
                                    </ListItem>
                                    <ListItem component={"button"}>
                                        <ListItemText primary="Register" />
                                    </ListItem>
                                </List>
                            </Drawer>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;