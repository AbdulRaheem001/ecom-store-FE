import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Drawer,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { styled } from "@mui/system";
import { useDispatch } from "react-redux";
import { setLoginState } from "../Slice/userSlice";

var drawerWidth = 240;

const Root = styled("div")({
  display: "flex",
});

const DrawerContainer = styled("div")({
  width: drawerWidth,
  flexShrink: 0,
});

const Content = styled("div")(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
}));

function ShopKeeper_NaveBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [minimized, setMinimized] = useState(false);

  const toggleMinimize = () => {
    console.log("Toggle Minimize Clicked");
    setMinimized(!minimized);
    if(minimized){
      drawerWidth=50;
    }
    else{
      drawerWidth=240;
    }
  };

  const logoutUser = () => {
    window.sessionStorage.clear();
    dispatch(setLoginState(false));
    navigate("/", { replace: true });
  };

  return (
    <Root>
      <Drawer
        variant={minimized ? "temporary" : "permanent"}
        anchor="left"
        open={!minimized}
      ><br/><br/>
        <List>
          <ListItem button component={Link} to="/addProduct">
            <ListItemIcon>
              <AddCircleOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Add Product" />
          </ListItem>
          <ListItem button component={Link} to="/deleteProduct">
            <ListItemIcon>
              <DeleteOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Delete Product" />
          </ListItem>
          <ListItem button component={Link} to="/updateProduct">
            <ListItemIcon>
              <EditIcon />
            </ListItemIcon>
            <ListItemText primary="Update Product" />
          </ListItem>
          <ListItem button component={Link} to="/" onClick={logoutUser}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="SignOut"  />
          </ListItem>
        </List>
        <IconButton
        edge="end"
        color="inherit"
        aria-label="minimize"
        onClick={toggleMinimize}
        style={{ position: "absolute", top: "10px", right: "20px" }}
      >
        {minimized ? (
          <ArrowForwardIosIcon /> // Display this icon when minimized
        ) : (
          <ArrowBackIosIcon /> // Display this icon when not minimized
        )}
      </IconButton>
      </Drawer>
      
    </Root>
  );
}

export default ShopKeeper_NaveBar;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   IconButton,
//   Drawer,
// } from '@mui/material';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import EditIcon from '@mui/icons-material/Edit';
// import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// import MinimizeIcon from '@mui/icons-material/Minimize';

// const drawerWidth = 240;

// const rootStyle= {
//     display: 'flex',
//   }
//  const drawer= {
//     width: drawerWidth,
//     flexShrink: 0,
//   }
//   const drawerPaper= {
//     width: drawerWidth,
//   }
// const content= {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   }

// function ShopKeeper_NaveBar() {
//   const classes = useStyles();
//   const [minimized, setMinimized] = useState(false);

//   const toggleMinimize = () => {
//     setMinimized(!minimized);
//   };

//   return (
//     <div sx={rootStyle}>
//       <Drawer
//         sx={drawer}
//         variant={minimized ? 'temporary' : 'permanent'}
//         //sx={ drawerPaper }
//         anchor="left"
//         open={!minimized}
//       >
//         <List>
//     <ListItem button component={Link} to="/addProduct">
//     <ListItemIcon>
//       <AddCircleOutlineIcon />
//     </ListItemIcon>
//     <ListItemText primary="Add Product" />
//   </ListItem>
//   <ListItem button component={Link} to="/deleteProduct">
//     <ListItemIcon>
//       <DeleteOutlineIcon />
//     </ListItemIcon>
//     <ListItemText primary="Delete Product" />
//   </ListItem>
//   <ListItem button component={Link} to="/updateProduct">
//     <ListItemIcon>
//       <EditIcon />
//     </ListItemIcon>
//     <ListItemText primary="Update Product" />
//   </ListItem>
//   <ListItem button component={Link} to="/signout">
//     <ListItemIcon>
//       <ExitToAppIcon />
//     </ListItemIcon>
//     <ListItemText primary="Sign Out" />
//   </ListItem>
//         </List>
//       </Drawer>
//       <main sx={content}>
//         <IconButton
//           edge="start"
//           color="inherit"
//           aria-label="minimize"
//           onClick={toggleMinimize}
//         >
//           <MinimizeIcon />
//         </IconButton>
//         {/* Your content components */}
//       </main>
//     </div>
//   );
// }

// export default ShopKeeper_NaveBar;

// //   return (
// //     <List>
// //       <ListItem button component={Link} to="/addProduct">
// //         <ListItemIcon>
// //           <AddCircleOutlineIcon />
// //         </ListItemIcon>
// //         <ListItemText primary="Add Product" />
// //       </ListItem>
// //       <ListItem button component={Link} to="/deleteProduct">
// //         <ListItemIcon>
// //           <DeleteOutlineIcon />
// //         </ListItemIcon>
// //         <ListItemText primary="Delete Product" />
// //       </ListItem>
// //       <ListItem button component={Link} to="/updateProduct">
// //         <ListItemIcon>
// //           <EditIcon />
// //         </ListItemIcon>
// //         <ListItemText primary="Update Product" />
// //       </ListItem>
// //       <ListItem button component={Link} to="/signout">
// //         <ListItemIcon>
// //           <ExitToAppIcon />
// //         </ListItemIcon>
// //         <ListItemText primary="Sign Out" />
// //       </ListItem>
// //     </List>
// //   );
// // }
