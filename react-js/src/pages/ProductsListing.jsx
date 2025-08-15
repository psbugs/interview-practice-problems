import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

// Learn shimmer UI standard experience
const ProductsListing = () => {
    const [dishes, setDishes] = useState([]);
    const [filteredDishes, setFilteredDishes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [enteredText, setEnteredText] = useState("");

    const handleSearch = () => {
        let newDishes = [...dishes];
        newDishes = newDishes.filter((dish, dIndex) =>
            dish.title.toLowerCase().includes(enteredText)
        );
        setFilteredDishes(newDishes);
    };

    const fetchDishes = async (isMounted, controller) => {
        try {
            setLoading(true);
            const response = await fetch("https://dummyjson.com/products", {
                signal: controller?.signal,
            });
            if (!response.ok) {
                throw new Error(`Failed to fetch: ${response.status}`);
            }
            const json = await response.json();
            if (isMounted) {
                setDishes(json.products || []);
                setFilteredDishes(json.products || []);
                setLoading(false);
            }
        } catch (err) {
            if (isMounted) {
                setError(err.message || "Unknown error");
                setLoading(false);
            }
        }
    };
    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        fetchDishes(controller);
        return () => {
            isMounted = false;
            controller.abort();
        };
    }, []);

    // this is known as conditional rendering
    if (loading) return <Shimmer />;
    if (error)
        return <p style={{ color: "red", textAlign: "center" }}>{error}</p>;
    return (
        <>
            <button onClick={() => { }}>{isLoggedIn ? "Login" : "Logout"}</button>
            <input
                type="text"
                placeholder="Search product title"
                value={enteredText}
                onChange={(e) => setEnteredText(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            <div style={styles.container}>
                {filteredDishes.map((dish) => (
                    <div key={dish.id} style={styles.card}>
                        <img src={dish.thumbnail} alt={dish.title} style={styles.image} />
                        <h3 style={styles.title}>{dish.title}</h3>
                        <p style={styles.description}>{dish.description}</p>
                        <p style={styles.price}>₹{dish.price}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

const styles = {
    container: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        padding: "20px",
    },
    card: {
        background: "#fff",
        padding: "15px",
        borderRadius: "12px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        textAlign: "center",
    },
    image: {
        width: "100%",
        height: "180px",
        objectFit: "cover",
        borderRadius: "8px",
    },
    title: {
        fontSize: "1.2rem",
        margin: "10px 0 5px",
    },
    description: {
        fontSize: "0.9rem",
        color: "#555",
        minHeight: "40px",
    },
    price: {
        fontSize: "1rem",
        fontWeight: "bold",
        marginTop: "10px",
    },
};

export default ProductsListing;