import { Route, Switch } from 'react-router-dom'
import Experience from '../pages/Experience'
import Work from '../pages/Contact'
import About from '../pages/About'

function Main() {

  
  return(
    <main className='views'>
      <h1>Welcome to Sam's Page</h1>
      <Switch>
        <Route exact path ="/about">
          <About />
        </Route>
        <Route exact path ="/experience">
          <Experience />
        </Route>
        <Route exact path ="/contact">
          <Work />
        </Route>
      </Switch>
    </main>
  )

}

export default Main