import React from 'react'
import { TeamData } from '../components/TeamData'
import HeroPages from '../components/HeroPages'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const TeamPage = () => {
  return (
    <section className="team-page">
        <HeroPages name="Our Team" />
        <div className="cotnainer">
          <div className="team-container">
            {TeamData.map((item, id) => (
              <div key={id} className="team-container__box">
                <div className="team-container__box__img-div">
                  <img src={item.image} alt="team_img" />
                </div>
                <div className="team-container__box__descr">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Banner/>
        <Footer/>
      </section>
  )
}

export default TeamPage
