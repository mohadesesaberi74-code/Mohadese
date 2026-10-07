'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { Product } from '@/data/products';

export interface CartItem {
  product: Product;
  weight: string;
  weightLabel: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  favorites: string[];
  addToCart: (product: Product, weight: string, weightLabel: string, price: number, quantity?: number) => void;
  removeFromCart: (productId: string, weight: string) => void;
  updateQuantity: (productId: string, weight: string, quantity: number) => void;
  clearCart: () => void;
  toggleFavorite: (productId: string) => void;
  isFavorite: (productId: string) => boolean;
  cartCount: number;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('nobaraneh-cart');
      if (savedCart) setItems(JSON.parse(savedCart));
      const savedFav = localStorage.getItem('nobaraneh-favorites');
      if (savedFav) setFavorites(JSON.parse(savedFav));
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem('nobaraneh-cart', JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem('nobaraneh-favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToCart = useCallback((product: Product, weight: string, weightLabel: string, price: number, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id && i.weight === weight);
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id && i.weight === weight
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [...prev, { product, weight, weightLabel, price, quantity }];
    });
  }, []);

  const removeFromCart = useCallback((productId: string, weight: string) => {
    setItems((prev) => prev.filter((i) => !(i.product.id === productId && i.weight === weight)));
  }, []);

  const updateQuantity = useCallback((productId: string, weight: string, quantity: number) => {
    if (quantity < 1) return;
    setItems((prev) =>
      prev.map((i) =>
        i.product.id === productId && i.weight === weight ? { ...i, quantity } : i
      )
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const toggleFavorite = useCallback((productId: string) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  }, []);

  const isFavorite = useCallback((productId: string) => favorites.includes(productId), [favorites]);

  const cartCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const cartTotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, favorites, addToCart, removeFromCart, updateQuantity, clearCart, toggleFavorite, isFavorite, cartCount, cartTotal }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}

export function formatPrice(price: number): string {
  return price.toLocaleString('fa-IR');
}
