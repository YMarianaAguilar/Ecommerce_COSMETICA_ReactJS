import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import { Box, Button, Typography } from "@mui/material";

import { collection, getDocs, query, where } from "firebase/firestore";

import { useContext, useEffect, useState } from "react";
import { db } from "../../config/firebaseConfig";
import { CardItem } from "../CardItem/CardItem";
import { CartContext } from "../../context/CartContext";
import { seedProductsDb } from "../../utils/seedProductsDb";
import { FirebaseContext } from "../../context/FirebaseContext";

export const Products = () => {
  const { totalProducts } = useContext(CartContext);
  const { getProductsDB, products, changes } = useContext(FirebaseContext);

  useEffect(() => {
    getProductsDB();
  }, [changes]);

  return (
    <>
      <Box component="nav" display="flex" justifyContent="space-around">
        <Button variant="contained" color="inherit" onClick={() => getProductsDB()}>
          HOME
        </Button>
        <Button variant="contained" color="inherit" onClick={() => getProductsDB("perfumes")}>
          PERFUMES
        </Button>
        <Button variant="contained" color="inherit" onClick={() => getProductsDB("maquillaje")}>
          MAQUILLAJE
        </Button>
        <Box display="flex">
          <ShoppingCartSharpIcon color="action" />
          <Typography> {totalProducts} </Typography>
        </Box>
      </Box>
      <Typography fontSize={25} marginBottom={3}>
        Productos
      </Typography>
      <Box component="div" display="flex" flexWrap="wrap">
        {products.map((product) => (
          <CardItem key={product.id} {...product} />
        ))}
      </Box>
    </>
  );
};
