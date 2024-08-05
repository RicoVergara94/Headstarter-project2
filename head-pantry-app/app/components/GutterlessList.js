import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CommentIcon from "@mui/icons-material/Comment";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { useEffect } from "react";

const GutterlessList = (props) => {
  //   useEffect(() => {
  //     console.log(`we're in GutterLess component: ${props.inventory}`);
  //   }, [props.inventory]);
  return (
    <List
      sx={{
        outlineColor: "black",
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        position: "relative",
        top: 10,
        left: 50,
        textAlign: "center",
      }}
    >
      {props.inventory.map((item) => (
        <ListItem
          sx={{
            textAlign: "left",
          }}
          key={item.name}
          disableGutters
          secondaryAction={
            <div style={{ left: 10 }}>
              <Button
                sx={{ marginLeft: 2 }}
                className="Button"
                variant="contained"
                onClick={() => props.addItem(item)}
              >
                Add Item
              </Button>
              <Button
                className="Button"
                variant="contained"
                onClick={() => props.removeItem(item)}
              >
                Remove Item
              </Button>
            </div>
          }
        >
          <ListItemText
            primary={`${item.name}: ${item.quantity}`}
            sx={
              {
                //   p: 2,
              }
            }
          />
        </ListItem>
      ))}
    </List>
  );
};

export default GutterlessList;
