import './App.css';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function Item({match}) {
    console.log(match)
  useEffect(()=> {
    fetchItem()
  }, []);

  const [item, setItem] = useState({});


  const fetchItem = async() => {
    const fetchItem = await fetch(`https://fakestoreapi.com/products/${match.params.id}`);
    const item = await fetchItem.json();
    setItem(item);
    console.log(item);
  }

  return (
    <div>
       <h1>{item.title}</h1>
       <img src={item.image} alt="" />
    </div>
  );
}

export default Item;