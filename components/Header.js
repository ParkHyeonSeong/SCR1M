import MENU from '@public/images/hamburger_menu.svg'

const header = () => {

  return (
    <div className='Header'>
      <div className='Header__Left'>
        {/* <MENU /> */}
        <div>HOME</div>
        <div>TEAM</div>
      </div>
      <div className='Header__Center'>
        SCR1M
      </div>
      <div className='Header__Right'>
        <div>알림버튼</div>
        <div>마이버튼</div>
      </div>
    </div>
  )
}

export default header;
