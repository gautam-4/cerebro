import logo from '../assets/logo.png'
import habits from '../assets/habits.png'
import todo from '../assets/todo.png'
import pomodoro from '../assets/pomodoro.png'
import expense from '../assets/expense.png'

function Features() {
    return (
        <>
            <section className='landingSection sectionThree'>
                <div className='slogan' data-aos="flip-up">
                    Explore our feautres
                </div>
                <div id="carousel" data-aos="fade-up">
                    <figure id="spinner">
                        <div><img src={logo} alt="" /></div>
                        <div><img src={habits} alt="" /></div>
                        <div><img src={todo} alt="" /></div>
                        <div><img src={pomodoro} alt="" /></div>
                        <div><img src={expense} alt="" /></div>
                    </figure>
                </div>
            </section>
        </>
    )
}

export default Features