import { useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import styles from "./ratin.module.css";

function Ratin() {
  const [value, setValue] = useState(5);

  return (
    <Box sx={{ "& > legend": { mt: 2 } }}>
      <div className={styles.rating}>
        <Typography component="legend">
          Google Rating <span>5.0</span>
        </Typography>
        <Rating name="read-only" value={value} readOnly />
      </div>
    </Box>
  );
}

export default Ratin;
