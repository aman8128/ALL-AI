import './About.css';

function About() {
    return (
        <div className="ai-about" style={{
            maxWidth: '1440px',
            margin: '0 auto',
            fontFamily: "'Inter', sans-serif",
            color: '#1A1A1A',
            backgroundColor: '#FFFFFF',
            overflowX: 'hidden'
        }}>
            {/* Hero Section */}
            <section style={{
                padding: '80px 20px',
                background: 'linear-gradient(180deg, #F0F5FF 0%, #FFFFFF 100%)',
                textAlign: 'center'
            }}>
                <div style={{
                    maxWidth: '800px',
                    margin: '0 auto'
                }}>
                    <h1 style={{
                        fontSize: 'clamp(36px, 5vw, 72px)',
                        fontWeight: '700',
                        lineHeight: '1.1',
                        marginBottom: '24px',
                        letterSpacing: '-0.03em'
                    }}>
                        The <span style={{ color: '#2563EB' }}>AI Tools</span> Aggregator
                    </h1>
                    <p style={{
                        fontSize: 'clamp(16px, 2vw, 20px)',
                        lineHeight: '1.6',
                        color: '#666666',
                        marginBottom: '48px'
                    }}>
                        Your ultimate guide to finding the best free, freemium, and discounted AI tools across all categories.
                    </p>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '16px',
                        flexWrap: 'wrap'
                    }}>
                        <button style={{
                            padding: '12px 24px',
                            backgroundColor: '#2563EB',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            fontSize: '16px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                            onClick={() => window.location.href = '/category'}
                        >
                            Explore Tools
                        </button>
                        <button style={{
                            padding: '12px 24px',
                            backgroundColor: 'transparent',
                            color: '#1A1A1A',
                            border: '1px solid #1A1A1A',
                            borderRadius: '8px',
                            fontSize: '16px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}>
                            How It Works
                        </button>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="mission-section">
                <div className="mission-container">

                    {/* Text Content */}
                    <div className="mission-text">
                        <h2>
                            About <span className="highlight">Our Mission</span>
                        </h2>
                        <p>
                            In the rapidly evolving AI landscape, finding the right tools can be overwhelming. We created this platform to be the "Trivago of AI Tools" - a single destination where you can discover, compare, and access the best AI solutions for your needs.
                        </p>
                        <p>
                            Our team verifies every listing to ensure you get accurate, up-to-date information about pricing, features, and free alternatives.
                        </p>
                        <button>Learn About AI Tools</button>
                    </div>

                    {/* Image */}
                    <div className="mission-image">
                        <img
                            src="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                            alt="AI Tools Dashboard"
                        />
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section style={{
                padding: '60px 20px',
                backgroundColor: '#1A1A1A',
                color: 'white'
            }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    gap: '30px'
                }}>
                    {[
                        { number: '900+', label: 'AI Tools Listed' },
                        { number: '50+', label: 'Categories' },
                        { number: '70%', label: 'Free/Freemium' },
                        { number: '24/7', label: 'Updated' }
                    ].map((stat, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                            <h3 style={{
                                fontSize: 'clamp(36px, 5vw, 60px)',
                                fontWeight: '700',
                                color: '#3B82F6',
                                marginBottom: '16px'
                            }}>{stat.number}</h3>
                            <p style={{
                                fontSize: 'clamp(14px, 2vw, 18px)',
                                color: '#CCCCCC'
                            }}>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Features Section */}
            <section style={{
                padding: '60px 20px',
                textAlign: 'center',
                backgroundColor: '#F8FAFC'
            }}>
                <div style={{
                    maxWidth: '800px',
                    margin: '0 auto 40px'
                }}>
                    <h2 style={{
                        fontSize: 'clamp(32px, 4vw, 48px)',
                        fontWeight: '700',
                        lineHeight: '1.2',
                        marginBottom: '24px',
                        letterSpacing: '-0.02em'
                    }}>
                        Why <span style={{ color: '#2563EB' }}>Choose Us</span>
                    </h2>
                    <p style={{
                        fontSize: 'clamp(16px, 2vw, 18px)',
                        lineHeight: '1.6',
                        color: '#666666'
                    }}>
                        We go beyond just listing tools - we help you make informed decisions.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    gap: '30px'
                }}>
                    {[
                        {
                            title: 'Verified Information',
                            description: 'Every tool is manually verified for accuracy',
                            icon: '✅'
                        },
                        {
                            title: 'Free Alternatives',
                            description: 'We highlight free options for paid tools',
                            icon: '💡'
                        },
                        {
                            title: 'Use Case Examples',
                            description: 'Practical prompts and implementation guides',
                            icon: '🎯'
                        },
                        {
                            title: 'Deal Alerts',
                            description: 'Never miss limited-time offers and trials',
                            icon: '🔔'
                        },
                        {
                            title: 'Comparison Tool',
                            description: 'Side-by-side feature and pricing comparison',
                            icon: '⚖️'
                        },
                        {
                            title: 'Daily Updates',
                            description: 'New tools and features added regularly',
                            icon: '🔄'
                        }
                    ].map((feature, index) => (
                        <div key={index} style={{
                            backgroundColor: '#FFFFFF',
                            borderRadius: '16px',
                            padding: '30px 20px',
                            boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                            transition: 'transform 0.3s ease'
                        }}>
                            <div style={{
                                fontSize: '40px',
                                marginBottom: '20px'
                            }}>
                                {feature.icon}
                            </div>
                            <h3 style={{
                                fontSize: '20px',
                                fontWeight: '700',
                                margin: '0 0 16px'
                            }}>{feature.title}</h3>
                            <p style={{
                                fontSize: '16px',
                                color: '#666666',
                                lineHeight: '1.6'
                            }}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section style={{
                padding: '80px 20px',
                background: 'linear-gradient(135deg, #1E40AF 0%, #2563EB 100%)',
                color: 'white',
                textAlign: 'center',
                borderRadius: '0'
            }}>
                <div style={{
                    maxWidth: '800px',
                    margin: '0 auto'
                }}>
                    <h2 style={{
                        fontSize: 'clamp(32px, 4vw, 48px)',
                        fontWeight: '700',
                        lineHeight: '1.2',
                        marginBottom: '24px',
                        letterSpacing: '-0.02em'
                    }}>
                        Ready to Find <span style={{ color: '#A5B4FC' }}>Your Perfect AI Tool?</span>
                    </h2>
                    <p style={{
                        fontSize: 'clamp(16px, 2vw, 18px)',
                        lineHeight: '1.6',
                        color: '#E5E7EB',
                        marginBottom: '48px'
                    }}>
                        Join thousands of users who save time and money with our curated AI tools collection.
                    </p>
                    <button style={{
                        padding: '12px 24px',
                        backgroundColor: 'white',
                        color: '#2563EB',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '16px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                    }}
                        onClick={() => window.location.href = '/category'}
                    >
                        Browse All Tools
                    </button>
                </div>
            </section>
        </div>
    )
}

export default About;