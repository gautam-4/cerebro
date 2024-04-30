import expense from '../assets/expense.png'
import pomodoro from '../assets/pomodoro.png'
import { useState, useEffect } from 'react';

function SectionTwo() {
    const [highlightedCard, setHighlightedCard] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setHighlightedCard((prev) => (prev + 1) % 2);
        }, 4000);

        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <section className="sectionTwo landingSection">
                
                <div className="sectionTwoRight">
                    <div className="sectionTwoDescription">
                        {highlightedCard === 0 && <div data-aos="fade-right">Boost focus, enhance productivity</div>}
                        {highlightedCard === 1 && <div data-aos="fade-right">Stay focused and make the most out of your work sessions</div>}
                    </div>
                </div>

                <div className="sectionTwoLeft" >
                    {highlightedCard === 0 && <img src={ expense } alt="" data-aos="fade-left"/>}
                    {highlightedCard === 1 && <img src={ pomodoro } alt="" data-aos="fade-left"/>}
                        
                </div>
            </section>
        </>
    )
}

export default SectionTwo