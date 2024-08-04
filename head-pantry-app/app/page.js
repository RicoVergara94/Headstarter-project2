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
        justifyContent: "center",
        // position: "relative",
        display: "grid",
        placeitems: "center",
      }}
    >
      <Typography variant="h1">Inventory Management</Typography>
      <div id="add-item-section">
        <AddItemComponent inventory={inventory} setInventory={setInventory} />
      </div>
      <div>
        <GutterlessList
          inventory={inventory}
          removeItem={removeItem}
          addItem={addItem}
        />
      </div>
    </Box>
  );
}
