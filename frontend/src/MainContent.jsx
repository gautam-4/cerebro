import Habits from "./components/Habits";
import ExpenseTracker from "./components/ExpenseTracker";
import Note from "./components/Note";
import Pomodoro from "./components/Pomodoro";
import Progress from "./components/Progress";
import Todo from "./components/Todo";

function MainContent() {
    return (
        <main>
            <section className="section-one">
                <Habits />
                <Note />
            </section>

            <section className="section-two">
                <Todo/>
                <Progress />
            </section>

            <section className="section-three">
                <Pomodoro />
                <ExpenseTracker />
            </section>
        </main>
    );
}

export default MainContent