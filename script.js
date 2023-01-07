const body = document.querySelector('body');
const btn = document.querySelector('.see-project');
btn.addEventListener('click', () => {
  const section = document.createElement('div');
  const popup = document.createElement('div');
  section.className = 'mobile-popup';
  popup.className = 'modal';
  popup.innerHTML = `
                <div class="popup-header">
                    <h1 class="card-heading">Tonic</h1>
                    <button data-close-button class="close-btn">&times;</button>
                </div>
                    <div class="title">  
                        <ul class="card-client">
                            <li class="client-name">CANOPY</li>
                            <li>
                                <img class="period-1" src="./images/Counter.svg" alt="period">
                            </li>
                            <li class="duties">Back End Dev</li>
                            <li>
                                <img class="period-2" src="./images/Counter.svg" alt="period">
                            </li>
                            <li class="work-year">2015</li>
                        </ul>
                        <div class="card-img">
                            <img class="project-img" src="./images/Snapshoot Portfolio.svg" alt="project-image">
                        </div>
                        <p class="popup-project-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                        but also the leap into electronic typesetting, remaining essent</p>
                        <ul class="coding-lang">
                            <li class="popup-html">
                                <a href="#" class="cl">html</a>
                            </li>
                            <li class="popup-css">
                                <a href="#" class="cl">css</a>
                            </li>
                            <li class="popup-javascript">
                                <a href="#" class="cl">javascript</a>
                            </li>
                        </ul>
                        <hr id="line-pop">
                        <div class="btn-container">
                        <button class="see-live-container-btn">
                            <a id="btn-icon" href="#" class="see-live-btn">See live &nbsp
                                <img src="./images/Icon.svg" alt="see-live-icon">
                            </a>
                        </button>
                        <button class="see-source-container-btn">
                            <a id="btn-icon" href="#" class="see-source-btn">See Source &nbsp
                                <img src="./images/github.svg" alt="see-source-icon">
                            </a>
                        </button>
                        </div>
                        <div id="overlay"></div>
                    </div>    
`;
  section.appendChild(popup);
  body.appendChild(section);
  const close = document.querySelector('.close-btn');

  close.addEventListener('click', () => {
    body.removeChild(section);
  });
});

const open = document.querySelector('.desktop-project');

open.addEventListener('click', () => {
  const mains = document.createElement('div');
  mains.className = 'desktop-pops';
  const dPopup = document.createElement('div');
  dPopup.className = 'desktop-modal';
  dPopup.innerHTML = `
  <div class="dtop-title">
  <h1 class ="dtop-card-title">Tonic</h1>
  <button class="dtop-close-btn">&times;</button>
</div>

<ul class="dtop-card-list">
<li class="card-title">CANOPY</li>
<li>
<img class="dtop-dot1" src="./images/Counter.svg" alt="dtop-dot"> 
</li>
<li class="dtop-dev">Back End Dev</li>
<li>
<img class="dtop-dot2" src="./images/Counter.svg" alt="dtop-dot">
</li>
<li class="dtop-year">2015</li>
</ul>

<img id="two" class="dtop-card-img" src="./images/Desktop Snapshoot Portfolio.svg" alt="Desktop-Card-Image">

  <p class="dtop-description">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea 
  </p>
  <div class="dtop-body-container">
  <ul class="dtop-coding-lang">
      <li class="dtop-html">
          <a href="#">html</a>
      </li>

      <li class="dtop-css">
          <a href="#">css</a>
      </li>

      <li class="dtop-js">
          <a href="#">JavaScript</a>
      </li>

      <li class="dtop-github">
          <a href="#">github</a>
      </li>

      <li class="dtop-ruby">
          <a href="#">ruby</a>
      </li>

      <li class="dtop-bootstraps">
          <a href="#">Bootstraps</a>
      </li>
  </ul>

  <div class="dtop-btn-container">
      <button class="dtop-see-live">
          <a id="dtop-btn-icon" class="dtop-see-live-btn" href="#">See live &nbsp;
              <img src="./images/Icon.svg" alt="see-live-icon">
          </a>
      </button>

      <button class="dtop-See-Source">
          <a id="dtop-btn-icon" class="dtop-see-live-btn" href="#">See Source &nbsp;
              <img src="./images/github.svg" alt="see-source-icon">
          </a>
      </button>
  </div>
  </div>
`;
  mains.appendChild(dPopup);
  body.appendChild(mains);

  const close = document.querySelector('.dtop-close-btn');
  close.addEventListener('click', () => {
    body.removeChild(mains);
  });
});