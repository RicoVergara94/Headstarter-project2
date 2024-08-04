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

  const [event, setEvent] = useState([]);

  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };

  const handleItemNameChange = (event) => {
    event.preventDefault();
    setItemName(event.target.value);
  };
  const handleQuantityChange = (event) => {
    event.preventDefault();
    setQuantity(event.target.value);
  };
  const handleFormSubmit = async () => {
    // removed event parameter
    const qty = Number(quantity);
    await setDoc(doc(db, "inventory", itemName), { qty });
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
          <FormControl>
            <TextField
              helperText="Click above and enter item's name"
              id="demo-helper-text-aligned"
              label="Item Name"
              value={itemName}
              type="text"
              style={
                {
                  // paddingBottom: 100,
                }
              }
              onChange={handleItemNameChange}
            />
            <TextField
              helperText="Click above & enter item's quantity"
              id="demo-helper-text-aligned-no-helper"
              label="Quantity"
              value={quantity}
              // onSubmit={handleQuantitySubmission}
              style={
                {
                  // paddingTop: 100,
                }
              }
              type="text"
              onChange={handleQuantityChange}
            />
            <Button
              variant="Contained"
              type="submit"
              onClick={handleFormSubmit}
            >
              Enter Values
            </Button>
          </FormControl>
        </div>
      )}
    </Box>
  );
};

export default AddItemComponent;
