import React from 'react'

import { Helmet } from 'react-helmet'

import FeatureCard from '../components/feature-card'
import GalleryCard3 from '../components/gallery-card3'
import Question from '../components/question'
import './home.css'

const Home = (props) => {
  return (
      <div className="home-container">
          <Helmet>
              <title>Gabriel Nguyen</title>
              <meta property="og:title" content="Gabriel Nguyen" />
          </Helmet>
          <div className="home-header">
              <header data-thq="thq-navbar" className="home-navbar-interactive">
                  <span className="home-logo">GABRIEL</span>
                  <div data-thq="thq-navbar-nav" className="home-desktop-menu">
                      <nav className="home-links">
                          <span>Home</span>
                          <span className="home-nav2">About</span>
                          <span className="home-nav3">Portfolio</span>
                          <span className="home-nav4">Skills</span>
                          <span className="home-nav5">Contact</span>
                      </nav>
                      <div className="home-buttons">
                          <button className="home-login button">Login</button>
                          <button className="home-register button">
                              Register
                          </button>
                      </div>
                  </div>
                  <div data-thq="thq-burger-menu" className="home-burger-menu">
                      <svg viewBox="0 0 1024 1024" className="home-icon">
                          <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                  </div>
                  <div data-thq="thq-mobile-menu" className="home-mobile-menu">
                      <div className="home-nav">
                          <div className="home-top">
                              <span className="home-logo1">GABRIEL</span>
                              <div
                                  data-thq="thq-close-menu"
                                  className="home-close-menu"
                              >
                                  <svg
                                      viewBox="0 0 1024 1024"
                                      className="home-icon02"
                                  >
                                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                                  </svg>
                              </div>
                          </div>
                          <nav className="home-links1">
                              <span className="home-nav11">Home</span>
                              <span className="home-nav21">About</span>
                              <span className="home-nav31">Portfolio</span>
                              <span className="home-nav41">Skills</span>
                              <span className="home-nav51">Contact</span>
                          </nav>
                          <div className="home-buttons1">
                              <button className="home-login1 button">
                                  Login
                              </button>
                              <button className="home-register1 button">
                                  Register
                              </button>
                          </div>
                      </div>
                      <div>
                          <svg
                              viewBox="0 0 950.8571428571428 1024"
                              className="home-icon04"
                          >
                              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                          </svg>
                          <svg
                              viewBox="0 0 877.7142857142857 1024"
                              className="home-icon06"
                          >
                              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                          </svg>
                          <svg
                              viewBox="0 0 602.2582857142856 1024"
                              className="home-icon08"
                          >
                              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                          </svg>
                      </div>
                  </div>
              </header>
          </div>
          <div className="home-hero">
              <div className="home-hero1">
                  <div className="home-container01">
                      <h1 className="home-hero-heading heading1">
                          Gabriel Nguyen
                      </h1>
                      <span className="home-hero-sub-heading">
                          Software Engineer
                          <span
                              dangerouslySetInnerHTML={{
                                  __html: ' ',
                              }}
                          />
                      </span>
                      <div className="home-btn-group">
                          <button className="home-hero-button1 button">
                              Get Started
                          </button>
                          <button className="home-hero-button2 button">
                              Learn More →
                          </button>
                      </div>
                  </div>
              </div>
          </div>
          <div className="home-details">
              <div className="home-details1">
                  <div className="home-container02">
                      <span className="home-text sectionTitle">
                          <span>Details</span>
                          <br></br>
                      </span>
                      <h2 className="home-details-heading heading2">
                          About Gabriel Nguyen
                      </h2>
                      <span className="home-details-sub-heading">
                          Gabriel Nguyen is a talented software engineer with a
                          passion for creating innovative solutions. With
                          expertise in various programming languages and
                          frameworks, Gabriel has successfully developed and
                          deployed numerous projects. Explore his portfolio to
                          see his skills in action.
                      </span>
                  </div>
                  <img
                      alt="image"
                      src="me.jpg"
                      className="home-details-image"
                  />
              </div>
          </div>
          <div className="home-features">
              <div className="home-features-container">
                  <div className="home-features1">
                      <div className="home-container03">
                          <span className="home-text03 sectionTitle">
                              <span>features</span>
                              <br></br>
                          </span>
                          <h2 className="home-features-heading heading2">
                              Impressive Features
                          </h2>
                          <span className="home-features-sub-heading">
                              Discover the key features of Gabriel Nguyen&apos;s
                              portfolio website
                          </span>
                      </div>
                      <div className="home-container04">
                          <FeatureCard
                              Heading="Responsive Design"
                              SubHeading="Website is optimized for all devices and screen sizes"
                          ></FeatureCard>
                          <FeatureCard
                              Heading="Portfolio Showcase"
                              SubHeading="Display your projects, skills, and experience in an organized and visually appealing manner"
                          ></FeatureCard>
                          <FeatureCard
                              Heading="Interactive Elements"
                              SubHeading="Engage visitors with interactive elements like animations, hover effects, and smooth transitions"
                          ></FeatureCard>
                          <FeatureCard
                              Heading="Contact Form"
                              SubHeading="Allow potential clients or employers to easily get in touch with you through a contact form"
                          ></FeatureCard>
                      </div>
                  </div>
              </div>
          </div>
          <div className="home-pricing">
              <div className="home-pricing1">
                  <div className="home-container05">
                      <span className="home-text06 sectionTitle">
                          <span>Pricing</span>
                          <br></br>
                      </span>
                      <h2 className="home-pricing-heading heading2">
                          Choose Your Plan
                      </h2>
                      <span className="home-pricing-sub-heading">
                          Select the perfect plan for your portfolio website
                      </span>
                  </div>
                  <div className="home-container06">
                      <div className="home-pricing-card">
                          <div className="home-container07">
                              <span className="home-text09 heading3">Free</span>
                              <span className="home-free-plan-description">
                                  A free plan for Gabriel Nguyen&apos;s
                                  portfolio website
                              </span>
                          </div>
                          <div className="home-container08">
                              <span className="home-text10">
                                  <span>$</span>
                                  <span></span>
                              </span>
                              <span className="home-free-plan-price">0</span>
                          </div>
                          <div className="home-container09">
                              <div className="home-container10">
                                  <span className="home-text13">✔</span>
                                  <span className="home-free-plan-features">
                                      Basic portfolio website template
                                  </span>
                              </div>
                              <div className="home-container11">
                                  <span className="home-text14">✔</span>
                                  <span className="home-free-plan-features1">
                                      Limited customization options
                                  </span>
                              </div>
                              <div className="home-container12">
                                  <span className="home-text15">✔</span>
                                  <span className="home-free-plan-features2">
                                      Limited storage space
                                  </span>
                              </div>
                              <div className="home-container13">
                                  <span className="home-text16">✔</span>
                                  <span className="home-free-plan-features3">
                                      No custom domain
                                  </span>
                              </div>
                          </div>
                          <button className="home-button button">
                              Continue with Free
                          </button>
                      </div>
                      <div className="home-pricing-card1">
                          <div className="home-container14">
                              <span className="home-text17 heading3">
                                  BASIC
                              </span>
                              <span className="home-basic-plan-description">
                                  A basic plan for Gabriel Nguyen&apos;s
                                  portfolio website
                              </span>
                          </div>
                          <div className="home-container15">
                              <span className="home-text18">
                                  <span>$</span>
                                  <span></span>
                              </span>
                              <span className="home-basic-plan-pricing">7</span>
                              <span className="home-text21">/ month</span>
                          </div>
                          <div className="home-container16">
                              <div className="home-container17">
                                  <span className="home-text22">✔</span>
                                  <span className="home-text23">
                                      All features of FREE plan
                                  </span>
                              </div>
                              <div className="home-container18">
                                  <span className="home-text24">✔</span>
                                  <span className="home-basic-plan-features">
                                      Advanced portfolio website template
                                  </span>
                              </div>
                              <div className="home-container19">
                                  <span className="home-text25">✔</span>
                                  <span className="home-basic-plan-features1">
                                      Moderate customization options
                                  </span>
                              </div>
                              <div className="home-container20">
                                  <span className="home-text26">✔</span>
                                  <span className="home-basic-plan-features2">
                                      Moderate storage space
                                  </span>
                              </div>
                              <div className="home-container21">
                                  <span className="home-text27">✔</span>
                                  <span className="home-basic-plan-features3">
                                      Custom domain support
                                  </span>
                              </div>
                          </div>
                          <button className="home-button1 button">
                              Try the Basic plan
                          </button>
                      </div>
                      <div className="home-pricing-card2">
                          <div className="home-container22">
                              <span className="home-text28 heading3">
                                  <span>PRO</span>
                                  <br></br>
                              </span>
                              <span className="home-pro-plan-description">
                                  A pro plan for Gabriel Nguyen&apos;s portfolio
                                  website
                              </span>
                          </div>
                          <div className="home-container23">
                              <span className="home-text31">
                                  <span>$</span>
                                  <span></span>
                              </span>
                              <span className="home-pro-plan-pricing">20</span>
                              <span className="home-text34">/ month</span>
                          </div>
                          <div className="home-container24">
                              <div className="home-container25">
                                  <span className="home-text35">✔</span>
                                  <span className="home-text36">
                                       All features of BASIC plan
                                  </span>
                              </div>
                              <div className="home-container26">
                                  <span className="home-text37">✔</span>
                                  <span className="home-pro-plan-features">
                                      Premium portfolio website template
                                  </span>
                              </div>
                              <div className="home-container27">
                                  <span className="home-text38">✔</span>
                                  <span className="home-pro-plan-features1">
                                      Extensive customization options
                                  </span>
                              </div>
                              <div className="home-container28">
                                  <span className="home-text39">✔</span>
                                  <span className="home-pro-plan-features2">
                                      Ample storage space
                                  </span>
                              </div>
                          </div>
                          <button className="home-button2 button">
                              Try the PRO plan
                          </button>
                      </div>
                  </div>
              </div>
          </div>
          <div className="home-gallery">
              <div className="home-gallery1">
                  <h1 className="home-gallery-heading heading2">My Project</h1>
                  <span className="home-gallery-sub-heading">
                      Explore some of the projects I&apos;ve worked on
                  </span>
                  <div className="home-container29">
                      <GalleryCard3
                          image_src="https://images.unsplash.com/photo-1501889967782-18b135710152?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTk1ODEyOXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                          rootClassName="rootClassName"
                      ></GalleryCard3>
                      <GalleryCard3
                          image_src="https://images.unsplash.com/photo-1501555790667-ba7ea28b4cea?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTk1ODEyOXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                          rootClassName="rootClassName1"
                      ></GalleryCard3>
                      <GalleryCard3
                          image_src="https://images.unsplash.com/photo-1519974719765-e6559eac2575?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTk1ODEyOXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                          rootClassName="rootClassName3"
                      ></GalleryCard3>
                      <GalleryCard3
                          image_src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTk1ODEyOXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                          rootClassName="rootClassName2"
                      ></GalleryCard3>
                      <GalleryCard3
                          image_src="https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTk1ODEyOXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                          rootClassName="rootClassName4"
                      ></GalleryCard3>
                      <GalleryCard3
                          image_src="https://images.unsplash.com/photo-1447856661108-b77bc4b6d984?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTk1ODEyOXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                          rootClassName="rootClassName5"
                      ></GalleryCard3>
                      <GalleryCard3
                          image_src="https://images.unsplash.com/photo-1486081505710-1b891dea8ca3?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTk1ODEyOXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                          rootClassName="rootClassName6"
                      ></GalleryCard3>
                      <GalleryCard3
                          image_src="https://images.unsplash.com/photo-1558603668-6570496b66f8?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTk1ODEyOXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                          rootClassName="rootClassName7"
                      ></GalleryCard3>
                      <GalleryCard3
                          image_src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTk1ODEyOXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                          rootClassName="rootClassName8"
                      ></GalleryCard3>
                      <GalleryCard3
                          image_src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTk1ODEyOXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                          rootClassName="rootClassName9"
                      ></GalleryCard3>
                      <GalleryCard3
                          image_src="https://images.unsplash.com/photo-1516049084740-9a14b9c4239c?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTk1ODEyOXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                          rootClassName="rootClassName10"
                      ></GalleryCard3>
                      <GalleryCard3
                          image_src="https://images.unsplash.com/photo-1650954933593-6c9342ba0331?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTk1ODEyOXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                          rootClassName="rootClassName11"
                      ></GalleryCard3>
                  </div>
              </div>
          </div>
          <div className="home-banner">
              <div className="home-banner1">
                  <h1 className="home-banner-heading heading2">
                      Explore Gabriel&apos;s Work
                  </h1>
                  <span className="home-banner-sub-heading">
                      Discover a collection of software engineering projects.
                  </span>
                  <button className="home-banner-button button">
                      See Projects
                  </button>
              </div>
          </div>
          <div className="home-faq">
              <div className="home-faq-container">
                  <div className="home-faq1">
                      <div className="home-container30">
                          <span className="home-text40 sectionTitle">
                              <span>FAQ</span>
                              <br></br>
                          </span>
                          <h2 className="home-text43 heading2">
                              Common questions
                          </h2>
                          <span className="home-text44">
                              <span>
                                  Here are some of the most common questions
                                  that we get.
                              </span>
                              <br></br>
                              <span>
                                  <span>
                                      <span>
                                          <span
                                              dangerouslySetInnerHTML={{
                                                  __html: ' ',
                                              }}
                                          />
                                      </span>
                                      <span>
                                          <span
                                              dangerouslySetInnerHTML={{
                                                  __html: ' ',
                                              }}
                                          />
                                      </span>
                                  </span>
                                  <span>
                                      <span>
                                          <span
                                              dangerouslySetInnerHTML={{
                                                  __html: ' ',
                                              }}
                                          />
                                      </span>
                                      <span>
                                          <span
                                              dangerouslySetInnerHTML={{
                                                  __html: ' ',
                                              }}
                                          />
                                      </span>
                                  </span>
                              </span>
                              <span>
                                  <span>
                                      <span>
                                          <span
                                              dangerouslySetInnerHTML={{
                                                  __html: ' ',
                                              }}
                                          />
                                      </span>
                                      <span>
                                          <span
                                              dangerouslySetInnerHTML={{
                                                  __html: ' ',
                                              }}
                                          />
                                      </span>
                                  </span>
                                  <span>
                                      <span>
                                          <span
                                              dangerouslySetInnerHTML={{
                                                  __html: ' ',
                                              }}
                                          />
                                      </span>
                                      <span>
                                          <span
                                              dangerouslySetInnerHTML={{
                                                  __html: ' ',
                                              }}
                                          />
                                      </span>
                                  </span>
                              </span>
                          </span>
                      </div>
                      <div className="home-container31">
                          <Question
                              Answer="A portfolio website is a collection of work samples and projects that showcase a person's skills, experience, and achievements."
                              Question="What is a portfolio website?"
                          ></Question>
                          <Question
                              Answer="Having a portfolio website allows you to showcase your coding skills, projects, and accomplishments to potential employers or clients. It can help you stand out in the competitive job market and demonstrate your expertise."
                              Question="Why should I have a portfolio website as a software engineer?"
                          ></Question>
                          <Question
                              Answer="Your portfolio website should include your resume, a list of projects you have worked on, descriptions of your skills and technologies you are proficient in, and any relevant certifications or awards."
                              Question="What information should be included in my portfolio website?"
                          ></Question>
                          <Question
                              Answer="There are several ways to create a portfolio website. You can use website builders like Wix or WordPress, or you can code it from scratch using HTML, CSS, and JavaScript. There are also platforms specifically designed for creating portfolio websites for software engineers, such as GitHub Pages or Behance."
                              Question="How can I create a portfolio website?"
                          ></Question>
                          <Question
                              Answer="Yes, including personal projects in your portfolio website is highly recommended. Personal projects demonstrate your passion for coding and allow you to showcase your creativity and problem-solving skills."
                              Question="Can I include personal projects in my portfolio website?"
                          ></Question>
                      </div>
                  </div>
              </div>
          </div>
          <div className="home-footer">
              <footer className="home-footer1">
                  <div className="home-container32">
                      <span className="home-logo2">GABRIEL</span>
                      <nav className="home-nav1 home-nav1">
                          <span className="home-nav12">Home</span>
                          <span className="home-nav22">About</span>
                          <span className="home-nav32">Portfolio</span>
                          <span className="home-nav42">Skills</span>
                          <span className="home-nav52">Contact</span>
                      </nav>
                  </div>
                  <div className="home-separator"></div>
                  <div className="home-container33">
                      <span className="home-text61">
                          © 2023 myCompany, All Rights Reserved.
                      </span>
                      <div className="home-icon-group1">
                          <svg
                              viewBox="0 0 950.8571428571428 1024"
                              className="home-icon10"
                          >
                              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                          </svg>
                          <svg
                              viewBox="0 0 877.7142857142857 1024"
                              className="home-icon12"
                          >
                              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                          </svg>
                          <svg
                              viewBox="0 0 602.2582857142856 1024"
                              className="home-icon14"
                          >
                              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                          </svg>
                      </div>
                  </div>
              </footer>
          </div>
      </div>
  );
}

export default Home
