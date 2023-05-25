import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAV6JU1-Wort2UT6C9M0wRkmK1XyrOfgDM",
  authDomain: "test-database-1a4f9.firebaseapp.com",
  databaseURL: "https://test-database-1a4f9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "test-database-1a4f9",
  storageBucket: "test-database-1a4f9.appspot.com",
  messagingSenderId: "499272832925",
  appId: "1:499272832925:web:35186306d74aa253ab8174",
  measurementId: "G-2Q200W8DFE"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const teaRef = ref(db, 'teas');

const teas = [
  { id: 1, name: 'Green tea', rating: 5, price: 10, shop: "MainShop" },
  { id: 2, name: 'Black tea', rating: 4.8, price: 5, shop: "MainShop" },
  { id: 3, name: 'White tea', rating: 4.5, price: 7, shop: "MainShop" },
  { id: 4, name: 'Yellow tea', rating: 5, price: 18, shop: "SecondShop" },
  { id: 5, name: 'Herbal tea', rating: 4.9, price: 15, shop: "SecondShop" },
  { id: 6, name: 'Green tea', rating: 4.5, price: 20, shop: "SecondShop" },
  { id: 7, name: 'Green tea', rating: 4.7, price: 10, shop: "YourFavoriteShop" },
  { id: 8, name: 'Black tea', rating: 3, price: 9, shop: "YourFavoriteShop" },
  { id: 9, name: 'White tea', rating: 4, price: 35, shop: "YourFavoriteShop" },
  { id: 10, name: 'Camomile tea', rating: 3.5, price: 10, shop: "YourFavoriteShop" }
];

onValue(teaRef, (snapshot) => {
  if (!snapshot.exists()) {
    const teas = [
      { id: 1, name: 'Green tea', rating: 5, price: 10, shop: "MainShop" },
      { id: 2, name: 'Black tea', rating: 4.8, price: 5, shop: "MainShop" },
      { id: 3, name: 'White tea', rating: 4.5, price: 7, shop: "MainShop" },
      { id: 4, name: 'Yellow tea', rating: 5, price: 18, shop: "SecondShop" },
      { id: 5, name: 'Herbal tea', rating: 4.9, price: 15, shop: "SecondShop" },
      { id: 6, name: 'Green tea', rating: 4.5, price: 20, shop: "SecondShop" },
      { id: 7, name: 'Green tea', rating: 4.7, price: 10, shop: "YourFavoriteShop" },
      { id: 8, name: 'Black tea', rating: 3, price: 9, shop: "YourFavoriteShop" },
      { id: 9, name: 'White tea', rating: 4, price: 35, shop: "YourFavoriteShop" },
      { id: 10, name: 'Camomile tea', rating: 3.5, price: 10, shop: "YourFavoriteShop" }
    ];

    teas.forEach(tea => {
      push(teaRef, tea)
        .then(() => {
          console.log('The record is successfully added to the database.');
        })
        .catch((error) => {
          console.error('Error adding a record:', error);
        });
    });
  }
});









