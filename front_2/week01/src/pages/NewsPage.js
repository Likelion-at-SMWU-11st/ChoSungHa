import React, { useState } from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';
import { useParams } from 'react-router-dom';

{/* 아래부터 작성해 주세요! */}
const NewsPage = () => {
    const { category } = useParams();
    const [selectedCategory, setSelectedCategory] = useState(category || 'all');

    const handleCategorySelect = (newCategory) => {
        setSelectedCategory(newCategory);
    };

    return (
        <>
        <Categories onSelect={handleCategorySelect} />
        <NewsList category={selectedCategory}/>
        </>
    );
};

export default NewsPage;