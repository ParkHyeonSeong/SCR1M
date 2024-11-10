import Header from '@components/Header'

const home = () => {

  // PARAM

  return (
    <div className="Home">
      <Header />
      <div className='Home__Body'>
        <div className='Home__Body__Box'>
          팀이름(없으면 가입)<br/>
          티어 닉네임<br/>
          티어 닉네임<br/>
          티어 닉네임<br/>
          티어 닉네임<br/>
          +
        </div>
        <div className='Home__Body__Box'>
          {true ? '매칭' : '팀 생성 or 가입'}
        </div>
      </div>
    </div>
  )
}

export default home;
