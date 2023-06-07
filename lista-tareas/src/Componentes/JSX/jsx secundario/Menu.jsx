import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home, Settings } from '@mui/icons-material';
import { useHistory } from 'react-router-dom';

const getIcon = (icon) => {
    switch (icon) {
        case 'HOME':
            return (<Home/>)
        case 'TASKS':
            return (<Home/>)
        case 'SEYYINGS':
            return (<Settings/>)
        default:
            return (<Home/>);
    }
}

const MenuListItems = ({list}) => {
    const history = useHistory();

    const navigate = (path) => {
        history.push(path)
    }
 
    return (
        <List>
            {list.map(({text, path, icon}, index) => 
            (
                <ListItem key={index} onClick={() => navigate(path)} >

                <ListItemIcon>
                    {getIcon(icon)}
                </ListItemIcon>
                <ListItemText
                    primary={text}
                />

                </ListItem>
            )
            
            )}
        </List>
    )

}

export default MenuListItems;