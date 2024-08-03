"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { Box, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CommentIcon from "@mui/icons-material/Comment";
import IconButton from "@mui/material/IconButton";
import { query, collection, getDocs } from "firebase/firestore";

export default function Home() {
  const [inventory, setInventory] = useState([]);
  const [open, setOpen] = useState(false);
  const [itemName, setItemName] = useState("");

  const updateInventory = async () => {
    const snapshot = query(collection(db, "inventory"));
    const docs = await getDocs(snapshot);
    const inventoryList = [];
    docs.forEach((doc) => {
      inventoryList.push({
        name: doc.id,
        ...doc.data(),
      });
    });

    setInventory(inventoryList);
  };

  useEffect(() => {
    updateInventory();
  }, []);

  const GutterlessList = () => {
    return (
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        {inventory.map((item) => (
          <ListItem
            sx={{
              textAlign: "center",
            }}
            key={item}
            disableGutters
            secondaryAction={
              <IconButton aria-label="comment">
                <CommentIcon />
              </IconButton>
            }
          >
            <ListItemText primary={`${item.name}`} />
          </ListItem>
        ))}
      </List>
    );
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h1">Inventory Management</Typography>
      <div>
        <GutterlessList />
      </div>
    </Box>
  );
}
