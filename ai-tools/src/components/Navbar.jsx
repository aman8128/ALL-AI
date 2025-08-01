import React from 'react';
import './Navbar.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar bg="light" variant="light" className="custom-navbar" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">MyApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav" className='justify-content-center'>
          <Nav className="gap-5 align-items-center">
            <div className="nav-item dropdown hover-dropdown">
              <Nav.Link role="button" className="custom-nav">
                Products <i className="bi bi-caret-down-fill"></i>
              </Nav.Link>
              <div className="dropdown-menu custom-dropdown">
                <a href="/new-ai" className="custom-dropdown-item">
                  <i className="bi bi-stars icon"></i>
                  <div>
                    <div className="title">New AIs</div>
                    <div className="subtitle">The Latest AIs, every day</div>
                  </div>
                </a>
                <a href="/saved-ais" className="custom-dropdown-item">
                  <i className="bi bi-bookmark icon"></i>
                  <div>
                    <div className="title">Most Saved AIs</div>
                    <div className="subtitle">AIs with the most favorites</div>
                  </div>
                </a>
                <a href="/most-used" className="custom-dropdown-item">
                  <i className="bi bi-graph-up icon"></i>
                  <div>
                    <div className="title">Most Used AIs</div>
                    <div className="subtitle">AIs with highest website traffic</div>
                  </div>
                </a>
              </div>
            </div>
            <Nav.Link href="/category" className='custom-nav'>Category</Nav.Link>
            <div className="nav-item dropdown hover-dropdown">
              <Nav.Link role="button" className='custom-nav'>
                Services <i className="bi bi-caret-down-fill"></i>
              </Nav.Link>
              <div className="dropdown-menu custom-dropdown">
                <a href="/new-ai" className="custom-dropdown-item">
                  <i className="bi bi-search icon"></i>
                  <div>
                    <div className="title">Explore AI Tools</div>
                    <div className="subtitle">Search & category-wise filter</div>
                  </div>
                </a>
                <a href="/saved-ais" className="custom-dropdown-item">
                  <i className="bi bi-tags-fill icon"></i>
                  <div>
                    <div className="title">AI Categories</div>
                    <div className="subtitle">Eg. Content Creation</div>
                  </div>
                </a>
                <a href="/most-used" className="custom-dropdown-item">
                  <i className="bi bi-wrench icon"></i>
                  <div>
                    <div className="title">Top Rated Tools</div>
                    <div className="subtitle">Weekly or monthly top tools</div>
                  </div>
                </a>
                <a href="/most-used" className="custom-dropdown-item">
                  <i className="bi bi-lightbulb icon"></i>
                  <div>
                    <div className="title">Suggest a Tool</div>
                    <div className="subtitle">OpenAI GPT-4</div>
                  </div>
                </a>
                <a href="/most-used" className="custom-dropdown-item">
                  <i className="bi bi-rocket icon"></i>
                  <div>
                    <div className="title">Submit Your Tool</div>
                    <div className="subtitle">Fill up simple form to submit</div>
                  </div>
                </a>
              </div>
            </div>
            <Nav.Link href="/pricing" className='custom-nav'>Pricing</Nav.Link>
            <Nav.Link href="/about" className='custom-nav'>About</Nav.Link>
            <Nav.Link href="/contact" className='custom-nav'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
