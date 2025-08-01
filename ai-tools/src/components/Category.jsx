import React, { useEffect, useState } from 'react';
import { Card, Spinner, Alert, Button } from 'react-bootstrap';
import { FiMenu, FiX } from 'react-icons/fi';
import './Category.css';

function Category() {
    const [toolsList, setToolsList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const fetchTools = async () => {
        try {
            const response = await fetch("http://localhost:8000/tools");
            if (!response.ok) {
                throw new Error("Failed to fetch tools");
            }
            const data = await response.json();
            setToolsList(data.tools);
            if (data.tools.length > 0) {
                setSelectedCategory(data.tools[0].category);
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTools();
    }, []);

    const uniqueCategories = [...new Set(toolsList.map(tool => tool.category))];
    const filteredTools = toolsList.filter(tool => 
        tool.category === selectedCategory ||
        tool.tool.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            {/* Header */}
            <div className="category-header">
                <div className="header-text">
                    <h1>🔍 Discover Powerful AI Tools by Category</h1>
                    <p>Supercharge your workflow with the best AI tools — all neatly organized for creators, developers & businesses.</p>
                </div>
                <div className="header-image">
                    <img 
                        src="https://cdn-icons-png.flaticon.com/512/9799/9799789.png" 
                        alt="AI Bot" 
                    />
                </div>
            </div>

            {/* Mobile Sidebar Toggle Button */}
            <Button 
                className="sidebar-toggle-btn"
                onClick={() => setSidebarOpen(!sidebarOpen)}
            >
                {sidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </Button>

            {/* Layout */}
            <div className="layout-wrapper">
                {/* Sidebar */}
                <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                    <div className="sidebar-header">
                        <h4>Categories</h4>
                        <span className="tools-count">{toolsList.length} Tools</span>
                    </div>
                    <div className="sidebar-content">
                        <ul>
                            {uniqueCategories.map((category, index) => {
                                const count = toolsList.filter(tool => tool.category === category).length;
                                return (
                                    <li
                                        key={index}
                                        className={selectedCategory === category ? 'active' : ''}
                                        onClick={() => {
                                            setSelectedCategory(category);
                                            if (window.innerWidth <= 768) setSidebarOpen(false);
                                        }}
                                    >
                                        <span>{category}</span>
                                        <span className="category-count">{count}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className="main-content">
                    {loading ? (
                        <div className="text-center py-5">
                            <Spinner animation="border" variant="primary" />
                            <p className="mt-3">Loading tools...</p>
                        </div>
                    ) : error ? (
                        <Alert variant="danger" className="m-3">
                            Error: {error}
                        </Alert>
                    ) : (
                        <>
                            <div className="content-header">
                                <h2>{selectedCategory}</h2>
                                <input
                                    type="text"
                                    placeholder="Search tools..."
                                    className="search-input"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>

                            <div className="tools-grid">
                                {filteredTools.length === 0 ? (
                                    <p className="no-tools">No tools found in this category.</p>
                                ) : (
                                    filteredTools.map((tool, index) => (
                                        <Card key={index} className="tool-card">
                                            <Card.Body>
                                                <div className="tool-header">
                                                    {tool.tool_mage_url && (
                                                        <img
                                                            src={tool.tool_mage_url}
                                                            alt={tool.tool}
                                                            className="tool-image"
                                                        />
                                                    )}
                                                    <div className="tool-info">
                                                        <div className="tool-title-row">
                                                            <Card.Title>{tool.tool}</Card.Title>
                                                            <div className="tool-rating">
                                                                <span className="stars">★★★★★</span>
                                                                <span>({tool.upvotes || 0})</span>
                                                            </div>
                                                        </div>
                                                        <span className={`tool-pricing ${tool.pricing === 'Free' ? 'free' : 'paid'}`}>
                                                            {tool.pricing || 'Freemium'}
                                                        </span>
                                                    </div>
                                                </div>
                                                <Card.Text className="tool-description">
                                                    {tool.tool_description || 'No description available.'}
                                                </Card.Text>
                                                <div className="tool-footer">
                                                    <a
                                                        href={tool.link || `https://www.${tool.tool.toLowerCase().replace(/\s+/g, '')}.com`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="visit-btn"
                                                    >
                                                        Visit
                                                    </a>
                                                    {tool.upvotes > 600 && (
                                                        <span className="editors-pick">Editor's Pick</span>
                                                    )}
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    ))
                                )}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default Category;