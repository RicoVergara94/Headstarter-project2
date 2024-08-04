"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { Box, Typography, Button } from "@mui/material";
import GutterlessList from "./components/GutterlessList";
import AddItemComponent from "./components/AddItemComponent";
import {
  query,
  collection,
  getDocs,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";

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
  }, [inventory]);

  const removeItem = async (item) => {
    const docRef = doc(db, `inventory/${item.name}`);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const { quantity } = docSnap.data();
      if (quantity >= 1) {
        setDoc(docRef, { quantity: quantity - 1 });
      }
    } else {
      console.log("do nothing");
    }
  };

  const addItem = async (item) => {
    const docRef = doc(db, `inventory/${item.name}`);
    const docSnap = await getDoc(docRef);
    const { quantity } = docSnap.data();
    await setDoc(docRef, { quantity: quantity + 1 });
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexWrap: "wrap",
        // position: "relative",
        display: "grid",
        placeitems: "center",
        border: "2px solid grey",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h1"
        sx={{ outlineColor: "black", backgroundColor: "yellow" }}
      >
        Inventory Management
      </Typography>
      <Box
        id="add-item-section"
        sx={{
          outline: "black",
        }}
      >
        <AddItemComponent inventory={inventory} setInventory={setInventory} />
      </Box>
      <Box>
        <GutterlessList
          inventory={inventory}
          removeItem={removeItem}
          addItem={addItem}
        />
      </Box>
    </Box>
  );
}
