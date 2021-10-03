import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DehazeIcon from "@mui/icons-material/Dehaze";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";

function SlideSidebar({ linkHome }) {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <ListItemIcon>
            <DehazeIcon />
          </ListItemIcon>
          <ListItemText>
            <img
              className="h-12 inline-block cursor-pointer hover:animate-pulse active:scale-90 transition duaration-200"
              src="./logo-guntaro.png"
              alt="logo"
            />
          </ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem
          onClick={() => linkHome()}
          className="hover:bg-gray-200 cursor-pointer active:scale-90 transition duration-200"
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>ホーム</ListItemText>
        </ListItem>

        <a href="https:/guntaro.blog">
          <ListItem className="hover:bg-gray-200 cursor-pointer active:scale-90 transition duration-200">
            <ListItemIcon>
              <ExploreIcon />
            </ListItemIcon>
            <ListItemText>探す</ListItemText>
          </ListItem>
        </a>

        <a href="https:/guntaro.blog">
          <ListItem className="hover:bg-gray-200 cursor-pointer active:scale-90 transition duration-200">
            <ListItemIcon>
              <SubscriptionsIcon />
            </ListItemIcon>
            <ListItemText>登録チャンネル</ListItemText>
          </ListItem>
        </a>

        <a href="https:/guntaro.blog">
          <ListItem className="hover:bg-gray-200 cursor-pointer active:scale-90 transition duration-200">
            <ListItemIcon>
              <DynamicFeedIcon />
            </ListItemIcon>
            <ListItemText>ログアウト</ListItemText>
          </ListItem>
        </a>
      </List>
    </Box>
  );

  return (
    <div className="inline-block">
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <DehazeIcon className="text-white hover:scale-110 active:scale-75 transition transform duration-200 rounded-full" />
          </Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default SlideSidebar;
