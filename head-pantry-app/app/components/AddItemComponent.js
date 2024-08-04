import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, FormControl } from "@mui/material";
import { useState } from "react";
import { db } from "../../firebase";
import {
  query,
  collection,
  getDocs,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";

const AddItemComponent = (props) => {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");

  const [isFormVisible, setFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };

  const handleItemNameSubmission = (itemName) => {
    console.log(`this is the item name: ${itemName}`);
  };
  const handleQuantitySubmission = (quantity) => {
    console.log(`this is the item's qty: ${quantity}`);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(event.itemName);
    console.log(event.quantity);
    console.log("this is working");
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        "& > :not(style)": { m: 1 },
      }}
    >
      <Button onClick={toggleFormVisibility}>
        {isFormVisible ? "Hide Form" : "Add New Inventory Item"}
      </Button>

      {isFormVisible && (
        <div>
          <FormControl onSubmit={handleFormSubmit}>
            <TextField
              helperText="Click above and enter item's name"
              id="demo-helper-text-aligned"
              label="Item Name"
              value={itemName}
              onSubmit={handleItemNameSubmission}
              type="text"
              style={
                {
                  // paddingBottom: 100,
                }
              }
              onChange={(event) => {
                setItemName(event.target.value);
              }}
            />
            <TextField
              helperText="Click above & enter item's quantity"
              id="demo-helper-text-aligned-no-helper"
              label="Quantity"
              value={quantity}
              onSubmit={handleQuantitySubmission}
              style={
                {
                  // paddingTop: 100,
                }
              }
              type="text"
              onChange={(event) => {
                setQuantity(event.target.value);
              }}
            />
            <Button variant="Contained" onClick={handleFormSubmit}>
              Enter Values
            </Button>
          </FormControl>
        </div>
      )}
    </Box>
  );
};

export default AddItemComponent;
