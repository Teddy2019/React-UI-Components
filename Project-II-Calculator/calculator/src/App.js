import React from 'react';
import './App.css';
import DisplayComp from './components/DisplayComponents/CalculatorDisplay'
import ButtonHolder1 from './components/ButtonComponents/ButtonHolder1'
import ButtonHolder2 from './components/ButtonComponents/ButtonHolder2'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      total: [0]
    }
  }
  takeNumValue = (num)=>{
   const total = this.state.total.slice();
   total.push(num);
   this.setState({total})
  };

  clearDisplay = ()=>{
    const total = [0];
    this.setState({total})
  };

  equalOperator = ()=>{
    const total = this.state.total.slice();
    const totals = [];
    if(total.includes('x')){
      const totall = total.join('');
      const totalplus = totall.split('x');
      const multiplication = totalplus[0] * totalplus[1];
      totals.push(multiplication);
    };

    if(total.includes('+')){
      const totall = total.join('');
      const totalplus = totall.split('+');
      const sum = Number(totalplus[0]) + Number(totalplus[1]);
      totals.push(sum);
    };

    if(total.includes('÷')){
      const totall = total.join('');
      const totalplus = totall.split('÷');
      const divid = totalplus[0] / totalplus[1];
      totals.push(divid);
    }

    if(total.includes('-')){
      const totall = total.join('');
      const totalplus = totall.split('-');
      const subtract = totalplus[0] - totalplus[1];
      totals.push(subtract);
    }
    
    this.setState({total: totals});
  };
  render(){ 
    return (
    <div className='App'>
      <DisplayComp total={this.state.total} />
      <ButtonHolder1 handeltakeNumValue={this.takeNumValue} handelclearDisplay={this.clearDisplay} />
      <ButtonHolder2 handeltakeNumValue={this.takeNumValue} handelequalOperator={this.equalOperator} />
    </div>
  );
  }
};

export default App;
