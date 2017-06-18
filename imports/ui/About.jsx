import React, { Component } from 'react';

export default class About extends Component {

  setSession(){
    console.log("ASDFADSF");
    Session.set('test', "jasper");
  }

  render(){
    return (
      <div>
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet, eos at meliore inermis phaedrum, ius et meis utamur singulis, at tritani epicurei vel. An zril graecis invenire eum, ei choro labitur gubergren mel, dolor causae vel eu. No mel ullum tollit. Cu eirmod copiosae philosophia eos, mei et sumo legere insolens. Prompta liberavisse te duo, qui movet prompta constituam ei.
No nobis timeam mea, reque impedit cum ut, in suas blandit eos. Audiam eripuit albucius usu ut. Illud deleniti percipit eum ut, his eripuit omittantur cu. Iusto nonumes patrioque sed ea, elit iuvaret posidonium vim eu, ea natum corrumpit argumentum vel. At sit eirmod viderer laboramus. Duis mollis scripta duo cu, feugait facilisis voluptatum vel an.
Mea at harum delicatissimi, adipiscing argumentum an nec. Pri cu decore qualisque, vel ea vitae invenire. Ea solum congue ancillae per. Inimicus suscipiantur sea ex, quo eirmod euismod fuisset cu. Eum eius malorum at, ut vis menandri moderatius. Ad nec timeam conclusionemque.
Qui ex rationibus signiferumque. Veri numquam fabellas id usu, eu his utamur aliquam accommodare, et vel prodesset vituperatoribus. Nibh indoctum mnesarchum at mel, id eos veri vocent accusamus. Duo oratio vocent ea.
Sale sanctus intellegat vim ea. Wisi placerat menandri in pri. Eu volutpat vituperata mei, te eam autem causae dignissim, pro in quidam detraxit insolens. Omnium pertinacia duo ne, alii singulis euripidis no usu. Id eam tempor omittam.</p>
      <button onClick={this.setSession.bind(this)}>Click Me</button>
      </div>
    )
  }
}
