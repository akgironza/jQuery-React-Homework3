function Display(props) {
    const questionData = props.question
    const answerData = props.answer

    if (props.question) {
        return (
        <div>
            <div className="questionData">
                <h3>Question: {questionData[0].question}</h3>
                <h3>Category: {questionData[0].category.title}</h3>
                <h3>Points: {questionData[0].value}</h3>
            </div>

            <div className="answerData">
                <h3>Answer: {questionData[0].answer}</h3>
            </div>
            
        </div>
        )
    } else {
        return <h2>Let's Play!</h2>
    };
}

export default Display;