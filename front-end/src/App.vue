<template>

  <div id="app">
  
    <header id="header">
      <h1>Study Groups</h1>
      <nav>
        <router-link to="/"><i class="fas fa-home"></i></router-link>
        <router-link to="/dashboard"><i class="fas fa-user"></i></router-link>
      </nav> 
    </header>
    
  <div id="directory-content">
    <div class="sidebarLeadership">
      <h3>Contact Information</h3>
      <h5>Instructor</h5>
      <ul class="leadershipGroup">
        <li>Professor Daniel Zappala</li>
        <li>Email: zappala@cs.byu.edu</li>
        <li><a href="https://discord.com/invite/77kYwfaHdE">Discord Link</a></li>
      </ul>
      <h5>TA's</h5>
      <ul class="leadershipGroup">
        <li>Kathryn Gates</li>
        <li>Warda Usman</li>
        <li>Parker Nichols</li>
        <li>Conner Mattson</li>
        <li>Madeline Bisel</li>
        <li>James Conners</li>
        <li>Andy Smith</li>
        <li>Zach Eliason</li>
      </ul>
      <h5>Study Group Sessions</h5>
      <ul class="leadershipGroup">
        <div v-for="group in groups" :key="group.id">
          <li>Group {{group.number}}: {{group.days}} {{group.time}}</li>
      </div>
      </ul>
    </div>
  </div>
    
  <router-view/>
    
  <div id='footer'><a href='https://github.com/elliking1/cp5' target='_blank'><i class="fab fa-github"></i></a>
  This took me too many hours. I would estimate 5.</div>
 </div>
</template>

<style>
body {
  font-family: 'Work Sans', sans-serif;
  font-weight: 300;
  font-size: 13pt;
  margin: 0px 150px 20px 20px;
}

#header {
  /* Semi-circle */
  margin: 0 1em 1em 0;
  height: 100px;
  width: 200px;
  border-bottom-left-radius: 200px;
  border-bottom-right-radius: 200px;
  /* Fixed position */
  position: fixed;
  z-index: 10000;
  left: 50%;
  transform: translate(-50%, 0);
  /* Color and alignment */
  background: #E67A82;
  text-align: center;
  box-shadow: 0 0 0 1em #FFF;
}

.sidebarLeadership {
  height: 100%;
  width: 250px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  left: 0;
  top: 100px;
  background-color: #24595A; 
  color: white;
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 20px;
  padding-left: 10px;
}

.leadershipGroup {
  display: block;
  list-style-type: circle;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  margin-left: 0;
  margin-right: 0;
  padding-left: 20px;
}

nav {
  display: flex;
  justify-content: center;
}

h1 {
  color: #fff;
  font-size: 18px;
}

h2 {
  font-size: 12px;
  color: #EEB39A;
}

h4, h5 {
  color: #EEB39A;
  }
  
h3 {
  color: #E67A82;
  }

#header .fas {
  font-size: 25px;
  color: #fff;
  width: 50px;
}

#footer {
   font-size: 13pt;
   position: absolute;
   bottom: 0;
   color: white;
   background-color: #EEB39A; 
   margin: 0px 0px;
   width: 100%;
   text-align: center;
}

.pure-button-primary {
  background-color: #277E8E;
}
</style>
