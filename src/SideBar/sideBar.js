import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import { spacing } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import { Grid, Nav } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';;


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor:"#ffffff",
        margin:"10px"
    },
}));


export default function SideBar(props) {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        console.log("index selected = "+index)
        props.onSelectOption(index);
    };
    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem
                    button
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                >
                    Available Quizes
                </ListItem>
                <ListItem
                    button
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                >
                    Take Quiz
                </ListItem>
                <ListItem
                    button
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                >
                    Attempted Quiz
                </ListItem>
            </List>
            <Divider />
            <List component="nav" aria-label="secondary mailbox folder">
                <ListItem
                    button
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 2)}
                >
                    <ListItemText primary="Others" />
                </ListItem>
            </List>
        </div>
    );
}
