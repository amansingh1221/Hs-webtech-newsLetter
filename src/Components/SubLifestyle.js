import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
<<<<<<<< HEAD:src/Components/SubLifestyle.js
import Social from '../Components/LifestyleCOMP/Social'
import MustRead from '../Components/LifestyleCOMP/MustRead'
import SubNewsCard from '../Components/LifestyleCOMP/SubCategory/SubNewsCard'
import SubPopular from '../Components/LifestyleCOMP/SubCategory/SubPopular'
========
import Social from './Social'
import MustRead from './MustRead'
import SubNewsCard from './SubNewsCard'
import SubPopular from './SubPopular'
>>>>>>>> 666f05616d64856dc71f73b7459e36cae8c438ad:src/Components/Lifestyle/SubLifestyle.js

const SubLifestyle = ({ subcategory }) => {
    return (
        <>
            <Container>
                <h6 className='position-relative display-inline-block mt-4' style={{ fontSize: "10px", color: "grey" }}>
                    {`Home > LifeStyle`}
                </h6>
                <h3 className='position-relative display-inline-block mt-2' style={{ fontWeight: "700" }}>
                    LIFESTYLE
                </h3>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <Col>
                            <Link to={`/business`} style={{ margin: "2px" }} ><Button variant='outline-dark' size='sm'>Business</Button></Link>
                            <Link to={`/healthnfitness`} style={{ margin: "2px" }} ><Button variant='outline-dark' size='sm'>Health & Fitness</Button></Link>
                            <Link to={`/recipes`} style={{ margin: "2px" }} ><Button variant='outline-dark' size='sm'>Recipes</Button></Link>
                            <Link to={`/travel`} style={{ margin: "2px" }} ><Button variant='outline-dark' size='sm'>Travel</Button></Link>
                        </Col>
                    </Col>
                </Row>
                <Row>
                    <p style={{ fontStyle: "italic", color: "grey", lineHeight: "2rem" }}>
                        Custom category description. You must learn one thing. The world was made to be free in. Give up all the other worlds Except the one in which you belong.
                    </p>
                </Row>

            </Container>
            <SubNewsCard category={subcategory}/>
            <div className="container border-bottom py-3">
                <ul className="footer1 d-flex justify-content-around list">
                    <li className="footer-list1 list-group-item">
                        {/* <h5>EDITOR PICKS</h5> */}
                        <ul className="p-0 col-12">
                            <li className="list-group-item my-3" style={{ width: "100%" }}>
                                {/* <LeftImageRightText imgSize={"6rem"} textSize={"1rem"} leftImage={footerDemo} rightText={"Discover the Most Magical Sunset in Santorini"} author={""} date={""} /> */}
                                <SubPopular category={subcategory}/>
                            </li>
                        </ul>
                    </li>

                    <li className="footer-list1 list-group-item">
                        {/* <h5>POPULAR POSTS</h5> */}
                        <ul className="p-0 sticky-top">
                            <li className="list-group-item my-3" style={{ maxWidth: "27rem" }}>
                                {/* <LeftImageRightText imgSize={"6rem"} textSize={"1rem"} leftImage={footerDemo} rightText={"Discover the Most Magical Sunset in Santorini"} author={""} date={""} /> */}
                                <Social />
                            </li>

                            <li className="list-group-item my-3" style={{ maxWidth: "27rem" }}>
                                {/* <LeftImageRightText imgSize={"6rem"} textSize={"1rem"} leftImage={footerDemo} rightText={"Discover the Most Magical Sunset in Santorini"} author={""} date={""} /> */}
                                <MustRead />
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>


        </>
    )
}

export default SubLifestyle