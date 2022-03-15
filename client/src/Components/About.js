import React from 'react'

function About() {
  return (
    <div>
      <div className="container emp-profile mt-3" style={{backgroundColor:'#eeeeee' ,boxShadow:2,shadowColor:'black',color:'black'}}>
        <form method="">
          <div className="row">
            <div className="col-md-4">
              <img src="https://cdn.pixabay.com/photo/2015/03/03/20/42/man-657869_960_720.jpg" style={{ width: 150, height: 200 }} />
              <p style={{marginTop:20}}>YouTube</p>
              <p style={{marginTop:20}}>Instagram</p>
              <p style={{marginTop:20}}>FaceBook</p>
              <p style={{marginTop:20}}>Whatsapp</p>
              <p style={{marginTop:20}}>Twitter</p>
              <p style={{marginTop:20}}>LinkdIn</p>
              <p style={{marginTop:20}}>Signal</p>
              </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>Hammad Ali</h5>
                <h6>Web Developer</h6>
                <p className="mt-3 mb-5"> Rankings <span>1/10</span></p>
                <ul class="nav nav-tabs">
                  <li class="active"><a href="#home">Home</a></li>
                  <li className="ml-5"><a href="#profile">About</a></li>  
                </ul>
                <div className='row  tab-pane fade show active' id="home" role="tabpanel" aria-labelledby='home-tab'>
                  <div className='col-md-6'>
                  <p style={{marginTop:60}}>User Id</p>
                  <p style={{marginTop:25}}>Name</p>
                  <p style={{marginTop:25}}>Email</p>
                  <p style={{marginTop:25}}>Phone</p>
                  <p style={{marginTop:25}}>Proffession</p>
                  </div>
                  <div className='col-md-6'>
                    <p style={{marginTop:60,color:'blue'}}>030</p>
                    <p style={{marginTop:25,color:'blue'}}>Hammad</p>
                    <p style={{marginTop:25,color:'blue'}}>ali@gmail.com</p>
                    <p style={{marginTop:25,color:'blue'}}>03030303234</p>
                    <p style={{marginTop:25,color:'blue'}}>Developer</p>
                  </div>
                </div>
                
              </div>
            </div>
              <div className="col-md-2">
                <input style={{backgroundColor:'#eeeeee',width:90,borderRadius:2}} type='text' value="Edit Profile"/>
              </div>
            </div>
        </form>
      </div>
    </div>
  )
}

export default About