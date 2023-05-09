import React from 'react'
import {Container, Button, Title, Count} from './style'
import MyComponent from './Context/Context';

function App() {

  return (
    <div>
      <MyComponent></MyComponent>
      <Container>
      <Title>My App</Title>
      <Count>Count: 0</Count>
      <Button onClick={() => console.log('Button clicked!')}>
        Click me
      </Button>
    </Container>
      
    </div>
  )
}

export default App
