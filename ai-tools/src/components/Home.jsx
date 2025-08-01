import React, { useEffect, useState } from 'react';
import logo from '../image/office.png';
import { Row, Col, Card, Spinner } from 'react-bootstrap';
import './Home.css';

function Home() {
    const [activeFilter, setActiveFilter] = useState('trending');
    const [activeCategory, setActiveCategory] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [tools, setTools] = useState([]);
    const [filteredTools, setFilteredTools] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch tools from API
    useEffect(() => {
        const fetchTools = async () => {
            try {
                setIsLoading(true);
                const response = await fetch('http://localhost:8000/tools');
                if (!response.ok) {
                    throw new Error('Failed to fetch tools');
                }
                const data = await response.json();
                setTools(data.tools || []);
                setFilteredTools(data.tools || []);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchTools();
    }, []);

    // Apply search and filters whenever they change
    // Updated filter logic in useEffect
    useEffect(() => {
        let results = [...tools];

        // Apply search filter
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            results = results.filter(tool =>
                tool.tool.toLowerCase().includes(query) ||
                (tool.tool_description && tool.tool_description.toLowerCase().includes(query)) ||
                (tool.category && tool.category.toLowerCase().includes(query))
            );
        }

        // Apply category filter - now using your actual database categories
        if (activeCategory) {
            results = results.filter(tool => {
                switch (activeCategory) {
                    case 'image':
                        return tool.category === 'Generative Art' ||
                            tool.category === 'Image Improvement' ||
                            tool.category === 'Image Scanning';
                    case 'chat':
                        return tool.category === 'Chat' ||
                            tool.category === 'Generative Chat';
                    case 'code':
                        return tool.category === 'Generative Code';
                    case 'video':
                        return tool.category === 'Generative Video' ||
                            tool.category === 'Text-To-Video' ||
                            tool.category === 'Video Editing';
                    case 'productivity':
                        return tool.category === 'Productivity';
                    case 'audio':
                        return tool.category === 'Music' ||
                            tool.category === 'Speech-To-Text' ||
                            tool.category === 'Text-To-Speech' ||
                            tool.category === 'Voice Modulation';
                    default:
                        return true;
                }
            });
        }

        // Rest of your filter logic remains the same
        switch (activeFilter) {
            case 'free':
                results = results.filter(tool => tool.pricing === 'Free');
                break;
            case 'new':
                results = results.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 10);
                break;
            case 'top':
                results = results.sort((a, b) => (b.upvotes || 0) - (a.upvotes || 0)).slice(0, 10);
                break;
            case 'trending':
                results = results.sort((a, b) => (b.upvotes || 0) - (a.upvotes || 0)).slice(0, 10);
                break;
            default:
                break;
        }

        setFilteredTools(results);
    }, [searchQuery, activeFilter, activeCategory, tools]);

    const handleSearch = (e) => {
        e.preventDefault();
        // The useEffect will handle the search automatically
    };

    return (
        <div className="container py-1">
            <div className="container mt-5">
                <div className="text-center mb-5 px-3">
                    <h1 className='display-5 fw-bold mb-3'>Discover Your Ideal AI Solution</h1>
                    <p className="lead text-muted mb-4">Find, compare, and select the perfect AI tools tailored to your requirements</p>
                </div>

                {/* Search + Filter Section */}
                <div className="container px-4">
                    {/* Main Search Bar */}
                    <form onSubmit={handleSearch}>
                        <div className="row justify-content-center mb-4">
                            <div className="col-12 col-md-10 col-lg-8">
                                <div className="input-group shadow-lg rounded-pill overflow-hidden" style={{ border: 'none' }}>
                                    <span className="input-group-text bg-white ps-3 ps-md-4" style={{ border: 'none' }}>
                                        <i className="bi bi-search text-dark"></i>
                                    </span>
                                    <input
                                        type="text"
                                        className="form-control py-2 py-md-3 px-2 fs-6 fs-md-5"
                                        style={{ border: 'none', boxShadow: 'none' }}
                                        placeholder="Search AI tools..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                    <button type="submit" className="btn btn-secondary px-3 px-md-4 fw-semibold rounded-end">
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>

                    <div className="row justify-content-center mb-4">
                        <div className="col-lg-10 d-flex flex-wrap justify-content-center gap-2">

                            <button
                                className={`btn btn-sm rounded-pill px-3 d-flex align-items-center ${activeFilter === 'trending' ? 'btn-success' : 'btn-outline-success'}`}
                                onClick={() => setActiveFilter('trending')}
                            >
                                <i className="bi bi-lightning-fill me-2"></i> Trending
                            </button>
                            <button
                                className={`btn btn-sm rounded-pill px-3 ${activeFilter === 'free' ? 'btn-success' : 'btn-outline-success'}`}
                                onClick={() => setActiveFilter('free')}
                            >
                                Free Tools
                            </button>
                            <button
                                className={`btn btn-sm rounded-pill px-3 ${activeFilter === 'new' ? 'btn-success' : 'btn-outline-success'}`}
                                onClick={() => setActiveFilter('new')}
                            >
                                New Releases
                            </button>
                            <button
                                className={`btn btn-sm rounded-pill px-3 d-flex align-items-center ${activeFilter === 'top' ? 'btn-success' : 'btn-outline-success'}`}
                                onClick={() => setActiveFilter('top')}
                            >
                                <i className="bi bi-star-fill text-warning me-2"></i> Top Rated
                            </button>
                        </div>
                    </div>

                    {/* Category Filters */}
                    <div className="row justify-content-center g-3">
                        <div className="col-lg-2 col-md-4 col-6">
                            <div
                                className={`filter-card text-center p-3 rounded-3 shadow-sm border hover-effect ${activeCategory === 'image' ? 'active' : ''}`}
                                onClick={() => setActiveCategory('image')}
                            >
                                <i className="bi bi-image text-primary fs-4 mb-2"></i>
                                <div className="fw-medium">Image AI</div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6">
                            <div
                                className={`filter-card text-center p-3 rounded-3 shadow-sm border hover-effect ${activeCategory === 'chat' ? 'active' : ''}`}
                                onClick={() => setActiveCategory('chat')}
                            >
                                <i className="bi bi-chat-left-text text-primary fs-4 mb-2"></i>
                                <div className="fw-medium">Chatbots</div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6">
                            <div
                                className={`filter-card text-center p-3 rounded-3 shadow-sm border hover-effect ${activeCategory === 'code' ? 'active' : ''}`}
                                onClick={() => setActiveCategory('code')}
                            >
                                <i className="bi bi-code-slash text-primary fs-4 mb-2"></i>
                                <div className="fw-medium">Code AI</div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6">
                            <div
                                className={`filter-card text-center p-3 rounded-3 shadow-sm border hover-effect ${activeCategory === 'video' ? 'active' : ''}`}
                                onClick={() => setActiveCategory('video')}
                            >
                                <i className="bi bi-film text-primary fs-4 mb-2"></i>
                                <div className="fw-medium">Video Tools</div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6">
                            <div
                                className={`filter-card text-center p-3 rounded-3 shadow-sm border hover-effect ${activeCategory === 'productivity' ? 'active' : ''}`}
                                onClick={() => setActiveCategory('productivity')}
                            >
                                <i className="bi bi-briefcase text-primary fs-4 mb-2"></i>
                                <div className="fw-medium">Productivity</div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6">
                            <div
                                className={`filter-card text-center p-3 rounded-3 shadow-sm border hover-effect ${activeCategory === 'audio' ? 'active' : ''}`}
                                onClick={() => setActiveCategory('audio')}
                            >
                                <i className="bi bi-music-note text-primary fs-4 mb-2"></i>
                                <div className="fw-medium">Audio AI</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                {isLoading ? (
                    <div className="text-center py-5">
                        <Spinner animation="border" variant="primary" />
                        <p className="mt-3">Loading AI tools...</p>
                    </div>
                ) : error ? (
                    <div className="alert alert-danger text-center">
                        {error}
                    </div>
                ) : (
                    <>
                        <h3 className="mb-4">
                            {filteredTools.length} {filteredTools.length === 1 ? 'Result' : 'Results'} Found
                            {searchQuery && ` for "${searchQuery}"`}
                            {activeCategory && ` in ${activeCategory}`}
                        </h3>

                        <Row className="g-4">
                            {filteredTools.length > 0 ? (
                                filteredTools.map((tool, index) => (
                                    <Col key={index} lg={4} md={6}>
                                        <Card className="h-100 shadow-sm hover-effect">
                                            <Card.Body>
                                                <div className="d-flex align-items-start mb-3">
                                                    {tool.tool_mage_url && (
                                                        <img
                                                            src={tool.tool_mage_url}
                                                            alt={tool.tool}
                                                            className="rounded me-3"
                                                            style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                                        />
                                                    )}
                                                    <div>
                                                        <Card.Title className="mb-1">{tool.tool}</Card.Title>
                                                        <div className="d-flex align-items-center mb-2">
                                                            <span className="badge bg-primary me-2">{tool.category}</span>
                                                            <span className={`badge ${tool.pricing === 'Free' ? 'bg-success' :
                                                                tool.pricing === 'Paid' ? 'bg-danger' : 'bg-warning'
                                                                }`}>
                                                                {tool.pricing}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Card.Text className="text-muted">
                                                    {tool.tool_description || 'No description available.'}
                                                </Card.Text>
                                                <div className="d-flex justify-content-between align-items-center mt-auto">
                                                    <a
                                                        href={tool.link || '#'}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="btn btn-sm btn-outline-primary"
                                                    >
                                                        Visit Tool
                                                    </a>
                                                    <div className="text-muted small">
                                                        {tool.upvotes || 0} upvotes
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))
                            ) : (
                                <Col className="text-center py-5">
                                    <i className="bi bi-search display-4 text-muted mb-3"></i>
                                    <h4>No tools found matching your criteria</h4>
                                    <p className="text-muted">Try adjusting your search or filters</p>
                                    <button
                                        className="btn btn-outline-primary"
                                        onClick={() => {
                                            setSearchQuery('');
                                            setActiveFilter('trending');
                                            setActiveCategory(null);
                                        }}
                                    >
                                        Clear Filters
                                    </button>
                                </Col>
                            )}
                        </Row>
                    </>
                )}
            </div>

            <div className="row align-items-center mt-5 text-center text-lg-start">
                {/* Left Side: Text (Should come first on mobile) */}
                <div className="col-lg-6 order-1 order-lg-1">
                    <h1 className='font1'>
                        The Fastest <span className="text-success">Way</span> To Find The Perfect AI Tool.
                    </h1>
                    <p>Explore various AI tools and services.</p>
                </div>

                {/* Right Side: Image (Should come after text on mobile) */}
                <div className="col-lg-6 order-2 order-lg-2 mt-4 mt-lg-0">
                    <img
                        src={logo}
                        alt="AI Tools"
                        className="img-fluid w-100"
                        style={{
                            maxWidth: '500px',
                            width: '100%',
                            height: 'auto',
                            margin: '0 auto',
                            display: 'block'
                        }}
                    />
                </div>
            </div>

            <hr className="my-4 w-50 justify-content-center mx-auto" />

            <div className='text-center mt-5 mb-5'>
                <h2 className='fw-bold display-6 mb-4'>Why Choose Us?</h2>
                <Row className="g-4 my-4 justify-content-center">
                    <Col lg={4} md={6}>
                        <Card className="h-100 shadow-lg border-0 rounded-4 overflow-hidden hover-effect">
                            <Card.Header className="bg-white fw-semibold fs-5 border-0 py-3 px-4 bg-gradient-light">
                                <div className="d-flex align-items-center">
                                    <div className="icon-circle bg-primary-light me-3">
                                        <i className="bi bi-patch-check-fill text-primary"></i>
                                    </div>
                                    Verified & Updated Tools
                                </div>
                            </Card.Header>
                            <Card.Body className="px-4 pb-4 pt-3">
                                <p className="text-muted mb-0 fs-6">
                                    We rigorously test and maintain our database to list only real, working AI tools—including free, freemium, and discounted options—with up-to-date features, accurate pricing, and practical use-cases. No fluff or outdated information.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4} md={6}>
                        <Card className="h-100 shadow-lg border-0 rounded-4 overflow-hidden hover-effect">
                            <Card.Header className="bg-white fw-semibold fs-5 border-0 py-3 px-4 bg-gradient-light">
                                <div className="d-flex align-items-center">
                                    <div className="icon-circle bg-info-light me-3">
                                        <i className="bi bi-funnel-fill text-info"></i>
                                    </div>
                                    Smart Filters & Use-Cases
                                </div>
                            </Card.Header>
                            <Card.Body className="px-4 pb-4 pt-3">
                                <p className="text-muted mb-0 fs-6">
                                    Our intelligent filtering system helps you find tools by specific tasks—writing, coding, design, or productivity. Each listing includes real-world use cases, free plan limitations, and helpful prompt suggestions when relevant.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4} md={6}>
                        <Card className="h-100 shadow-lg border-0 rounded-4 overflow-hidden hover-effect">
                            <Card.Header className="bg-white fw-semibold fs-5 border-0 py-3 px-4 bg-gradient-light">
                                <div className="d-flex align-items-center">
                                    <div className="icon-circle bg-warning-light me-3">
                                        <i className="bi bi-gem text-warning"></i>
                                    </div>
                                    Exclusive Deals & Freebies
                                </div>
                            </Card.Header>
                            <Card.Body className="px-4 pb-4 pt-3">
                                <p className="text-muted mb-0 fs-6">
                                    We curate the best AI deals, highlight underrated gems, and uncover free alternatives to paid tools. Our team updates these daily so you'll never miss valuable opportunities to save money while getting premium tools.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Home;