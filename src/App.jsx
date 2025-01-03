import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import './App.css';

function App() {
    const [images, setImages] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [page, setPage] = useState(1); 
    const [hasMore, setHasMore] = useState(true); 

    useEffect(() => {
        fetchImages();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [page, searchQuery]);

    const fetchImages = async () => {
        try {
            const endpoint = searchQuery
                ? 'https://api.unsplash.com/search/photos'
                : 'https://api.unsplash.com/photos';

            const response = await axios.get(endpoint, {
                params: {
                    query: searchQuery || undefined,
                    client_id: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
                    page: page,
                    per_page: 30,
                },
            });

            const newImages = searchQuery ? response.data.results : response.data;

            setImages((prevImages) => [...prevImages, ...newImages]);
            if (newImages.length === 0) {
                setHasMore(false); 
            }
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop >=
            document.documentElement.offsetHeight - 100
        ) {
            if (hasMore) {
                setPage((prevPage) => prevPage + 1); 
            }
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        setImages([]); 
        setPage(1); 
        setHasMore(true);
    };

    return (
        <div className="App">
            <header>
                <h1>Image Gallery</h1>
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Search images..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit">Search</button>
                </form>
            </header>
            <main>
                <div className="image-grid">
                    {images.map((image) => (
                        <motion.div
                            key={image.id}
                            className="image-item"
                            whileHover={{ scale: 1.05, boxShadow: '0px 4px 15px rgba(0,0,0,0.2)' }}
                            onClick={() => setSelectedImage(image)}
                        >
                            <img src={image.urls.small} alt={image.alt_description} />
                        </motion.div>
                    ))}
                </div>
            </main>
            {selectedImage && (
                <motion.div
                    className="modal"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedImage.urls.regular} alt={selectedImage.alt_description} />
                        <h2>{selectedImage.alt_description || 'Untitled'}</h2>
                        <p>By {selectedImage.user.name}</p>
                    </div>
                </motion.div>
            )}
        </div>
    );
}

export default App;
