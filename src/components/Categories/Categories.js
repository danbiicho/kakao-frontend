import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import CategoryAll from './CategoryAll/CategoryAll';
import CategoryTheme from './CategoryTheme/CategoryTheme';
import CategoryToy from './CategoryToy/CategoryToy';
import CategoryLiving from './CategoryLiving/CategoryLiving';
import CategoryStuff from './CategoryStuff/CategoryStuff';
import CategoryPhrases from './CategoryPhrases/CategoryPhrases';
import CategoryCloth from './CategoryCloth/CategoryCloth';
import CategoryPajama from './CategoryPajama/CategoryPajama';
import CategoryTravel from './CategoryTravel/CategoryTravel';
import CategoryLife from './CategoryLife/CategoryLife';
import CategoryPhone from './CategoryPhone/CategoryPhone';
import CategoryFood from './CategoryFood/CategoryFood';
import './Categories.scss';

class Categories extends Component {
  constructor() {
    super();
    this.state = {
      isAll: false,
      isTheme: false,
      isToy: false,
      isLiving: false,
      isStuff: false,
      isPhrases: false,
      isCloth: false,
      isPajama: false,
      isTravel: false,
      isLife: false,
      isPhone: false,
      isFood: false,
    }
  }

  openAll = () => {
    this.setState({
      isAll: true,
    })
  }

  closeAll = () => {
    this.setState({
      isAll: false,
    })
  }

  openTheme = () => {
    this.setState({
      isTheme: true,
    })
  }

  closeTheme = () => {
    this.setState({
      isTheme: false,
    })
  }

  openLiving = () => {
    this.setState({
      isLiving: true,
    })
  }

  closeLiving = () => {
    this.setState({
      isLiving: false,
    })
  }

  openLiving = () => {
    this.setState({
      isLiving: true,
    })
  }

  closeLiving = () => {
    this.setState({
      isLiving: false,
    })
  }

  openStuff = () => {
    this.setState({
      isStuff: true,
    })
  }

  closeStuff = () => {
    this.setState({
      isStuff: false,
    })
  }

  openPhrases = () => {
    this.setState({
      isPhrases: true,
    })
  }

  closePhrases = () => {
    this.setState({
      isPhrases: false,
    })
  }

  openCloth = () => {
    this.setState({
      isCloth: true,
    })
  }

  closeCloth = () => {
    this.setState({
      isCloth: false,
    })
  }

  openPajama = () => {
    this.setState({
      isPajama: true,
    })
  }

  closePajama = () => {
    this.setState({
      isPajama: false,
    })
  }

  openTravel = () => {
    this.setState({
      isTravel: true,
    })
  }

  closeTravel = () => {
    this.setState({
      isTravel: false,
    })
  }

  openLife = () => {
    this.setState({
      isLife: true,
    })
  }

  closeLife = () => {
    this.setState({
      isLife: false,
    })
  }

  openPhone = () => {
    this.setState({
      isPhone: true,
    })
  }

  closePhone = () => {
    this.setState({
      isPhone: false,
    })
  }

  openFood = () => {
    this.setState({
      isFood: true,
    })
  }

  closeFood = () => {
    this.setState({
      isFood: false,
    })
  }

  render() {
    return (
      <div className="Categories">
        <div className="categoriesHover">
          <div className="categoryWrapper" onMouseLeave={this.props.onMouseLeave}>
            <ul className="categoryMenuUl">
              <div class="categoryList1">
                <li
                  onMouseEnter={this.openAll}
                  onMouseLeave={this.closeAll}>전체</li>
                <li
                  onMouseEnter={this.openTheme}
                  onMouseLeave={this.closeTheme}>테마 기획전</li>
                <li
                  onMouseEnter={this.openLiving}
                  onMouseLeave={this.closeLiving}>토이</li>
                <li
                  onMouseEnter={this.openLiving}
                  onMouseLeave={this.closeLiving}>리빙</li>
                <li
                  onMouseEnter={this.openStuff}
                  onMouseLeave={this.closeStuff}>잡화 </li>
                <li
                  onMouseEnter={this.openPhrases}
                  onMouseLeave={this.closePhrases}>문구</li>
                <li
                  onMouseEnter={this.openCloth}
                  onMouseLeave={this.closeCloth}>의류</li>
                <li
                  onMouseEnter={this.openPajama}
                  onMouseLeave={this.closePajama}>파자마</li>
                <li
                  onMouseEnter={this.openTravel}
                  onMouseLeave={this.closeTravel}>여행/레져</li>
                <li
                  onMouseEnter={this.openLife}
                  onMouseLeave={this.closeLife}>생활테크</li>
                <li
                  onMouseEnter={this.openPhone}
                  onMouseLeave={this.closePhone}>폰 액세서리</li>
                <li
                  onMouseEnter={this.openFood}
                  onMouseLeave={this.closeFood}>식품</li>
              </div>
            </ul>
            {this.state.isAll && <CategoryAll onMouseEnter={this.openAll} />}
            {this.state.isTheme && <CategoryTheme onMouseEnter={this.openTheme} />}
            {this.state.isToy && <CategoryToy onMouseEnter={this.openToy} />}
            {this.state.isLiving && <CategoryLiving onMouseEnter={this.openLiving} />}
            {this.state.isStuff && <CategoryStuff onMouseEnter={this.openStuff} />}
            {this.state.isPhrases && <CategoryPhrases onMouseEnter={this.openPhrases} />}
            {this.state.isCloth && <CategoryCloth onMouseEnter={this.openCloth} />}
            {this.state.isPajama && <CategoryPajama onMouseEnter={this.openPajama} />}
            {this.state.isTravel && <CategoryTravel onMouseEnter={this.openTravel} />}
            {this.state.isLife && <CategoryLife onMouseEnter={this.openLife} />}
            {this.state.isPhone && <CategoryPhone onMouseEnter={this.openPhone} />}
            {this.state.isFood && <CategoryFood onMouseEnter={this.openFood} />}
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Categories);