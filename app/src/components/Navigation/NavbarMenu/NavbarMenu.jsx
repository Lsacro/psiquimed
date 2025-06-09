import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import styles from "./navbarMenu.module.css";

function NavbarMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleScroll = (id) => {
    setAnchorEl(null);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <img width={"40px"} src="/SVG/menu.svg" alt="" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => handleScroll("inicio")}>Inicio</MenuItem>
        <div id="nosotros" className={styles.displayNone}>
          <MenuItem onClick={() => handleScroll("nosotros")}>Nosotros</MenuItem>
        </div>
        <MenuItem onClick={() => handleScroll("equipo")}>
          Nuestro Equipo
        </MenuItem>
        <MenuItem onClick={() => handleScroll("servicios")}>Servicios</MenuItem>
        <MenuItem onClick={() => handleScroll("ubicacion")}>Ubicacion</MenuItem>
        <MenuItem onClick={() => handleScroll("resenas")}>Reseñas</MenuItem>
      </Menu>
    </div>
  );
}

export default NavbarMenu;
