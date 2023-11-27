import { Container }  from "@mui/material";
import NavBar from '../Components/nav-bar';
import SidebarMenu from '../Components/sidebar-menu';
import BookSearch from '../Components/book-search';

const BookPage: React.FC = () => {
    return (
        <>
            <NavBar isUserPage={true}/>
            <SidebarMenu isUserPage={true}/>
            <Container sx={{mt:"50px"}} className="container">
                
                
                
            </Container>
        </>
    );
}

export default BookPage;