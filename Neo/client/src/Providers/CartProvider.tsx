"use client";
import { useContext, createContext, useState, useEffect } from "react";

const CartContext = createContext<any>(null);


export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<any[]>(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (item: any) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.id === item._id
      );
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, id: item._id, quantity: 1 }];
    });
  };
  // const removeFromCart = (itemId: string) => {
  //   setCart((prevCart) =>
  //     prevCart.filter((cartItem) => cartItem.id !== itemId)
  //   );
  // };
  const deleteFromCart = (deleteItem: any) => {
    setCart(prev => prev.filter(item => item.id !== deleteItem.id));
  };
  const clearCart = () => {
    setCart([]);
  };
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  const getCartItems = () => {
    return cart.map((item) => ({
      ...item,
      totalPrice: item.price * item.quantity,
    }));
  };
  const getCartSummary = () => {
    return {
      totalItems: getTotalItems(),
      totalPrice: getTotalPrice(),
      items: getCartItems(),
    };
  };

  const removeFromCart = (product: any) => {
    const cartItem = cart.find((item) => item.id === product.id)
    if (cartItem.quantity > 1) {
      const newCart = cart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity - 1
          };
        }
        return item;
      })
      setCart(newCart);
    }
    else {
      const newCart = cart.filter((item) => item.id !== product.id);
      setCart(newCart);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalItems,
        getTotalPrice,
        getCartItems,
        getCartSummary,
        deleteFromCart,
        
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
