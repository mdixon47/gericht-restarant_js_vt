import { SubHeading, MenuItem } from '../../components' 
import { images, data } from '../../constants'
import './specialMenu.css'

const SpecialMenu = () => {
  return (
    <div className='app__specialMenu flex__center section__padding' id='menu'>
      <div className='app__specialMenu-title'>
        <SubHeading title='Menu that fits your platatte' />
        <h1 className='headtext__cormorant'>Today's Special</h1>
      </div>
      <div className='app__specialMenu-menu'>
        <div className='app__specialMenu-menu_wine flex__center'>
          <p className='app__specialMenu-menu_heading'>Wine & Bear</p>
          <div className="app_specialMenu-menu_item">
            {data.wines.map((wine, index) => (
              <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags}/>
            ))}
          </div>
        </div>

        <div className="app_specialMenu-menu_img ">
          <img src={images.menu} alt="menu img" />
        </div>

        <div className='app__specialMenu-menu_cocktails flex__center'>
          <p className='app__specialMenu-menu_heading'>Cocktails</p>
          <div className="app_specialMenu-menu_item">
            {data.cocktails.map((cocktails, index) => (
              <MenuItem key={cocktails.title + index} title={cocktails.title} price={cocktails.price} tags={cocktails.tags}/>
            ))}
          </div>
        </div>
      </div>
      <div style={{marginTop: '30px'}}>
        <button type="button" className='custom__button'>View More</button>
      </div>
    </div>
  ) 
}

export default SpecialMenu
