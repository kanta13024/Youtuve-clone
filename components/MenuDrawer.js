import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { Avatar } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";

function MenuCard({ Icon, SubIcon, title, content, url }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        className="bg-black mr-2 active:scale-90 transition transform duration-200"
        color="primary"
        id="basic-button"
        aria-controls="true"
        aris-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {Icon && <Icon className="text-white" src="./main.png" />}
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProp={{ "aria-labelledby": "basic-button" }}
      >
        <MenuList>
          <a className="flex" href={url}>
            <MenuItem className="p-4 space-x-2" onClick={handleClose}>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText>{title}</ListItemText>
            </MenuItem>
          </a>

          <MenuItem className="p-4 space-x-2" onClick={handleClose}>
            <ListItemIcon>
              <SubIcon />
            </ListItemIcon>
            <ListItemText>{content}</ListItemText>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}

export default MenuCard;
