<template>
  <div id="app">
    <header id="header">
      <h1>Study Groups</h1>
      <nav>
        <router-link to="/"><i class="fas fa-home"></i></router-link>
        <router-link to="/dashboard"><i class="fas fa-user"></i></router-link>
      </nav> 
    </header>
    <router-view />
    
    <div id="directory-content">
    <div class="sidebarLeadership">
      <h3>Contact Information</h3>
      <h5>Instructor</h5>
      <ul class="leadershipGroup">
        <li>Professor Daniel Zappala</li>
        <li>Email: zappala@cs.byu.edu</li>
        <li><a href="https://discord.com/invite/77kYwfaHdE">Discord Channel</a></li>
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
    
    
    
  <div id='footer'><a href='https://github.com/elliking1/cp5' target='_blank'><i class="fab fa-github"></i></a>
  This took me too many hours. I would estimate 5.</div>
 </div>
</template>

<style>
/* Color scheme: https://paletton.com/#uid=7040u0knHs+edG7jrvYscpiuCk2 */
/* red: #e74c3c
 * blue: #277E8E
 */
body {
  font-family: 'Work Sans', sans-serif;
  font-weight: 300;
  font-size: 13pt;
  margin: 0px 200px;
}

#header {
  /* Semi-circle */
  margin: 0 1em 50px 0;
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
}

#header .fas {
  font-size: 25px;
  color: #fff;
  width: 50px;
}

.pure-button-primary {
  background-color: #277E8E;
}
</style>
