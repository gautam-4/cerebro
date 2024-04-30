import todoBig from '../assets/todoBig.png'

function SectionOne() {
  return (
    <>
    <section className="sectionOne landingSection">
        <div data-aos="fade-right">
            <img src={todoBig} alt="" />
        </div>
        <div data-aos="fade-left">
            <div className="sectionOneHeading">Elevate Your Productivity</div>
            <div className="sectionOneDescription">Your all-in-one productivity companion. Take control of your life and achieve more.</div>
        </div>
    </section>
    </>
  )
}

export default SectionOne