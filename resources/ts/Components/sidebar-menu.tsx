import HomeIcon from '@mui/icons-material/Home';
import CreateIcon from '@mui/icons-material/Create';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

interface NavBarProps {
    isUserPage: boolean;
}

const SidebarMenu: React.FC<NavBarProps> = ({isUserPage}) => {
    return (
        <div className="sidebar-menu">
            <Link to="/guest"><HomeIcon /></Link>
            <Link to="/guest"><CreateIcon /></Link>
            <Link to="/guest#list"><LocalLibraryIcon /></Link>
        { !isUserPage ?
            <Link to="/guest#register"><PersonAddIcon /></Link>
        :
            <Link to="/guest#register"><AccountCircleIcon /></Link>
        }
        </div>
    );
}

export default SidebarMenu;