import { Route, Switch } from 'react-router-dom'
import Experience from '../pages/Experience'
import Work from '../pages/Work'

function Main() {

  
  return(
    <main className='views'>
      <h1>Welcome to Sam's Page</h1>
      <Switch>
        <Route exact path ="/experience">
          <Experience />
        </Route>
        <Route exact path ="/work">
          <Work />
        </Route>
      </Switch>
    </main>
  )

}

export default Main