import React from "react";
import MainCarousel from "../../components/HomeCarrousel/MainCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "../../../data/mens_kurta";
import Footer from "../../components/Footer/Footer";


function HomePage(){
    return (
        <div>
            <MainCarousel/>
            <div>
                <HomeSectionCarousel data={mens_kurta} sectionName={"Men's kurta"}/>
                <HomeSectionCarousel data={mens_kurta} sectionName={"Men's shoes"}/>
                <HomeSectionCarousel data={mens_kurta} sectionName={"Women's kurta"}/>
                <HomeSectionCarousel data={mens_kurta} sectionName={"Women's saree"}/>
            </div>
        </div>
    )
}

export default HomePage;