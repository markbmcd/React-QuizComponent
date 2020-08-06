import React, { Component } from 'react'

class QuizQuestion extends Component{

render(){
  return(
<main>
  <section>
    <p>
      <p>{this.props.quiz_question.instruction_test}</p>
    </p>
  </section>
  <section className="buttons">
    <ul>
      <Li>{this.props.quiz_question.answer.answer_options[0]} </Li>

    </ul>
  </section>
</main>
)
}
}


export default QuizQuestion
