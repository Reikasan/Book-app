import { Button } from "@mui/material";

interface NavBarProps {
    isUserPage: boolean;
}

const NavBar: React.FC<NavBarProps> =  ({isUserPage}) => {
    return (
        <nav className="nav">
            <div className="nav-logo">
                <a href="/">
                    <img src="/images/yomulog1-logos_transparent.png" alt="Yomulog logo" />
                </a>
            </div>
        { !isUserPage &&
            <div className="nav-right">
                <Button 
                    className="nav-button-sq" 
                    variant="outlined" 
                    href="/guest" 
                    color="secondaryButton"
                    sx={{ width: "60px",
                        height: "60px",
                        lineHeight: "12px",
                        textAlign: "right",
                        borderColor: "#020100",
                        borderWidth: "2px",
                        color: "#020100",
                        ":hover" : { backgroundColor: "#F1D302",
                                    color: "#FDFFFC",
                                    borderColor: "#F1D302",},
                         }}>
                        Try<br/>As<br/>Gest
                </Button>
            </div>
        } 
        </nav>
    );
}

export default NavBar;