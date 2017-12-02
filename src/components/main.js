import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from './../components/home/home'
import { About } from './../components/about/about'
import { News } from './../components/news/news'
import { Products } from './../components/products/products'
import { Contact } from './../components/contact/contact'


export const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/products' component={Products}/>
      <Route path='/news' component={News}/>
      <Route path='/about' component={About}/>
    </Switch>
  </main>
)